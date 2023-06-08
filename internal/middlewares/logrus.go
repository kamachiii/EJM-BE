// Package middleware provides echo request and response output log
package middlewares

import (
	"EJM/internal/request_logger"
	"github.com/labstack/echo/v4"
	"time"
)

// Logger returns a middleware that logs HTTP requests.
func LoggerLogrus() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			req := c.Request()
			res := c.Response()
			start := time.Now()

			var err error
			if err = next(c); err != nil {
				c.Error(err)
			}
			stop := time.Now()

			id := req.Header.Get(echo.HeaderXRequestID)
			if id == "" {
				id = res.Header().Get(echo.HeaderXRequestID)
			}
			reqSize := req.Header.Get(echo.HeaderContentLength)
			if reqSize == "" {
				reqSize = "0"
			}

			request_logger.Infof("%s %d id=%s uri=%s latency=%s referer=%s",
				req.Method,
				res.Status,
				id,
				req.RequestURI,
				stop.Sub(start).String(),
				req.Referer(),
			)
			return nil
		}
	}
}
