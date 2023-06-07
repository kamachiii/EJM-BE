package models

type ActionsMenus struct {
	BaseModel
	MenuId   uint   `json:"menuId" gorm:"not null"`
	ActionId uint   `json:"actionId" gorm:"not null"`
	Action   Action `json:"actions" gorm:"foreignKey:ActionId"`
}
