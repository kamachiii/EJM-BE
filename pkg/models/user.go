package models

type User struct {
	BaseModel
	ActiveModel
	Name     string `gorm:"not null"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null" json:"-"`
	RoleId   uint   `gorm:"not null;constraint:OnDelete:CASCADE"`
	Role     Role   `gorm:"foreignKey:RoleId" json:"-"` //One to Many
}
