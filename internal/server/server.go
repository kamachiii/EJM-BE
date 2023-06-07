package server

import (
	"TKD/config"
	connections "TKD/init"
	"TKD/internal/logs"
	"TKD/internal/queues"
	"context"
	"github.com/casbin/casbin/v2"
	"github.com/labstack/echo/v4"
	"github.com/redis/go-redis/v9"
	"gorm.io/gorm"
)

type IServerInterface interface {
	Start(addr string) error
}

type Server struct {
	Echo     *echo.Echo
	DB       *gorm.DB
	RedisCtx context.Context
	Redis    *redis.Client
	Casbin   *casbin.Enforcer
	Config   *config.Config
	Queue    *queues.QueueLists
}

func NewServer(config *config.Config) *Server {
	var (
		dbConn         = connections.DBInitialize(config)
		casbinEnforcer = connections.DBCasbin(dbConn)
		redisConnV8    = connections.ConnectRedisV8(config)
		redisConnV9    = connections.ConnectRedis(config)
		ctx            = context.Background()
	)

	var queueLists *queues.QueueLists

	if config.App.StateDriver == "redis" {
		queue, errQueue := queues.NewQueues(redisConnV8)
		if errQueue != nil {
			logs.Error(errQueue)
			panic(errQueue)
		}

		queueLists = queue.GetQueues()
		logs.Info("Redis Job Queue initialized")
	} else {
		logs.Info("Redis Job Queue skipped")
	}

	return &Server{
		Echo:     echo.New(),
		DB:       dbConn,
		Casbin:   casbinEnforcer,
		RedisCtx: ctx,
		Redis:    redisConnV9,
		Config:   config,
		Queue:    queueLists,
	}
}

func (server *Server) Start(addr string) error {
	return server.Echo.Start(":" + addr)
}
