package utils

import "github.com/labstack/echo/v4"

func BindAndValidate[T any](request T, c echo.Context) error {
	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}

	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	return nil
}
