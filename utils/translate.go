package utils

import (
	"errors"
	"github.com/labstack/echo/v4"
	"github.com/nicksnyder/go-i18n/v2/i18n"
)

func Translate(c echo.Context, msg *i18n.Message) (string, error) {
	lz, ok := c.Get("localizer").(*i18n.Localizer)
	if ok {
		return lz.LocalizeMessage(msg)
	}
	return "", errors.New("cannot find localizer")
}