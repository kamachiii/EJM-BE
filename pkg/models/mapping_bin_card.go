package models

type MappingBinCard struct {
	BaseModel
	Bank       string `json:"bank" form:"bank" validate:"required"`
	Bin   string `json:"bin" form:"bin" validate:"required" gorm:"uniqueIndex"`
}
