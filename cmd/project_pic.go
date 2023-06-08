package cmd

import (
	"EJM/config"
	db "EJM/init"
	// "EJM/pkg/models"
	// "encoding/json"
	"fmt"
	"github.com/spf13/cobra"
	"gorm.io/gorm"
	"time"
)

type QuestionerInfo struct {
	PIC       string  `json:"pic"`
	Signature string  `json:"signature"`
	Type      *string `json:"type"`
	ID        uint    `json:"id"`
}

func getPic(db *gorm.DB) []QuestionerInfo {
	var (
		// scanners []models.ProjectCompanyStructure
		result []QuestionerInfo
	)

	// db.Model(&models.ProjectCompanyStructure{}).Where("questioner_info is not null").Find(&scanners)

	// for _, scanner := range scanners {
	// 	for _, questionInfo := range scanner.QuestionerInfo {
	// 		var info QuestionerInfo
	// 		data, err := json.Marshal(questionInfo)
	// 		if err != nil {
	// 			panic("error marshalling")
	// 		}
	// 		json.Unmarshal(data, &info)
	// 		result = append(result, QuestionerInfo{
	// 			PIC:       info.PIC,
	// 			Signature: info.Signature,
	// 			Type:      info.Type,
	// 			ID:        scanner.ID,
	// 		})
	// 	}
	// }

	return result

}

func insertNewPic(db *gorm.DB, data QuestionerInfo) error {
	info := make(map[string]interface{})
	info["type"] = "QUESTIONAIRE"
	info["pic"] = data.PIC
	info["signature"] = data.Signature

	// if err := db.Model(&models.ProjectCompanyStructure{}).Where("id = ?", data.ID).Updates(&models.ProjectCompanyStructure{
	// 	QuestionerInfo: []interface{}{info},
	// }).Error; err != nil {
	// 	return err
	// }

	return nil
}

func initProjectPIC(cfg *config.Config, args []string) {
	_ = time.Now()
	dbObject := db.DBInitialize(cfg)

	pic := getPic(dbObject)

	for _, info := range pic {
		if err := insertNewPic(dbObject, info); err != nil {
			panic(err)
		}
	}

	fmt.Println("selesai")

}

func NewProjectPic(config *config.Config) *cobra.Command {
	return &cobra.Command{
		Use:   "project_pic",
		Short: "Fix data project PIC",
		Run: func(cmd *cobra.Command, args []string) {
			initProjectPIC(config, args)
		},
	}
}
