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
			// Status: true,
			Priority: 100,
			// IsActive: true,
		},
		{
			Code: "HOST TX TIMEOUT",
			Definition: "TRANSAKSI TIMEOUT",
			// Status: false,
			Priority: 200,
			// IsActive: true,
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
