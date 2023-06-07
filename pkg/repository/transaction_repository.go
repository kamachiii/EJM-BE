package repository

import "gorm.io/gorm"

type TransactionRepository interface {
	Begin(tx *gorm.DB)
	Commit()
	Rollback()
}