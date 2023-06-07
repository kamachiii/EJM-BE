package models

type Role struct {
	BaseModel
	ActiveModel
	Name        string        `json:"name" gorm:"not null"`
	ObjectMenus JSONB         `json:"object_menus" gorm:"type:jsonb;null"`
	RolesMenus  []*RolesMenus `json:"roles_menus" gorm:"foreignKey:RoleId"`
}
