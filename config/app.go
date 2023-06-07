package config

import "os"

type AppConfig struct {
	Version     string
	Debug       string
	Host        string
	StateDriver string
	Port        string
	Env         string
}

func LoadAppConfig() AppConfig {
	return AppConfig{
		Version:     os.Getenv("APP_VERSION"),
		Debug:       os.Getenv("APP_DEBUG"),
		StateDriver: os.Getenv("APP_STATE"),
		Host:        os.Getenv("APP_HOST"),
		Port:        os.Getenv("APP_PORT"),
		Env:         os.Getenv("ENV"),
	}
}
