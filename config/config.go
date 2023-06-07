package config

import (
	"TKD/internal/logs"
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	DB    DBConfig
	Auth  AuthConfig
	App   AppConfig
	Redis RedisConfig
}

func NewConfig() *Config {
	err := godotenv.Load()
	if err != nil {
		if os.Getenv("ENV") == "development" {
			logs.Error(fmt.Sprintf("Error loading .env file : %s", err.Error()))
			panic(nil)
		}
		logs.Warn("Env Not Loaded, skip to Env OS")
	}

	logs.Info("Configuration Loaded")

	return &Config{
		DB:    LoadDBConfig(),
		App:   LoadAppConfig(),
		Auth:  LoadAuthConfig(),
		Redis: LoadRedisConfig(),
	}
}

func NewConfigTest() *Config {
	return &Config{
		DB:    LoadDBConfig(),
		App:   LoadAppConfig(),
		Auth:  LoadAuthConfig(),
		Redis: LoadRedisConfig(),
	}
}
