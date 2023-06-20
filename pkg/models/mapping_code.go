package models

type Mappingcode struct {
	BaseModel
	ActiveModel
	Code       string `json:"code" gorm:"not null" validate:"required"`
	Definition string `json:"definition" gorm:"uniqueIndex" validate:"required"`
	Status     string `json:"status" gorm:"not null" validate:"required"`
	Priority   int    `json:"priority" gorm:"not null" validate:"required"`
}
