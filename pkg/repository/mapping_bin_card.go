package repository

import (
	"EJM/dto"
	"EJM/pkg/models"

	// "EJM/utils"
	// "errors"
	"strings"

	"gorm.io/gorm"
)

type MappingBinCardRepository interface {
	TransactionRepository
	FindMappingBinCards(pagination *models.Paginate, search string, value string) ([]models.MappingBinCard, *models.Paginate, error)
	FindMappingBinCardById(id uint) (models.MappingBinCard, error)
	FindMappingBinCardByBin(bin string) error
	CreateMappingBinCard(mappingBinCard *dto.CreateNewMappingBinCard) (models.MappingBinCard, error)
	UpdateMappingBinCard(id uint, mappingBinCard *dto.UpdateMappingBinCard) error
	DeleteMappingBinCard(id uint) error
}

type MappingBinCard struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func NewMappingBinCardRepository(db *gorm.DB) *MappingBinCard {
	return &MappingBinCard{db: db, db2: db}
}

func (mappingBinCardObject *MappingBinCard) Begin(tx *gorm.DB) {
	mappingBinCardObject.db = tx.Begin()
}

func (mappingBinCardObject *MappingBinCard) Rollback() {
	mappingBinCardObject.db.Rollback()

	// after commit transaction, we have to rollback transaction
	mappingBinCardObject.db = mappingBinCardObject.db2
}

func (mappingBinCardObject *MappingBinCard) Commit() {
	mappingBinCardObject.db.Commit()

	// after commit transaction, we have to rollback transaction
	mappingBinCardObject.db = mappingBinCardObject.db2
}

func (mappingBinCardObject *MappingBinCard) MappingBinCardModel() (tx *gorm.DB) {
	return mappingBinCardObject.db.Model(&models.MappingBinCard{})
}

// find all mapping BinCards paginated
func (mappingBinCardObject *MappingBinCard) FindMappingBinCards(pagination *models.Paginate, search, value string) ([]models.MappingBinCard, *models.Paginate, error) {
	var mappingBinCards []models.MappingBinCard
	data := mappingBinCardObject.MappingBinCardModel().
		Count(&pagination.Total)

	if search != "" {
		data.Where("lower(mappingBinCards.BinCard) like ? ", "%"+strings.ToLower(search)+"%").Count(&pagination.Total)
	}

	if value != "" {
		data.Order("mappingBinCards.id = " + value + " desc")
	}

	// cari data
	data.Scopes(pagination.Pagination()).Debug().
		Find(&mappingBinCards)

	// checking errors
	if err := data.Error; err != nil {
		return []models.MappingBinCard{}, pagination, err
	}

	return mappingBinCards, pagination, nil
}

// find by id
func (mappingBinCardObject *MappingBinCard) FindMappingBinCardById(id uint) (models.MappingBinCard, error) {
	findId := models.MappingBinCard{
		BaseModel: models.BaseModel{
			ID: id,
		},
	}
	if err := mappingBinCardObject.MappingBinCardModel().First(&findId, "id = ?", id).Error; err != nil {
		return models.MappingBinCard{}, err
	}

	return findId, nil
}

// find by definition
func (mappingBinCardObject *MappingBinCard) FindMappingBinCardByBin(bin string) error {
	mappingBinCard := models.MappingBinCard{}

	if err := mappingBinCardObject.MappingBinCardModel().
		First(&mappingBinCard, "bin = ?", bin).Error; err != nil {
		return err
	}

	return nil
}

// create mapping BinCard
func (mappingBinCard *MappingBinCard) CreateMappingBinCard(mapping_bin_card *dto.CreateNewMappingBinCard) (models.MappingBinCard, error) {
	mappingBinCardModel := models.MappingBinCard{
		Bin:  mapping_bin_card.Bin,
		Bank: mapping_bin_card.Bank,
	}

	err := mappingBinCard.db.Debug().Create(&mappingBinCardModel).Error

	if err != nil {
		return mappingBinCardModel, err
	}

	return mappingBinCardModel, nil
}

// update mapping BinCard
func (mappingBinCardObject *MappingBinCard) UpdateMappingBinCard(id uint, mappingBinCard *dto.UpdateMappingBinCard) error {
	update := mappingBinCardObject.MappingBinCardModel().Where("mappingBinCards.id = ?", id).Updates(models.MappingBinCard{
		Bin:  mappingBinCard.Bin,
		Bank: mappingBinCard.Bank,
	})

	if err := update.Error; err != nil {
		return err
	}

	return nil
}

// delete mapping BinCard
func (mappingBinCardObject *MappingBinCard) DeleteMappingBinCard(id uint) error {
	deleteMappingBinCard := mappingBinCardObject.MappingBinCardModel().Where("mappingBinCards.id = ?", id).Delete(&models.MappingBinCard{})

	if err := deleteMappingBinCard.Error; err != nil {
		return err
	}

	return nil
}

// Find By Name
// func (mappingBinCardObject *MappingBinCard) FindByBinCard(BinCard string) (models.MappingBinCard, error) {
// 	findMappingBinCard := models.MappingBinCard{
// 		BinCard: BinCard,
// 	}
// 	if err := mappingBinCardObject.MappingBinCardModel().First(&findMappingBinCard, "mappingBinCard.BinCard LIKE ?", "%"+BinCard+"%").Error; err != nil {
// 		return models.MappingBinCard{}, err
// 	}

// 	return findMappingBinCard, nil
// }
