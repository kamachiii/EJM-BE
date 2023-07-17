package models

type Role struct {
	BaseModel
	Name        string        `gorm:"unique"`                                          //Main field
	Description string        `gorm:"not null" validate:"required" json:"description"` //Main field
	RolesMenus  []*RolesMenus `json:"roles_menus" gorm:"foreignKey:RoleId"`
}
