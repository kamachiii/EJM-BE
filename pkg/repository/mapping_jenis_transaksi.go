package repository

// import (
// 	"EJM/dto"
// 	"EJM/pkg/models"

// 	"gorm.io/gorm"
// )

// type MJenisTransaksiRepository interface {
// 	FindJenisTransaksi(pagination *models.Paginate, value string) ([]models.MJenisTransaksi, *models.Paginate, error)
// 	FindJenisTransaksiById(id uint) (models.MJenisTransaksi, error)
// 	CreateJenisTransaksi(mJenisTransaksi *dto.CreateNewJenisTransaksi) (models.MJenisTransaksi, error)
// 	UpdateJenisTransaksi(id uint, mJenisTransaksi *dto.UpdateJenisTransaksi) error
// 	DeleteJenisTransaksi(id uint) error
// }

// type MJenisTransaksi struct {
// 	db *gorm.DB
// }

// func NewMJenisTransaksiRepository(db)