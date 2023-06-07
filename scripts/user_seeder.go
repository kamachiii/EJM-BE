package scripts

import (
	"TKD/pkg/models"
	"TKD/utils"
	"gorm.io/gorm"
)

type UserSeeder struct {
	Name string
	DB   *gorm.DB
}

func (userSeeder *UserSeeder) Execute() error {
	pw, _ := utils.HashPassword("123")
	data := []models.User{
		{
			FullName: "Superadmin",
			Username: "tiul",
			Email:    "admin@gmail.com",
			Password: pw,
			RoleID:   1,
		},
	}

	if err := userSeeder.DB.Model(models.User{}).Create(&data).Error; err != nil {
		return err
	}
	return nil
}

func (userSeeder *UserSeeder) GetName() string {
	return userSeeder.Name
}
