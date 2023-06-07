package middlewares

import (
	"TKD/internal/server"
	"io"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockServer struct {
	mock.Mock
}

type User struct {
	Name  string `json:"name"  validate:"required"`
	Email string `json:"email" validate:"required,email"`
	Age   int    `json:"age"   validate:"gte=0,lte=80"`
}

func (mock *MockServer) NewServer() *server.Server {
	return &server.Server{
		Echo:   echo.New(),
		DB:     nil,
		Config: nil,
	}
}

type TestCases struct {
	Name          string
	Method        string
	ResponseCode  int
	Expected      interface{}
	Type          interface{}
	UseValidation bool
	API           string
	Body          io.Reader
}

func TestMiddleware2(t *testing.T) {
	testCases := []TestCases{
		{Name: "Berhasil", Method: http.MethodGet, ResponseCode: 200, UseValidation: false, Type: nil, Expected: 200, API: "/", Body: nil},
		{Name: "Validasi Gagal", Method: http.MethodPost, ResponseCode: 201, UseValidation: true, Type: User{}, Expected: 422, API: "/user", Body: strings.NewReader(`{"name": "12124", "email": "testinasg", "age": 20}`)},
	}

	for _, testCase := range testCases {
		t.Run(testCase.Name, func(t *testing.T) {
			s := new(MockServer).NewServer()
			s.Echo.Validator = &CustomValidator{Validator: validator.New()}
			s.Echo.HTTPErrorHandler = HttpErrorHandler()
			if testCase.UseValidation == true {
				s.Echo.Use(MiddlewareValidator(&testCase.Type))
			}

			if testCase.Method == "GET" {
				s.Echo.GET(testCase.API, func(c echo.Context) error {
					return c.String(testCase.ResponseCode, "Hello")
				})
			}

			if testCase.Method == "POST" {
				s.Echo.POST(testCase.API, func(c echo.Context) error {
					return c.String(testCase.ResponseCode, "Hello")
				})
			}

			req := httptest.NewRequest(testCase.Method, testCase.API, testCase.Body)
			req.Header.Set("Content-Type", "application/json")
			rec := httptest.NewRecorder()
			s.Echo.ServeHTTP(rec, req)

			log.Println(rec.Body.String())

			assert.Equal(t, testCase.Expected, rec.Code)
		})
	}
}

func TestMiddleware(t *testing.T) {
	s := new(MockServer).NewServer()
	s.Echo.Validator = &CustomValidator{Validator: validator.New()}
	s.Echo.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello")
	})

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()
	s.Echo.ServeHTTP(rec, req)

	assert.Equal(t, 200, rec.Code, "Status Code 200")
}

func TestMiddlewareWithCustomErrorHandler(t *testing.T) {
	s := new(MockServer).NewServer()
	s.Echo.Validator = &CustomValidator{Validator: validator.New()}
	s.Echo.HTTPErrorHandler = HttpErrorHandler()
	s.Echo.Use(MiddlewareValidator(&User{}))
	s.Echo.GET("/", func(c echo.Context) error {
		return c.String(200, "Hello")
	})

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()
	s.Echo.ServeHTTP(rec, req)

	assert.Equal(t, 422, rec.Code, "Status Code 422")
}

func TestMiddlewarePassed(t *testing.T) {
	s := new(MockServer).NewServer()
	s.Echo.Validator = &CustomValidator{Validator: validator.New()}
	s.Echo.Use(MiddlewareValidator(&User{}))
	s.Echo.HTTPErrorHandler = HttpErrorHandler()
	s.Echo.POST("/user", func(c echo.Context) error {
		return c.String(201, "Hello")
	})

	body := strings.NewReader(`{"name": "12124", "email": "testinasg", "age": 20}`)

	req := httptest.NewRequest(http.MethodPost, "/user", body)
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	s.Echo.ServeHTTP(rec, req)

	assert.Equal(t, 422, rec.Code, "Status Code 422")
	assert.Equal(t, "\"Email is not valid email\"\n", rec.Body.String())
}
