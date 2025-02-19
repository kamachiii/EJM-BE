package utils

import (
	"EJM/pkg/models"
	"reflect"

	"github.com/labstack/echo/v4"
	"github.com/nicksnyder/go-i18n/v2/i18n"
)

type Response struct {
	Data        interface{}   `json:"data"`
	Translating *i18n.Message `json:"-" swaggerignore:"true"`
	Message     interface{}   `json:"message"`
	StatusCode  int           `json:"statusCode"`
}

type ResponseTotal struct {
	Data       interface{} `json:"data"`
	Total      int         `json:"total"`
	Message    interface{} `json:"message"`
	StatusCode int         `json:"statusCode"`
}

type ResponseLeaveEmployeeProfileTotal struct {
	Data             interface{} `json:"data"`
	Total            int         `json:"total"`
	TotalLeave       int         `json:"totalLeave"`
	RemainingDaysOff int         `json:"remainingDaysOff"`
	Message          interface{} `json:"message"`
	StatusCode       int         `json:"statusCode"`
}

type ResponseHealthFundEmployeeProfileTotal struct {
	Data          interface{} `json:"data"`
	Total         int         `json:"total"`
	LimitClaim    int         `json:"limitClaim"`
	RemainingClam int         `json:"remainingClam"`
	Message       interface{} `json:"message"`
	StatusCode    int         `json:"statusCode"`
}

func (r *Response) ReturnSingleMessage(c echo.Context) error {
	return c.JSON(r.StatusCode, &r)
}

type ResponsePaginate struct {
	Key  string
	Meta *models.Paginate
	Response
}

func (rt *ResponsePaginate) ReturnPaginates(c echo.Context) error {
	v := reflect.ValueOf(*rt.Meta)
	res := make(map[string]interface{})
	res[rt.Key] = rt.Data
	res["message"] = rt.Message

	for i := 0; i < v.NumField(); i++ {
		res[v.Type().Field(i).Tag.Get("json")] = v.Field(i).Interface()
	}

	return c.JSON(rt.StatusCode, res)
}
