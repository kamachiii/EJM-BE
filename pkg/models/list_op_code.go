package models

type ListOpCode struct {
	BaseModel
	OPCode string `json:"opCode" form:"opCode" gorm:"uniqueIndex" validate:"required"`
	ModelMesin string `json:"modelMesin" form:"modelMesin" validate:"required"`
	TipeTransaksi string `json:"tipeTransaksi" form:"tipeTransaksi" gorm:"uniqueIndex" validate:"required"`
}
