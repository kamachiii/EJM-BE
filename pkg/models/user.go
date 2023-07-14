package models

type User struct {
	BaseModel
	// ActiveModel
	Name     string `gorm:"not null"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null" json:"-"`
	RoleId   uint   `gorm:"not null;constraint:OnDelete:CASCADE"`
	IsActive   ActiveEnum `json:"isActive" form:"isActive" validate:"required" gorm:"type:isactive_enum"`
	Role     Role   `gorm:"foreignKey:RoleId" json:"-"` //One to Many
}

