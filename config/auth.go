package config

import (
	"os"
	"strconv"
)

type AuthConfig struct {
	JWTKey     string
	JWTExpired int
}

func LoadAuthConfig() AuthConfig {
	jwtExpired, err := strconv.Atoi(os.Getenv("JWT_EXPIRES"))
	if err != nil {
		panic("Cannot convert")
	}

	return AuthConfig{
		JWTKey:     os.Getenv("JWT_KEY"),
		JWTExpired: jwtExpired,
	}
}
