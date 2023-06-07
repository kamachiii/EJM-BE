package server

import (
	"TKD/config"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestServerInitialized(t *testing.T) {
	cfg := config.NewConfig()
	s := NewServer(cfg)

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()
	s.Echo.NewContext(req, rec)

	assert.Equal(t, 200, rec.Code, "Status Code 200")
}
