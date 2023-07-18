package services

import (
	// "EJM/config"
	"EJM/dto"
	"errors"

	// "EJM/internal/logs"
	"EJM/pkg/models"
	"EJM/pkg/repository"

	"EJM/utils"
	// "errors"
	"gorm.io/gorm"
)

type MappingBinCardService struct {
	*gorm.DB
	MappingBinCardRepository repository.MappingBinCardRepository
}

func NewMappingBinCardService(service *MappingBinCardService) *MappingBinCardService {
	return service
}




// type IMappingBinCardService interface {
// 	FindMappingBinCards(mappingBinCards *dto.GetMappingBinCards) ([]models.MappingBinCard, *models.Paginate, error)
// 	FindMappingBinCardById(id uint) (models.MappingBinCard, error)
//  FindMappingBinCardByBin(bin string) error
// 	CreateMappingBinCard(mappingBinCard *dto.CreateNewMappingBinCard) (models.MappingBinCard, error)
// 	UpdateMappingBinCard(id uint, mappingBinCard *dto.UpdateMappingBinCard) error
// 	DeleteMappingBinCard(id uint) error
// }




//

// new mapping BinCard
func (mappingBinCard *MappingBinCardService) CreateMappingBinCard(mappingBinCardDto *dto.CreateNewMappingBinCard) (models.MappingBinCard, error) {
	mappingBinCards := mappingBinCard.MappingBinCardRepository

	// Cek apakah definition sudah ada di database
	BinIsExist := mappingBinCards.FindMappingBinCardByBin(mappingBinCardDto.Bin)

	if BinIsExist != nil {
		return models.MappingBinCard{}, BinIsExist
	}

	data, err := mappingBinCards.CreateMappingBinCard(mappingBinCardDto)
	if err != nil {
		return models.MappingBinCard{}, err
	}

	return data, nil
}


// find all usres [tested]
func (mappingBinCard *MappingBinCardService) FindMappingBinCards(mappingBinCards *dto.GetMappingBinCards) ([]models.MappingBinCard, *models.Paginate, error) {
	pagination := models.Paginate{
		Page:     mappingBinCards.Page,
		PageSize: mappingBinCards.PageSize,
	}

	var mappingBinCardRepo repository.MappingBinCardRepository = mappingBinCard.MappingBinCardRepository

	data, meta, err := mappingBinCardRepo.FindMappingBinCards(&pagination,mappingBinCards.Bin, mappingBinCards.Value)
	if err != nil {
		return []models.MappingBinCard{}, meta, err
	}

	return data, meta, nil
}

// update BinCard [tested]
func ( mappingBinCard *MappingBinCardService) UpdateMappingBinCard(id uint, mapping_BinCard *dto.UpdateMappingBinCard) error {
	var mappingBinCardRepo repository.MappingBinCardRepository
	mappingBinCardRepo = mappingBinCard.MappingBinCardRepository

	_, err := mappingBinCardRepo.FindMappingBinCardById(mapping_BinCard.ID)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return utils.ErrRoleNotExists
		} else {
			return err
		}
	}

	_, errFindMappingBinCard := mappingBinCardRepo.FindMappingBinCardById(id)
	if errFindMappingBinCard != nil { // kalo user gak ada
		return utils.ErrUserNotFound
	}

	return mappingBinCardRepo.UpdateMappingBinCard(id, mapping_BinCard)
}


// delete mappingBinCard [tested]
func (mappingBinCard *MappingBinCardService) DeleteMappingBinCard(id uint) error {
	var mappingBinCardRepo repository.MappingBinCardRepository = mappingBinCard.MappingBinCardRepository

	// cari id dulu
	_, err := mappingBinCardRepo.FindMappingBinCardById(id)
	if err != nil {
		return utils.ErrMappingBinCardNotFound
	}

	// delete
	return mappingBinCardRepo.DeleteMappingBinCard(id)
}

// Find mapping BinCard By Id
func (mappingBinCard *MappingBinCardService) FindMappingBinCardById(id uint) (models.MappingBinCard, error) {
	var mappingBinCardRepo repository.MappingBinCardRepository = mappingBinCard.MappingBinCardRepository

	data, err := mappingBinCardRepo.FindMappingBinCardById(id)

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// ID not found in the database
			return models.MappingBinCard{}, utils.ErrMappingBinCardNotFound
		}
		return models.MappingBinCard{}, err
	}

	return data, nil
}

