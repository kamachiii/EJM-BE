package middlewares

import (
	"EJM/config"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type ResponseError struct {
	Time      time.Time   `json:"time"`
	RequestID string      `json:"request_id"`
	Message   interface{} `json:"message"`
}

func HttpErrorHandler(config *config.Config) echo.HTTPErrorHandler {
	return func(err error, c echo.Context) {
		report, _ := err.(*echo.HTTPError)

		if castedObject, ok := err.(validator.ValidationErrors); ok {
			report.Code = http.StatusUnprocessableEntity
			for _, err := range castedObject {
				switch err.Tag() {
				case "required":
					report.Message = fmt.Sprintf("%s is required",
						err.Field())
				case "email":
					report.Message = fmt.Sprintf("%s is not valid email",
						err.Field())
				case "gte":
					report.Message = fmt.Sprintf("%s value must be greater than %s",
						err.Field(), err.Param())
				case "lte":
					report.Message = fmt.Sprintf("%s value must be lower than %s",
						err.Field(), err.Param())
				case "min":
					report.Message = fmt.Sprintf("%s value at least %s data", err.Field(), err.Param())
				}
				break
			}
		}
		err2 := c.JSON(report.Code, ResponseError{
			Time: time.Now(),
			// RequestID: requestId,
			Message: report.Message,
		})
		if err2 != nil {
			log.Fatal("Gak bisa return")
		}
	}
}

func MiddlewareValidator(DTO interface{}) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			u := &DTO
			if err := c.Bind(u); err != nil {
				return err
			}
			if err := c.Validate(u); err != nil {
				return err
			}
			c.Set("data", u)
			return next(c)
		}
	}

}
