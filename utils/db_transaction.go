package utils

import (
	"gorm.io/gorm"
)

type TRX interface {
	Begin(tx *gorm.DB)
	Commit()
	Rollback()
}

type DBTransaction struct {
	db    *gorm.DB
	repos []TRX
}

func NewDBTransaction(db *gorm.DB, repos ...TRX) *DBTransaction {
	return &DBTransaction{
		db:    db,
		repos: repos,
	}
}

func (trx *DBTransaction) Begin() {
	for _, repo := range trx.repos {
		repo.Begin(trx.db)
	}
}

func (trx *DBTransaction) Rollback() {
	if r := recover(); r != nil {
		for _, repo := range trx.repos {
			repo.Rollback()
		}
	}
}

func (trx *DBTransaction) Commit() {
	for _, repo := range trx.repos {
		repo.Commit()
	}
}
