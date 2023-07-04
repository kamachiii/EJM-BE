package models

type User struct {
	BaseModel
	ActiveModel
	Phone             *string `json:"phone" gorm:"null"`
	Address           *string `json:"address"`
	FullName          string  `json:"full_name" form:"full_name" gorm:"not null"`
	Username          string  `json:"username" form:"username" gorm:"not null"`
	Email             string  `json:"email" form:"email" gorm:"not null"`
	Password          string  `json:"-" form:"-" gorm:"not null"`
	RoleID            int     `json:"roleId" form:"roleId" gorm:"not null"`
	Role              Role    `json:"role" gorm:"foreignKey:RoleID"`
	Pin               *string `json:"pin"`
	EnableLoginByLink *bool   `json:"enable_login_by_link" gorm:"default:false"`
}
