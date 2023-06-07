package scripts

import (
	"TKD/pkg/models"

	"gorm.io/gorm"
)

type RoleSeeder struct {
	Name string
	DB   *gorm.DB
}

func (roleSeeder *RoleSeeder) Execute() error {
	data := []models.Role{
		{
			Name: "Superadmin",
		},
		{
			Name: "Assessor",
		},
		{
			Name: "Ajudikator",
		},
	}

	if err := roleSeeder.DB.Model(models.Role{}).Create(&data).Error; err != nil {
		return err
	}
	return nil
}

func (roleSeeder *RoleSeeder) GetName() string {
	return roleSeeder.Name
}
