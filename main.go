package main

import (
	"EJM/cmd"
	"EJM/config"
	docs "EJM/docs"
	"fmt"
	"github.com/spf13/cobra"
	"log"
)

var rootCmd = &cobra.Command{
	Short: "Elektronik Journal Centralized",
	Long:  `Aplikasi Elektronik Journal Monitoring`,
}

// @title        Elektronik Journal Centralized by Mandiri
// @version      1.0
// @description  Aplikasi Elektronik Journal Monitoring
// @schemes      http
func main() {
	cfg := config.NewConfig()

	docs.SwaggerInfo.BasePath = fmt.Sprintf("/api/v%s", cfg.App.Version)
	docs.SwaggerInfo.Host = fmt.Sprintf("%s:%s", cfg.App.Host, cfg.App.Port)

	
	rootCmd.SetHelpCommand(
		&cobra.Command{
			Hidden: true,
		},
	)
	rootCmd.AddCommand(cmd.NewServerCommand(cfg))
	rootCmd.AddCommand(cmd.NewSeeder(cfg))
	rootCmd.AddCommand(cmd.NewMigration(cfg))
	err := rootCmd.Execute()
	if err != nil {
		log.Println(err)
	}
}
