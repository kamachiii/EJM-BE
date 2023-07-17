package models

type MJenisTransaksi struct {
	BaseModel
	TransactionType string `json:"transactionType" form:"transactionType" gorm:"uniqueIndex" validate:"required"`
	TransactionGroup string `json:"transactionGroup" form:"transactionGroup" validate:"required"`
}