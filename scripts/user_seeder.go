package scripts

import (
	"EJM/pkg/models"
	"EJM/utils"
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
			Name: "Haru",
			Username: "Kazumoto",
			Password: pw,
			Active: "active",
			RoleId:   1,
		},
		{
			Name: "Joe",
			Username: "JoeMama",
			Password: pw,
			Active: "active",
			RoleId: 1,
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
