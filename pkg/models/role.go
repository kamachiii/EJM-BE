package models

type Role struct {
	BaseModel
	Name        string        `gorm:"unique"`                                          //Main field
	Description string        `gorm:"not null" validate:"required" json:"description"` //Main field
	Active   ActiveEnum `json:"isActive" form:"isActive" validate:"required" gorm:"type:isactive_enum"`
	RolesMenus  []*RolesMenus `json:"roles_menus" gorm:"foreignKey:RoleId"`
}
