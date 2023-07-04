package scripts

import (
	"EJM/pkg/models"

	"gorm.io/gorm"
)

type RoleSeeder struct {
	Name string
	DB   *gorm.DB
}

func (roleSeeder *RoleSeeder) Execute() error {
	data := []models.Role{
		{
			Name: "Admin",
			Description: "Admin ej monitoring",
		},
		{
			Name: "Itsec",
			Description: "It Security ej monitoring",
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
