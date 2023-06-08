package init

import (
	"EJM/config"
	"EJM/internal/logs"
	"EJM/pkg/models"
	"fmt"
	"github.com/casbin/casbin/v2"
	"github.com/casbin/casbin/v2/model"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func DBError() {
	if msg := recover(); msg != nil {
		log.Fatal(msg)
	} else {
		logs.Info("Database Connected Successfully")
	}
}

func DBInitialize(cfg *config.Config) *gorm.DB {
	defer DBError()

	dataSourceName := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Jakarta",
		cfg.DB.Host,
		cfg.DB.User,
		cfg.DB.Password,
		cfg.DB.Name,
		cfg.DB.Port)

	db, err := gorm.Open(postgres.Open(dataSourceName), &gorm.Config{DisableForeignKeyConstraintWhenMigrating: true})
	if err != nil {
		panic(err.Error())
	}

	return db
}

func DBCasbin(db *gorm.DB) *casbin.Enforcer {
	modelText := `
		[request_definition]
		r = sub, obj, act

		[policy_definition]
		p = sub, obj, act

		[role_definition]
		g = _, _

		[policy_effect]
		e = some(where (p.eft == allow))

		[matchers]
		m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && (r.act == p.act || p.act == "*")
			`

	a, errAdapter := gormadapter.NewAdapterByDBWithCustomTable(db, &models.CasbinRule{}, "casbin_rules")
	if errAdapter != nil {
		logs.Error(fmt.Sprintf("errAdapter : %s", errAdapter.Error()))
	}

	m, errModel := model.NewModelFromString(modelText)
	if errModel != nil {
		logs.Error(fmt.Sprintf("errModel : %s", errModel.Error()))
	}

	e, _ := casbin.NewEnforcer(m, a)

	e.AddPolicy("1", "/api/*", "GET")
	e.AddPolicy("1", "/api/*", "PUT")
	e.AddPolicy("1", "/api/*", "PATCH")
	e.AddPolicy("1", "/api/*", "DELETE")
	e.AddPolicy("1", "/api/*", "POST")

	e.LoadPolicy()

	return e
}
