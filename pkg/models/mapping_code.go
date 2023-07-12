package models

type MappingCode struct {
	BaseModel
	ActiveModel
	StatusModel
	Code       string `json:"code" form:"code" validate:"required"`
	Definition string `json:"definition" form:"definition" gorm:"uniqueIndex" validate:"required"`
	Status     bool `json:"status" form:"status" validate:"required"`
	Priority   int `json:"priority" form:"priority" validate:"required"`
	IsActive   bool `json:"is_active" form:"is_active" validate:"required"`
}
