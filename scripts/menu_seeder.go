package scripts

import (
	"TKD/pkg/models"

	"gorm.io/gorm"
)

type MenuSeeder struct {
	Name string
	DB   *gorm.DB
}

func (menuSeeder *MenuSeeder) Execute() error {
	menuSeeder.DB.Exec("TRUNCATE TABLE menus RESTART IDENTITY CASCADE")

	data := []models.Menu{
		// Overview 1
		{
			Name: "Overview",
			Path: "/overview",
		},
		{
			Name: "Dashboard",
			Path: "/dashboard",
		},
		// activity 3
		{
			Name: "Activity",
			Path: "/activity",
		},
		{
			Name: "Projects",
			Path: "/activity/projects",
		},
		{
			Name: "Tambah Project Baru",
			Path: "/activity/projects/add",
		},
		{
			Name: "Detail Project",
			Path: "/activity/projects/:id",
		},
		{
			Name: "Assigned Tasks",
			Path: "/activity/assigned-tasks",
		},
		{
			Name: "Assigned Tasks Questioner",
			Path: "/activity/projects/questionaire/:projectCode",
		},
		// management 9
		{
			Name: "Management",
			Path: "/management",
		},
		{
			Name: "Users",
			Path: "/management/users",
		},
		{
			Name: "Roles",
			Path: "/management/roles",
		},
		{
			Name: "Settings",
			Path: "/management/settings",
		},
		// data master 13
		{
			Name: "Master",
			Path: "/master",
		},
		{
			Name: "Company",
			Path: "/master/companies",
		},
		{
			Name: "Setup Questions",
			Path: "/master/setup-questions",
		},
		{
			Name: "Storage Facilities",
			Path: "/master/storage-facilities",
		},
		// report 17
		{
			Name: "Report",
			Path: "/report",
		},
		{
			Name: "Answered",
			Path: "/report/answered",
		},
		// audit 19
		{
			Name: "Audit",
			Path: "/report/logs",
		},
	}

	if err := menuSeeder.DB.Model(models.Menu{}).Create(&data).Error; err != nil {
		return err
	}

	return nil
}

func (menuSeeder *MenuSeeder) GetName() string {
	return menuSeeder.Name
}
