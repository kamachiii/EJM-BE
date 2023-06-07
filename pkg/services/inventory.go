package services

import (
	"TKD/dto"
	"TKD/pkg/models"
	"TKD/pkg/repository"
	"TKD/utils"
	"encoding/json"
	"errors"

	"gorm.io/gorm"
)

type IInventoryService interface {
	FindAll(tasks *dto.GetInventory) ([]models.Inventory, *models.Paginate, error)
	// FindAllDocument(request *dto.GetInventoryDocument) ([]models.InventoryDocument, *models.Paginate, error)
	Create(body *dto.CreateInventory) (models.Inventory, error)
	// CreateInventoryDocument(body *dto.CreateInventoryDocument) (models.InventoryDocument, error)
	Update(updateInventory *dto.UpdateInventory) (models.Inventory, error)
	Delete(id, userId uint) error
	FindById(id uint) (models.Inventory, error)
	FindFormSelectInventory(filter *dto.GetFieldSelectInventory) (interface{}, *models.Paginate, error)
	FindOneDataSelectInventory(filter *dto.GetSingleFieldSelectInventory) (interface{}, error)
	CreateDataSelectInventory(data *dto.CreateFieldSelectInventory) error
	UpdateDataSelectInventory(data *dto.UpdateFieldSelectInventory) error
}

type InventoryService struct {
	*gorm.DB
	InventoryRepository repository.Inventory
}

func NewInventoryService(data *InventoryService) *InventoryService {
	return data
}

// func (inventory *InventoryService) FindAll(request *dto.GetInventory) ([]models.Inventory, *models.Paginate, error) {
// 	pagination := models.Paginate{
// 		Page:     request.Page,
// 		PageSize: request.PageSize,
// 	}
// 	var inventories repository.InventoryRepository
// 	inventories = &inventory.InventoryRepository

// 	data, meta, err := inventories.FindAll(&pagination, *request)
// 	if err != nil {
// 		return []models.Inventory{}, meta, err
// 	}

// 	return data, meta, nil
// }

// func (inventory *InventoryService) FindAllDocument(request *dto.GetInventoryDocument) ([]models.InventoryDocument, *models.Paginate, error) {
// 	pagination := models.Paginate{
// 		Page:     request.Page,
// 		PageSize: request.PageSize,
// 	}
// 	var inventories repository.InventoryRepository
// 	inventories = &inventory.InventoryRepository

// 	data, meta, err := inventories.FindAllDocument(&pagination, *request)
// 	if err != nil {
// 		return []models.InventoryDocument{}, meta, err
// 	}

// 	return data, meta, nil
// }

func (inventory *InventoryService) Create(body *dto.CreateInventory) (models.Inventory, error) {
	var (
		inventoryRepo = inventory.InventoryRepository
		transaction   = utils.NewDBTransaction(inventory.DB, &inventoryRepo)
	)
	transaction.Begin()

	defer transaction.Rollback()

	inventoryResult, errCreate := inventoryRepo.Create(body)
	if errCreate != nil {
		return models.Inventory{}, errCreate
	}

	transaction.Commit()

	return inventoryResult, nil
}

// func (inventory *InventoryService) CreateInventoryDocument(body *dto.CreateInventoryDocument) (models.InventoryDocument, error) {
// 	var (
// 		inventoryRepo = inventory.InventoryRepository
// 		transaction   = utils.NewDBTransaction(inventory.DB, &inventoryRepo)
// 	)
// 	transaction.Begin()

// 	defer transaction.Rollback()

// 	inventoryDocResult, errCreate := inventoryRepo.CreateInventoryDocument(body)
// 	if errCreate != nil {
// 		return models.InventoryDocument{}, errCreate
// 	}

// 	transaction.Commit()

// 	return inventoryDocResult, nil
// }

// func (inventory *InventoryService) Update(updateInventory *dto.UpdateInventory) (models.Inventory, error) {
// 	var (
// 		inventoryRepo = inventory.InventoryRepository
// 		transaction   = utils.NewDBTransaction(inventory.DB, &inventoryRepo)
// 	)

// 	_, errFindInventory := inventoryRepo.FindById(updateInventory.InventoryId)
// 	if errFindInventory != nil {
// 		return models.Inventory{}, errFindInventory
// 	}

// 	transaction.Begin()

// 	inventoryUpdated, err := inventoryRepo.Update(updateInventory)
// 	if err != nil {
// 		transaction.Rollback()
// 		return models.Inventory{}, err
// 	}

// 	transaction.Commit()

// 	return inventoryUpdated, nil
// }

func (inventory *InventoryService) Delete(id, userId uint) error {
	var (
		inventoryRepo = inventory.InventoryRepository
		transaction   = utils.NewDBTransaction(inventory.DB, &inventoryRepo)
	)

	transaction.Begin()

	errDel := inventoryRepo.Delete(id, userId)
	if errDel != nil {
		transaction.Rollback()
		return errDel
	}
	transaction.Commit()

	return nil
}

type Query[T any] struct {
	Filter *dto.GetFieldSelectInventory
}

func modelType[T any](filter *dto.GetFieldSelectInventory) *Query[T] {
	return &Query[T]{
		Filter: filter,
	}
}

func (q Query[T]) filter(fn func(pagination *models.Paginate, useActive bool, search, value string) ([]T, *models.Paginate, error)) ([]T, *models.Paginate, error) {
	return fn(&models.Paginate{
		Page:     q.Filter.Page,
		PageSize: q.Filter.PageSize,
	}, q.Filter.UsingActive, q.Filter.Search, q.Filter.Value)
}

func (inventory *InventoryService) FindFormSelectInventory(filter *dto.GetFieldSelectInventory) (interface{}, *models.Paginate, error) {
	// var inventoryRepo = inventory.InventoryRepository
	switch filter.Field {
	// case "document_type":
	// 	return modelType[models.DocumentType](filter).filter(inventoryRepo.FindDocumentType)
	// case "document_shape":
	// 	return modelType[models.DocumentShape](filter).filter(inventoryRepo.FindDocumentShape)
	// case "dimension_size_archive":
	// 	return modelType[models.DimensionSizeArchiev](filter).filter(inventoryRepo.FindDimensionSizeArchive)
	// case "frequency_change_addition":
	// 	return modelType[models.FrequencyOfChangeAddition](filter).filter(inventoryRepo.FindFrequencyChangeAddition)
	// case "authenticity_levels":
	// 	return modelType[models.AuthenticityLevel](filter).filter(inventoryRepo.FindAuthenticityLevel)
	// case "storage_facilities":
	// 	return modelType[models.StorageFacilities](filter).filter(inventoryRepo.FindStorageFacilities)
	// case "storage_media":
	// 	return modelType[models.StorageMedia](filter).filter(inventoryRepo.FindStorageMedia)
	default:
		return []interface{}{}, &models.Paginate{}, errors.New("Invalid Field")
	}

}

// func (inventory *InventoryService) CreateDataSelectInventory(data *dto.CreateFieldSelectInventory) error {
// 	// var inventoryRepo = inventory.InventoryRepository
// 	switch data.Type {
// 	case "document_type":
// 		// return inventoryRepo.CreateDocumentType(models.DocumentType{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "document_shape":
// 		// return inventoryRepo.CreateDocumentShape(models.DocumentShape{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "dimension_size_archive":
// 		// return inventoryRepo.CreateDimensionSizeArchive(models.DimensionSizeArchiev{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "frequency_change_addition":
// 		// return inventoryRepo.CreateFrequencyChangeAddition(models.FrequencyOfChangeAddition{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "authenticity_levels":
// 		// return inventoryRepo.CreateAuthenticityLevel(models.AuthenticityLevel{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "storage_facilities":
// 		// return inventoryRepo.CreateStorageFacilities(models.StorageFacilities{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })
// 	case "storage_media":
// 		// return inventoryRepo.CreateStorageMedia(models.StorageMedia{
// 		// 	ActiveModel: models.ActiveModel{
// 		// 		IsActive: data.IsActive,
// 		// 	},
// 		// 	Name: data.Name,
// 		// })

// 	default:
// 		return errors.New("Invalid Field")
// 	}

// }

func (inventory *InventoryService) UpdateDataSelectInventory(data *dto.UpdateFieldSelectInventory) error {
	var inventoryRepo = inventory.InventoryRepository
	var mapData map[string]interface{}
	modelSelects := map[string]*gorm.DB{
		// "document_type":             inventory.DB.Model(&models.DocumentType{}),
		// "document_shape":            inventory.DB.Model(&models.DocumentShape{}),
		// "dimension_size_archive":    inventory.DB.Model(&models.DimensionSizeArchiev{}),
		// "frequency_change_addition": inventory.DB.Model(&models.FrequencyOfChangeAddition{}),
		// "authenticity_levels":       inventory.DB.Model(&models.AuthenticityLevel{}),
		// "storage_facilities":        inventory.DB.Model(&models.StorageFacilities{}),
		// "storage_media":             inventory.DB.Model(&models.StorageMedia{}),
	}

	inrec, errMarshall := json.Marshal(data)
	if errMarshall != nil {
		return errMarshall
	}

	errUnmarshall := json.Unmarshal(inrec, &mapData)
	if errUnmarshall != nil {
		return errUnmarshall
	}
	inventoryRepo.Begin(inventory.DB)

	defer inventoryRepo.Rollback()

	err := inventoryRepo.UpdateSelectData(modelSelects[data.Type], mapData)
	if err != nil {
		return err
	}

	inventoryRepo.Commit()
	return nil
}

func (inventory *InventoryService) FindOneDataSelectInventory(filter *dto.GetSingleFieldSelectInventory) (interface{}, error) {
	// var inventoryRepo = inventory.InventoryRepository
	switch filter.Field {
	// case "document_type":
	// 	return inventoryRepo.FindOneDocumentType(filter.Id)
	// case "document_shape":
	// 	return inventoryRepo.FindOneDocumentShape(filter.Id)
	// case "dimension_size_archive":
	// 	return inventoryRepo.FindOneDimensionSizeArchive(filter.Id)
	// case "frequency_change_addition":
	// 	return inventoryRepo.FindOneFrequencyChangeAddition(filter.Id)
	// case "authenticity_levels":
	// 	return inventoryRepo.FindOneAuthenticityLevel(filter.Id)
	// case "storage_facilities":
	// 	return inventoryRepo.FindOneStorageFacilities(filter.Id)
	// case "storage_media":
	// 	return inventoryRepo.FindOneStorageMedia(filter.Id)

	default:
		return nil, errors.New("Invalid Field")
	}

}

func (inventory *InventoryService) FindById(id uint) (models.Inventory, error) {
	var inventoryRepo repository.InventoryRepository
	// inventoryRepo = &inventory.InventoryRepository

	ivtr, err := inventoryRepo.FindById(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// return models.Inventory{}, utils.ErrProjectNotFound
		} else {
			return models.Inventory{}, err
		}
	}

	return ivtr, nil
}
