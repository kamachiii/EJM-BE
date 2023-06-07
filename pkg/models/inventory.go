package models

type Inventory struct {
	BaseModel
	ActiveModel
	ProjectId                   uint                      `json:"project_id" gorm:"not null"`
	StructureId                 string                    `json:"structure_id" gorm:"not null"`
	Status                      string                    `json:"status" gorm:"not null"`
	ArchiveTitle                string                    `json:"archive_title" gorm:"not null"`
	FileNumber                  string                    `json:"file_number"`
	FrequencyOfChangeAdditionId int                       `json:"frequency_of_change_addition_id" form:"-"`
	ArchiveYearOf               string                    `json:"archive_year_of" `
	ArchiveYearTo               string                    `json:"archive_year_to"`
	StorageMediaId              int                       `json:"storage_media_id" `
	StorageFacilitiesId         int                       `json:"storage_facilities_id"`
	FrequencyOfChangeAddition   FrequencyOfChangeAddition `json:"frequency_of_change_addition" gorm:"foreignKey:FrequencyOfChangeAdditionId"`
	StorageFacilities           StorageFacilities         `json:"storage_facilities" gorm:"foreignKey:StorageFacilitiesId"`
	StorageMedia                StorageMedia              `json:"storage_media" gorm:"foreignKey:StorageMediaId"`
	InventoryDocuments          []InventoryDocument       `json:"inventory_documents"`
}
