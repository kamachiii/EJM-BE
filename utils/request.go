package utils

import (
	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

func User(c echo.Context) *UserJWTPayload {
	user := c.Get("user").(*jwt.Token)
	return user.Claims.(*UserJWTPayload)
}

func GetAccessToken(c echo.Context) string {
	user := c.Get("user").(*jwt.Token)
	return user.Raw
}
