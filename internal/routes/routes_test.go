package routes

import (
	"EJM/config"
	"EJM/internal/server"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/stretchr/testify/assert"
)

func TestMiddlewareWithoutHeader(t *testing.T) {
	cfg := config.NewConfig()
	s := server.NewServer(cfg)
	s.Echo.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:  cfg.Auth.JWTKey,
		TokenLookup: "header:Authorization,cookie:Token",
	}))
	s.Echo.GET("/", func(c echo.Context) error {
		token := c.Get("user").(*jwt.Token)
		return c.JSON(http.StatusOK, token.Claims)
	})

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()
	s.Echo.ServeHTTP(rec, req)

	assert.Equal(t, 400, rec.Code, "Status Code 400")
}

func TestMiddlewareWitHeaderButInvalid(t *testing.T) {
	cfg := config.NewConfig()
	s := server.NewServer(cfg)
	s.Echo.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:  cfg.Auth.JWTKey,
		TokenLookup: "header:Authorization,cookie:Token",
	}))
	s.Echo.GET("/", func(c echo.Context) error {
		token := c.Get("user").(*jwt.Token)
		return c.JSON(http.StatusOK, token.Claims)
	})

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	req.Header.Set(echo.HeaderAuthorization, middleware.DefaultJWTConfig.AuthScheme+" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")
	rec := httptest.NewRecorder()
	s.Echo.ServeHTTP(rec, req)

	assert.Equal(t, 401, rec.Code, "Status Code 401")
}
