package middlewares

import (
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func ContextDB(DB *gorm.DB) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			c.Set("db", DB)
			return next(c)
		}
	}
}
