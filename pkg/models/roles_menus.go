package models

type RolesMenus struct {
	BaseModel
	MenuId uint `json:"menu_id" gorm:"not null"`
	RoleId uint `json:"roleId" gorm:"not null"`
	Role   Role `json:"role" gorm:"foreignKey:RoleId"`
	Menu   Menu `json:"menu" gorm:"foreignKey:MenuId"`
}
