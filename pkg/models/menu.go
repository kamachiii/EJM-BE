package models

type Menu struct {
	BaseModel
	Name         string         `gorm:"not null"`
	ParentId     *uint          `gorm:"not null;index"`
	Path         string         `json:"path"`
	ActionsMenus []ActionsMenus `json:"actions_menus" gorm:"foreignKey:MenuId"`
}
