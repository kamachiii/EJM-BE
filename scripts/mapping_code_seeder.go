package scripts

import (
	"EJM/pkg/models"

	"gorm.io/gorm"
)

type MappingCodeSeeder struct {
	Name string
	DB   *gorm.DB
}

func (mappingCodeSeeder *MappingCodeSeeder) Execute() error {
	data := []models.MappingCode{
		{
			Code: "NOTES TAKEN",
			Definition: "TRANSAKSI BERHASIL",
			Status: "success",
			Priority: 100,
			Active: "active",
		},
		{
			Code: "HOST TX TIMEOUT",
			Definition: "TRANSAKSI TIMEOUT",
			Status: "success",
			Priority: 100,
			Active: "active",
		},
	}

	if err := mappingCodeSeeder.DB.Model(models.MappingCode{}).Create(&data).Error; err != nil {
		return err
	}
	return nil
}

func (mappingCodeSeeder *MappingCodeSeeder) GetName() string {
	return mappingCodeSeeder.Name
}
