package cmd

import (
	"TKD/config"
	_ "TKD/docs"
	"TKD/internal/logs"
	"TKD/internal/routes"
	"TKD/internal/server"
	"TKD/ui"
	"context"
	"fmt"
	"github.com/labstack/echo/v4/middleware"
	"github.com/spf13/cobra"
	echoSwagger "github.com/swaggo/echo-swagger"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func initServer(cfg *config.Config) {
	r := server.NewServer(cfg)
	routes.InitializeRoute(r, cfg)

	if cfg.App.Env == "development" {
		r.Echo.GET("/swagger/*", echoSwagger.WrapHandler)
	} else {
		r.Echo.Use(middleware.StaticWithConfig(middleware.StaticConfig{
			Filesystem: ui.BuildHTTPFS(),
			HTML5:      true,
		}))
	}

	// Start server
	go func() {
		if err := r.Start(fmt.Sprintf("%s", cfg.App.Port)); err != nil && err != http.ErrServerClosed {
			r.Echo.Logger.Fatal(err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
	<-quit

	ctx,_:= context.WithTimeout(context.Background(), 10*time.Second)

	// redis shutdown
	if r.Redis != nil {
		errShutdown := r.Redis.Close()
		if errShutdown != nil {
			log.Fatal("Cannot shutdown redis ", errShutdown)
		}
	}

	logs.Debug("Shutdowning Server ...")
	err := r.Echo.Shutdown(ctx)
	if err != nil {
		log.Fatal(err)
	}

	logs.Info("Server Stopped Gracefully")
}

func NewServerCommand(config *config.Config) *cobra.Command {
	return &cobra.Command{
		Use:   "serve",
		Short: "Start Server",
		Run: func(cmd *cobra.Command, args []string) {
			initServer(config)
		},
	}
}
