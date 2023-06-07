package repository

import (
	"TKD/dto"
	"TKD/pkg/models"
	"TKD/utils"
	"errors"
	"fmt"
	"strings"

	"gorm.io/gorm"
)

type InventoryRepository interface {
	TransactionRepository
	FindAll(pagination *models.Paginate, filter dto.GetInventory) ([]models.Inventory, *models.Paginate, error)
	FindAllDocument(pagination *models.Paginate, filter dto.GetInventoryDocument) ([]models.InventoryDocument, *models.Paginate, error)
	Create(body *dto.CreateInventory) (models.Inventory, error)
	CreateInventoryDocument(body *dto.CreateInventoryDocument) (models.InventoryDocument, error)
	Update(updateInventory *dto.UpdateInventory) (models.Inventory, error)
	FindById(id uint) (models.Inventory, error)
	Delete(id, userId uint) error
	FindDocumentType(pagination *models.Paginate, useActive bool, search, value string) ([]models.DocumentType, *models.Paginate, error)
	FindDocumentShape(pagination *models.Paginate, useActive bool, search, value string) ([]models.DocumentShape, *models.Paginate, error)
	FindDimensionSizeArchive(pagination *models.Paginate, useActive bool, search, value string) ([]models.DimensionSizeArchiev, *models.Paginate, error)
	FindFrequencyChangeAddition(pagination *models.Paginate, useActive bool, search, value string) ([]models.FrequencyOfChangeAddition, *models.Paginate, error)
	FindAuthenticityLevel(pagination *models.Paginate, useActive bool, search, value string) ([]models.AuthenticityLevel, *models.Paginate, error)
	FindStorageFacilities(pagination *models.Paginate, useActive bool, search, value string) ([]models.StorageFacilities, *models.Paginate, error)
	FindStorageMedia(pagination *models.Paginate, useActive bool, search, value string) ([]models.StorageMedia, *models.Paginate, error)
	FindOneDocumentType(id uint) (models.DocumentType, error)
	FindOneDocumentShape(id uint) (models.DocumentShape, error)
	FindOneDimensionSizeArchive(id uint) (models.DimensionSizeArchiev, error)
	FindOneFrequencyChangeAddition(id uint) (models.FrequencyOfChangeAddition, error)
	FindOneAuthenticityLevel(id uint) (models.AuthenticityLevel, error)
	FindOneStorageFacilities(id uint) (models.StorageFacilities, error)
	FindOneStorageMedia(id uint) (models.StorageMedia, error)
	CreateDocumentType(documentType models.DocumentType) error
	CreateDocumentShape(shape models.DocumentShape) error
	CreateDimensionSizeArchive(archiev models.DimensionSizeArchiev) error
	CreateFrequencyChangeAddition(addition models.FrequencyOfChangeAddition) error
	CreateAuthenticityLevel(level models.AuthenticityLevel) error
	CreateStorageFacilities(facilities models.StorageFacilities) error
	CreateStorageMedia(media models.StorageMedia) error
	UpdateSelectData(model *gorm.DB, update map[string]interface{}) error
}

type Inventory struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func NewInventoryRepository(dbObj *gorm.DB) *Inventory {
	return &Inventory{
		db:  dbObj,
		db2: dbObj,
	}
}

func (inventory *Inventory) Begin(tx *gorm.DB) {
	inventory.db = tx.Begin()
}

func (inventory *Inventory) Rollback() {
	inventory.db.Rollback()

	//// after commit transaction, we have to rollback transaction
	//inventory.db = inventory.db2
}

func (inventory *Inventory) Commit() {
	inventory.db.Commit()

	//// after commit transaction, we have to rollback transaction
	//inventory.db = inventory.db2
}

func (inventory *Inventory) inventoryModel() *gorm.DB {
	return inventory.db.Model(models.Inventory{})
}

func (inventory *Inventory) inventoryDocumentModel() *gorm.DB {
	return inventory.db.Model(models.InventoryDocument{})
}

func (inventory *Inventory) documentTypeModel() *gorm.DB {
	return inventory.db.Model(&models.DocumentType{})
}

func (inventory *Inventory) frequencyChangeAdditionModel() *gorm.DB {
	return inventory.db.Model(&models.FrequencyOfChangeAddition{})
}

func (inventory *Inventory) authenticityLevelModel() *gorm.DB {
	return inventory.db.Model(&models.AuthenticityLevel{})
}
func (inventory *Inventory) storageFacilitiesModel() *gorm.DB {
	return inventory.db.Model(&models.StorageFacilities{})
}

func (inventory *Inventory) storageMediaModel() *gorm.DB {
	return inventory.db.Model(&models.StorageMedia{})
}

func (inventory *Inventory) dimensionSizeArchiveModel() *gorm.DB {
	return inventory.db.Model(&models.DimensionSizeArchiev{})
}

func (inventory *Inventory) documentShapeModel() *gorm.DB {
	return inventory.db.Model(&models.DocumentShape{})
}

func (inventory *Inventory) projectModel() *gorm.DB {
	return inventory.db.Model(&models.Project{})
}

func (inventory *Inventory) projectLogModel() *gorm.DB {
	return inventory.db.Model(&models.ProjectLog{})
}

func (inventory *Inventory) CreateDocumentType(documentType models.DocumentType) error {
	return inventory.documentTypeModel().Create(&models.DocumentType{
		ActiveModel: models.ActiveModel{
			IsActive: documentType.IsActive,
		},
		Name: documentType.Name,
	}).Error
}

func (inventory *Inventory) CreateDocumentShape(shape models.DocumentShape) error {
	return inventory.documentShapeModel().Create(&models.DocumentShape{
		ActiveModel: models.ActiveModel{
			IsActive: shape.IsActive,
		},
		Name: shape.Name,
	}).Error
}

func (inventory *Inventory) CreateDimensionSizeArchive(archiev models.DimensionSizeArchiev) error {
	return inventory.dimensionSizeArchiveModel().Create(&models.DimensionSizeArchiev{
		ActiveModel: models.ActiveModel{
			IsActive: archiev.IsActive,
		},
		Name: archiev.Name,
	}).Error
}

func (inventory *Inventory) CreateFrequencyChangeAddition(addition models.FrequencyOfChangeAddition) error {
	return inventory.frequencyChangeAdditionModel().Create(&models.FrequencyOfChangeAddition{
		ActiveModel: models.ActiveModel{
			IsActive: addition.IsActive,
		},
		Name: addition.Name,
	}).Error
}

func (inventory *Inventory) CreateAuthenticityLevel(level models.AuthenticityLevel) error {
	return inventory.authenticityLevelModel().Create(&models.AuthenticityLevel{
		ActiveModel: models.ActiveModel{
			IsActive: level.IsActive,
		},
		Name: level.Name,
	}).Error
}

func (inventory *Inventory) CreateStorageFacilities(facilities models.StorageFacilities) error {
	return inventory.storageFacilitiesModel().Create(&models.StorageFacilities{
		ActiveModel: models.ActiveModel{
			IsActive: facilities.IsActive,
		},
		Name: facilities.Name,
	}).Error
}

func (inventory *Inventory) CreateStorageMedia(media models.StorageMedia) error {
	return inventory.storageMediaModel().Create(&models.StorageMedia{
		ActiveModel: models.ActiveModel{
			IsActive: media.IsActive,
		},
		Name: media.Name,
	}).Error
}

func (inventory *Inventory) FindAll(pagination *models.Paginate, filter dto.GetInventory) ([]models.Inventory, *models.Paginate, error) {
	var inventoryModel []models.Inventory
	data := inventory.inventoryModel().Count(&pagination.Total)

	if filter.Search != "" {
		data.Where("lower(archive_title) like ?", strings.ToLower(filter.Search))
	}

	if filter.FilledBy != "" {
		data.Where("lower(filled_by) like ?", strings.ToLower(filter.FilledBy))
	}

	if filter.StatusId != "" {
		data.Where("lower(status) like ?", strings.ToLower(filter.StatusId))
	}

	data.Scopes(pagination.Pagination()).Preload("FrequencyOfChangeAddition").Preload("StorageFacilities").Preload("StorageMedia").Preload("InventoryDocuments").Debug().Order("id desc").Find(&inventoryModel)
	if err := data.Error; err != nil {
		return []models.Inventory{}, pagination, err
	}

	return inventoryModel, pagination, nil
}

func (inventory *Inventory) FindAllDocument(pagination *models.Paginate, filter dto.GetInventoryDocument) ([]models.InventoryDocument, *models.Paginate, error) {
	var inventoryDocumentModel []models.InventoryDocument
	data := inventory.inventoryDocumentModel().Count(&pagination.Total)

	if filter.Search != "" {
		data.Where("lower(archive_title) like ?", strings.ToLower(filter.Search)).Count(&pagination.Total)
	}

	if filter.FilledBy != "" {
		data.Where("lower(filled_by) like ?", strings.ToLower(filter.FilledBy)).Count(&pagination.Total)
	}

	if filter.StatusId != "" {
		data.Where("lower(status) like ?", strings.ToLower(filter.StatusId)).Count(&pagination.Total)
	}

	if filter.InventoryId != "" {
		data.Where("inventory_id = ?", strings.ToLower(filter.InventoryId)).Count(&pagination.Total)
	}

	data.Scopes(pagination.Pagination()).Preload("AuthenticityLevel").Preload("DimensionSizeArchiev").Preload("DocumentShape").Preload("DocumentType").Debug().Order("id desc").Find(&inventoryDocumentModel)
	if err := data.Error; err != nil {
		return []models.InventoryDocument{}, pagination, err
	}

	return inventoryDocumentModel, pagination, nil
}

type findDataProps struct {
	pagination  *models.Paginate
	model       *gorm.DB
	usingActive bool
	tableName   string
	searchBy    string
	search      string
	value       string
}

func findData[T any](props findDataProps) ([]T, *models.Paginate, error) {
	var results []T
	data := props.model.Count(&props.pagination.Total)

	if props.search != "" {
		data.Where(fmt.Sprintf("lower(%s.%s) like ?", props.tableName, props.searchBy), "%"+strings.ToLower(props.search)+"%").Count(&props.pagination.Total)
	}

	if props.usingActive {
		data.Where(fmt.Sprintf("%s.is_active", props.tableName), true).Count(&props.pagination.Total)
	}

	if props.value != "" {
		data.Order(fmt.Sprintf("%s.id = ", props.tableName) + props.value + " desc")
	}

	// cari data
	data.Scopes(props.pagination.Pagination()).Find(&results)

	// checking errors
	if err := data.Error; err != nil {
		return []T{}, props.pagination, err
	}

	return results, props.pagination, nil
}

func findOne[T any](model *gorm.DB, id uint) (T, error) {
	var result T
	if err := model.Where("id = ?", id).First(&result).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return result, utils.ErrInventoryNotFound
		} else {
			return result, err
		}
	}

	return result, nil
}

func (inventory *Inventory) FindOneDocumentType(id uint) (models.DocumentType, error) {
	return findOne[models.DocumentType](inventory.documentTypeModel(), id)
}
func (inventory *Inventory) FindOneDocumentShape(id uint) (models.DocumentShape, error) {
	return findOne[models.DocumentShape](inventory.documentShapeModel(), id)
}
func (inventory *Inventory) FindOneDimensionSizeArchive(id uint) (models.DimensionSizeArchiev, error) {
	return findOne[models.DimensionSizeArchiev](inventory.dimensionSizeArchiveModel(), id)
}
func (inventory *Inventory) FindOneFrequencyChangeAddition(id uint) (models.FrequencyOfChangeAddition, error) {
	return findOne[models.FrequencyOfChangeAddition](inventory.frequencyChangeAdditionModel(), id)
}
func (inventory *Inventory) FindOneAuthenticityLevel(id uint) (models.AuthenticityLevel, error) {
	return findOne[models.AuthenticityLevel](inventory.authenticityLevelModel(), id)
}
func (inventory *Inventory) FindOneStorageFacilities(id uint) (models.StorageFacilities, error) {
	return findOne[models.StorageFacilities](inventory.storageFacilitiesModel(), id)
}
func (inventory *Inventory) FindOneStorageMedia(id uint) (models.StorageMedia, error) {
	return findOne[models.StorageMedia](inventory.storageMediaModel(), id)
}

func (inventory *Inventory) FindDocumentType(pagination *models.Paginate, useActive bool, search, value string) ([]models.DocumentType, *models.Paginate, error) {
	return findData[models.DocumentType](findDataProps{
		pagination:  pagination,
		model:       inventory.documentTypeModel(),
		tableName:   "document_types",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) FindDocumentShape(pagination *models.Paginate, useActive bool, search, value string) ([]models.DocumentShape, *models.Paginate, error) {
	return findData[models.DocumentShape](findDataProps{
		pagination:  pagination,
		model:       inventory.documentShapeModel(),
		tableName:   "document_shapes",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) FindDimensionSizeArchive(pagination *models.Paginate, useActive bool, search, value string) ([]models.DimensionSizeArchiev, *models.Paginate, error) {
	return findData[models.DimensionSizeArchiev](findDataProps{
		pagination:  pagination,
		model:       inventory.dimensionSizeArchiveModel(),
		tableName:   "dimension_size_archievs",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) FindFrequencyChangeAddition(pagination *models.Paginate, useActive bool, search, value string) ([]models.FrequencyOfChangeAddition, *models.Paginate, error) {
	return findData[models.FrequencyOfChangeAddition](findDataProps{
		pagination:  pagination,
		model:       inventory.frequencyChangeAdditionModel(),
		tableName:   "frequency_of_change_additions",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) FindAuthenticityLevel(pagination *models.Paginate, useActive bool, search, value string) ([]models.AuthenticityLevel, *models.Paginate, error) {
	return findData[models.AuthenticityLevel](findDataProps{
		pagination:  pagination,
		model:       inventory.authenticityLevelModel(),
		tableName:   "authenticity_levels",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) FindStorageFacilities(pagination *models.Paginate, useActive bool, search, value string) ([]models.StorageFacilities, *models.Paginate, error) {
	return findData[models.StorageFacilities](findDataProps{
		pagination:  pagination,
		model:       inventory.storageFacilitiesModel(),
		tableName:   "storage_facilities",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}
func (inventory *Inventory) FindStorageMedia(pagination *models.Paginate, useActive bool, search, value string) ([]models.StorageMedia, *models.Paginate, error) {
	return findData[models.StorageMedia](findDataProps{
		pagination:  pagination,
		model:       inventory.storageMediaModel(),
		tableName:   "storage_media",
		searchBy:    "name",
		usingActive: useActive,
		search:      search,
		value:       value,
	})
}

func (inventory *Inventory) CreateProjectLog(data dto.CreateProjectLog) error {
	modelProjectLog := models.ProjectLog{
		UserId:      uint(data.UserId),
		ProjectId:   uint(data.ProjectId),
		Action:      data.Action,
		Description: data.Description,
	}
	if err := inventory.projectLogModel().Create(&modelProjectLog).Error; err != nil {
		return err
	}
	fmt.Println("CreateProjectLog")
	return nil
}

func (inventory *Inventory) Create(body *dto.CreateInventory) (models.Inventory, error) {
	var modelInventor = models.Inventory{
		ProjectId:                   body.ProjectId,
		StructureId:                 body.StructureId,
		ArchiveTitle:                body.ArchiveTitle,
		FileNumber:                  body.FileNumber,
		FrequencyOfChangeAdditionId: body.FrequencyOfChangeAdditionId,
		ArchiveYearOf:               body.ArchiveYearOf,
		ArchiveYearTo:               body.ArchiveYearTo,
		StorageMediaId:              body.StorageMediaId,
		StorageFacilitiesId:         body.StorageFacilitiesId,
	}

	err := inventory.inventoryModel().Create(&modelInventor).Preload("FrequencyOfChangeAddition").Preload("StorageFacilities").Preload("StorageMedia").Order("inventory_id desc").Error
	if err != nil {
		return modelInventor, err
	}

	if len(body.InventoryDocuments) > 0 {
		for _, cid := range body.InventoryDocuments {
			var modelInventorDoc = models.InventoryDocument{
				InventoryId:                  modelInventor.ID,
				FilledBy:                     body.UserId,
				Status:                       cid.Status,
				Content:                      cid.Content,
				DocumentTypeInOrderOfProcess: cid.DocumentTypeInOrderOfProcess,
				DocumentTypeId:               cid.DocumentTypeId,
				DocumentShapeId:              cid.DocumentShapeId,
				DimensionSizeArchievId:       cid.DimensionSizeArchievId,
				AuthenticityLevelId:          cid.AuthenticityLevelId,
			}
			inventory.inventoryDocumentModel().Create(&modelInventorDoc)
		}
	}

	if err := inventory.CreateProjectLog(dto.CreateProjectLog{
		UserId:      body.UserId,
		ProjectId:   body.ProjectId,
		Action:      "Inventory",
		Description: "Create New Inventory",
	}).Error(); err != "" {
		return modelInventor, utils.ErrCreateProjectLog
	}

	return modelInventor, nil
}

func (inventory *Inventory) CreateInventoryDocument(body *dto.CreateInventoryDocument) (models.InventoryDocument, error) {
	var modelInventoryDocument = models.InventoryDocument{
		InventoryId:                  body.InventoryId,
		FilledBy:                     body.FilledBy,
		Status:                       body.Status,
		Content:                      body.Content,
		DocumentTypeInOrderOfProcess: body.DocumentTypeInOrderOfProcess,
		DocumentTypeId:               body.DocumentTypeId,
		DocumentShapeId:              body.DocumentShapeId,
		DimensionSizeArchievId:       body.DimensionSizeArchievId,
		AuthenticityLevelId:          body.AuthenticityLevelId,
	}

	var modelInventory = models.Inventory{}

	if err := inventory.inventoryModel().Where("inventories.id = ?", body.InventoryId).First(&modelInventory).Error; err != nil {
		return models.InventoryDocument{}, err
	}

	err := inventory.inventoryDocumentModel().Create(&modelInventoryDocument).Preload("AuthenticityLevel").Preload("DimensionSizeArchiev").Preload("DocumentShape").Preload("DocumentType").Order("id desc").Error
	if err != nil {
		return modelInventoryDocument, err
	}

	if err := inventory.CreateProjectLog(dto.CreateProjectLog{
		UserId:      body.FilledBy,
		ProjectId:   modelInventory.ProjectId,
		Action:      "Inventory Document",
		Description: "Create New Inventory Document",
	}).Error(); err != "" {
		return models.InventoryDocument{}, utils.ErrCreateProjectLog
	}

	return modelInventoryDocument, nil
}

func (inventory *Inventory) Update(updateInventory *dto.UpdateInventory) (models.Inventory, error) {
	modelInventory := models.Inventory{
		ArchiveTitle:                updateInventory.ArchiveTitle,
		FileNumber:                  updateInventory.FileNumber,
		FrequencyOfChangeAdditionId: updateInventory.FrequencyOfChangeAdditionId,
		ArchiveYearOf:               updateInventory.ArchiveYearOf,
		ArchiveYearTo:               updateInventory.ArchiveYearTo,
		StorageMediaId:              updateInventory.StorageMediaId,
		StorageFacilitiesId:         updateInventory.StorageFacilitiesId,
	}

	inventory.inventoryModel().Where("inventories.id = ?", updateInventory.InventoryId).Updates(&modelInventory).Find(&modelInventory)

	fmt.Println("Before create project log", modelInventory)
	inventory.CreateProjectLog(dto.CreateProjectLog{
		UserId:      updateInventory.UserId,
		ProjectId:   modelInventory.ProjectId,
		Action:      "Inventory",
		Description: "Update Inventory",
	})
	fmt.Println("After create project log")

	return modelInventory, nil
}

func (inventory *Inventory) UpdateSelectData(model *gorm.DB, update map[string]interface{}) error {
	id := update["id"]
	delete(update, "id")
	delete(update, "type")
	return model.Where("id = ?", id).Updates(update).Error
}

func (inventory *Inventory) FindById(id uint) (models.Inventory, error) {
	var modelInventory models.Inventory
	if err := inventory.inventoryModel().Where("inventories.id = ?", id).Preload("FrequencyOfChangeAddition").Preload("StorageFacilities").Preload("StorageMedia").Preload("InventoryDocuments").Debug().First(&modelInventory).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.Inventory{}, utils.ErrInventoryNotFound
		} else {
			return models.Inventory{}, err
		}
	}
	return modelInventory, nil
}

func (inventory *Inventory) Delete(id, userId uint) error {
	var modelInventory = models.Inventory{}

	if err := inventory.inventoryModel().Where("inventories.id = ?", id).First(&modelInventory).Error; err != nil {
		return err
	}

	if err := inventory.inventoryModel().Where("inventories.id = ?", id).Delete(&models.Inventory{}).Error; err != nil {
		return err
	}

	if err := inventory.CreateProjectLog(dto.CreateProjectLog{
		UserId:      userId,
		ProjectId:   modelInventory.ProjectId,
		Action:      "Inventory",
		Description: "Delete Inventory",
	}).Error(); err != "" {
		return utils.ErrCreateProjectLog
	}

	return nil
}
