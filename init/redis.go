package init

import (
	"TKD/config"
	"TKD/internal/logs"
	"context"
	"fmt"
	"os"

	redis8 "github.com/go-redis/redis/v8"
	"github.com/redis/go-redis/v9"
)

func ErrConnectRedis() {
	if msg := recover(); msg != nil {
		logs.Error(msg)
		os.Exit(1)
	}
}

func ConnectRedis(cfg *config.Config) *redis.Client {
	defer ErrConnectRedis()

	var rdb *redis.Client

	if cfg.App.StateDriver == "redis" {
		opts, err := redis.ParseURL(fmt.Sprintf("redis://%s:%s@%s:%d/%d", cfg.Redis.RedisUsername, cfg.Redis.RedisPassword, cfg.Redis.RedisHost, cfg.Redis.RedisPort, cfg.Redis.RedisDatabase))

		if err != nil {
			panic(err.Error())
		}

		rdb = redis.NewClient(opts)

		ctx := context.Background()
		if errConn := rdb.Ping(ctx).Err(); errConn != nil {
			panic(errConn)
		} else {
			logs.Info("Redis Connected successfully")
		}
	} else {
		logs.Info("Redis Skip Cache")
	}

	return rdb
}

func ConnectRedisV8(cfg *config.Config) *redis8.Client {
	defer ErrConnectRedis()

	var rdb *redis8.Client

	if cfg.App.StateDriver == "redis" {
		opts, err := redis8.ParseURL(fmt.Sprintf("redis://%s:%s@%s:%d/%d", cfg.Redis.RedisUsername, cfg.Redis.RedisPassword, cfg.Redis.RedisHost, cfg.Redis.RedisPort, cfg.Redis.RedisDatabase))

		if err != nil {
			panic(err.Error())
		}

		rdb = redis8.NewClient(opts)

		ctx := context.Background()
		if errConn := rdb.Ping(ctx).Err(); errConn != nil {
			panic(errConn)
		} else {
			logs.Info("Redis For Job Queue Connected successfully")
		}
	} else {
		logs.Warn("Redis Skiped")
	}

	return rdb
}
