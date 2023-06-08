package cmd

import (
	"TKD/config"
	db "TKD/init"
	"TKD/pkg/models"
	"TKD/utils"
	"log"
	"reflect"
	"time"

	"github.com/spf13/cobra"
)

func initMigration(cfg *config.Config, args []string) {
	start := time.Now()
	dbObject := db.DBInitialize(cfg)
	log.Println("Mulai Migrasi")
	isDone := make(chan bool)
	isError := make(chan bool)
	go func() {
		modelsSlices := []interface{}{
			models.User{},
			models.Role{},
			models.Action{},
			models.RolesMenus{},
			models.JWTWhitelist{},
			models.Menu{},
			models.ActionsMenus{},
			models.Inventory{},
		}
		var filtered []interface{}
		if args[0] != utils.ALL {
			for _, modelStruct := range modelsSlices {
				for _, arg := range args {
					if arg == reflect.TypeOf(modelStruct).Name() {
						filtered = append(filtered, modelStruct)
					}
				}
			}
		} else {
			filtered = modelsSlices
		}

		err := dbObject.Debug().AutoMigrate(filtered[:]...)
		if err != nil {
			isError <- true
			defer close(isError)
		}
		isDone <- true

		defer close(isDone)
	}()

	select {
	case <-isDone:
		log.Println("Selesai juga")
	case <-isError:
		log.Println("Ada Error")
	}
	log.Println("It takes", time.Since(start).Seconds())

}

func NewMigration(cfg *config.Config) *cobra.Command {
	return &cobra.Command{
		Use:   "migration",
		Short: "Start Migration",
		Run: func(cmd *cobra.Command, args []string) {
			initMigration(cfg, args)
		},
	}
}
