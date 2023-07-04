package dto

import (
	// "EJM/utils"
	"mime/multipart"
	"time"
)

type BasePagination struct {
	Page        string `json:"page" query:"page" validate:"required"`
	PageSize    string `json:"page_size" query:"page_size" validate:"required"`
	Search      string `json:"search" query:"search"`
	UsingActive bool   `json:"using_active" query:"using_active" form:"using_active"`
	Value       string `json:"value" query:"value"`
}

// user
type CreateNewUser struct {
	FullName          string `json:"full_name" form:"full_name"`
	Username          string `json:"username" form:"username" validate:"required"`
	Email             string `json:"email" form:"email" validate:"required,email"`
	ProfilePict       *string
	Phone             *string `json:"phone" form:"phone"`
	Address           *string `json:"address" form:"address"`
	Password          string  `json:"password" form:"password" validate:"required"`
	RoleId            int     `json:"roleId" form:"roleId"`
	EnableLoginByLink *bool   `json:"enable_login_by_link" form:"enable_login_by_link"`
}

type LoginByPin struct {
	Pin string `json:"pin" validate:"required"`
}

type DeleteUserBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type UpdateUser struct {
	ID uint `params:"id" validate:"required"`
	CreateNewUser
}

type ToggleActive struct {
	ID      uint  `param:"id" validate:"required" swaggerignore:"true"`
	Payload *bool `json:"payload"`
}

type GetUsers struct {
	BasePagination
}

type GetNotification struct {
	BasePagination
	UserId uint `json:"user_id" form:"user_id" validate:"required"`
	Type   uint `json:"type" validate:"required"`
}

type PayloadCreateMenu struct {
	Data []CreateMenu `json:"data" validate:"required,min=1"`
}

type PayloadCreateAction struct {
	Data []CreateAction `json:"data" validate:"required,min=1"`
}

// mapping code
type CreateNewMappingCode struct {
	Code       string `json:"code" form:"code" validate:"required"`
	Definition string `json:"definition" form:"definition" validate:"required"`
	Status     bool `json:"status" validate:"required"`
	Priority   int `json:"priority" form:"priority" validate:"required"`
	IsActive   bool `json:"isActive" form:"isActive" validate:"required"`
}

type GetMappingCodes struct {
	BasePagination
}

type DeleteMappingCodeBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type UpdateMappingCode struct {
	ID uint `params:"id" validate:"required"`
	CreateNewMappingCode
}
// menu
type CreateMenu struct {
	Name     string `json:"name" validate:"required"`
	Path     string `json:"path" validate:"required"`
	ParentId *uint  `json:"parent_id"`
}

type CreateAction struct {
	Name    string `json:"name" validate:"required"`
	Path    string `json:"path" validate:"required"`
	Method  string `json:"method" validate:"required"`
	Default *bool  `json:"default"`
}

// menu
type GetMenu struct {
	Name     string `json:"name" validate:"required"`
	ParentId int    `json:"parent_id" validate:"required"`
	Path     string `json:"path" validate:"required"`
}

type DeleteMenu struct {
	Id uint `param:"id" validate:"required" swaggerignore:"true"`
}

type DeleteAction struct {
	GetDetailAction
}

type GetDetailMenu struct {
	DeleteMenu
}

type GetDetailAction struct {
	Id uint `param:"id" validate:"required" swaggerignore:"true"`
}

type GetActionByMenu struct {
	MenuId uint `param:"menu_id"`
}

type DeleteMenuBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type DeleteActionBulk struct {
	DeleteMenuBulk
}

type UpdateMenu struct {
	GetDetailMenu
	APIS []uint `json:"apis"`
	CreateMenu
}

type UpdateAction struct {
	GetDetailAction
	CreateAction
}

// notification
type CreateNotification struct {
	Title                 string `json:"title" validate:"required"`
	Detail                string `json:"detail" validate:"required"`
	NotificationType      string `json:"notification_type" validate:"required"`
	IsRead                uint   `json:"is_read" validate:"required"`
	NotificationRecipient uint   `json:"notification_recipient" validate:"required"`
	NotificationSender    uint   `json:"notification_sender" validate:"required"`
}

// roles
type CreateRole struct {
	Name          string        `json:"name" validate:"required"`
	Active        bool          `json:"active"`
	Actions       []MenusAction `json:"actions" validate:"required"`
	ObjectActions []struct {
		ID       int    `json:"id" validate:"required"`
		Name     string `json:"name" validate:"required"`
		ParentID uint   `json:"parentId"`
		Path     string `json:"path" validate:"required"`
		State    int    `json:"state"`
		Type     string `json:"type" validate:"required"`
	} `json:"object_actions" validate:"required,dive,required"`
}

type DeleteRoleBulk struct {
	RoleIds []uint `json:"role_ids" validate:"required,min=1"`
}

type UpdateRole struct {
	ID uint `params:"id" form:"id" validate:"required"`
	CreateRole
}

type CreateRoleMenu struct {
	ID    uint   `param:"id" form:"id" validate:"required"`
	Menus []uint `json:"list_menu" validate:"required"`
}

type UpdateRoleMenu struct {
	ID    uint   `param:"id" form:"id" validate:"required"`
	Menus []uint `json:"list_menu" validate:"required"`
}

type GetRoles struct {
	BasePagination
}

// auth
type RefreshToken struct {
	Token string `json:"refresh_token" validate:"required"`
}

type MenusAction struct {
	MenuId uint `json:"menuId" validate:"required"`
	APIId  []uint
}

type SetAccessRole struct {
	RoleId  uint          `json:"roleId" validate:"required"`
	Actions []MenusAction `json:"actions" validate:"required"`
}

type Login struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
}

type ObjectStructures struct {
	Name     string  `json:"name" validate:"required"`
	Code     *string `json:"structureCode"`
	ParentID string  `json:"parentId"`
	ID       string  `json:"id" validate:"required"`
}

// company
type CreateCompany struct {
	Name             string             `json:"name" form:"name" validate:"required"`
	Active           bool               `json:"active"`
	ObjectStructures []ObjectStructures `json:"object_structures" form:"object_structures" validate:"required,min=1,dive,required"`
	ObjectStrings    *string            `form:"object_structures_string"`
	ProfilePict      *string
}

type GetCompanies struct {
	BasePagination
}

type UpdateCompany struct {
	ID uint `json:"companyId" form:"companyId" param:"companyId" validate:"required"`
	CreateCompany
}

type DeleteCompanyBulk struct {
	CompanyIds []uint `json:"company_ids" validate:"required,min=1"`
}

// questions
type Questions struct {
	Name        string `json:"name" validate:"required"`
	IsMandatory *bool  `json:"is_mandatory"`
	Options     []struct {
		Name       string `json:"name" validate:"required"`
		Value      int    `json:"value"`
		Conditions []struct {
			Name        string `json:"name"`
			IsMandatory bool   `json:"is_mandatory"`
		} `json:"conditions"`
		IsMandatory bool `json:"isMandatory"`
	} `json:"options" validate:"dive,required"`
}

type CreateSingleQuestion struct {
	TemplateId uint `param:"templateId" swaggerignore:"true"`
	Questions
}

type UpdateSingleQuestion struct {
	QuestionId uint `param:"questionId" swaggerignore:"true"`
	Questions
}

type CreateQuestion struct {
	Name      string      `json:"name" validate:"required"`
	Questions []Questions `json:"questions" validate:"required,dive,required"`
}

type GetQuestionTemplates struct {
	BasePagination
}

type GetJobQueue struct {
	BasePagination
	UserId uint `json:"user_id" query:"user_id"`
}

type DeleteQuestionTemplates struct {
	TemplateId uint `param:"templateId"`
}

type DeleteQuestionById struct {
	QuestionId uint `param:"questionId"`
}

type UpdateQuestionTemplateName struct {
	TemplateId uint   `param:"templateId" swaggerignore:"true"`
	Name       string `json:"name"`
}

type FindQuestionTemplate struct {
	TemplateId uint `param:"templateId"`
}

type FindQuestionById struct {
	QuestionId uint `param:"questionId"`
}

type FindQuestionsByTemplate struct {
	BasePagination
	TemplateId uint `param:"templateId"`
}

// lookup
type GetLookup struct {
	Type string `json:"type" query:"type" validate:"required"`
	BasePagination
}

// projects
type CreateProject struct {
	ProjectName        string    `json:"project_name" validate:"required"`
	ProjectCode        string    `json:"project_code" validate:"required"`
	ProjectStatus      string    `json:"project_status" validate:"required"`
	ProjectDueDate     time.Time `json:"project_due_date" validate:"required"`
	ProjectType        string    `json:"project_type" validate:"required"`
	ProjectDescription *string   `json:"project_description"`
	CompanyId          uint      `json:"company_id" validate:"required"`
}

type GetProject struct {
	BasePagination
	FilterProject
}

type GetUsersNotAssigned struct {
	BasePagination
	GetDetailProject
}

type GetUsersAssigned struct {
	GetUsersNotAssigned
}

type GetDetailProject struct {
	ProjectId uint `json:"project_id" param:"project_id" query:"project_id"`
}

type BaseCreate struct {
	ProjectId   uint   `json:"project_id" form:"project_id" param:"project_id" query:"project_id" validate:"required"`
	StructureId string `query:"structure_id" form:"structure_id" json:"structure_id" validate:"required"`
}

type DeleteStructureByIdAndProjectRequest struct {
	BaseCreate
}

type FilterProject struct {
	ProjectStatus string `query:"project_status"`
	ProjectType   string `query:"project_type"`
	CompanyId     uint   `query:"company"`
}

type UpdateProject struct {
	ProjectId          uint      `json:"project_id" param:"project_id" validate:"required" swaggerignore:"true"`
	ProjectName        string    `json:"project_name" validate:"required"`
	ProjectCode        string    `json:"project_code" validate:"required"`
	ProjectStatus      string    `json:"project_status" validate:"required"`
	ProjectDueDate     time.Time `json:"project_due_date" validate:"required"`
	ProjectType        string    `json:"project_type" validate:"required"`
	ProjectDescription string    `json:"project_description"`
}

type QuestionerInfo struct {
	PIC       string `json:"pic"`
	Type      string `json:"type"`
	Signature string `json:"signature"`
}

type GetDetailInfoStructure struct {
	StructureId string `json:"structure_id" query:"structure_id" validate:"required"`
	Type        string `json:"type" query:"type" validate:"required"`
	PrjId       uint   `json:"project_id" query:"project_id" validate:"required"`
}

// get question by structureId
type GetQuestionByStructure struct {
	StructureId string `json:"structure_id" query:"structure_id" validate:"required"`
	PrjId       uint   `json:"project_id" query:"project_id" validate:"required"`
}

type UpdatePIC struct {
	GetQuestionByStructure
	Type      string `json:"type" validate:"required"`
	PIC       string `json:"pic" validate:"required"`
	Signature string `json:"signature" validate:"required"`
}

type SetProjectQuestion struct {
	GetDetailProject
	StructureId        []string `json:"structure_ids" validate:"required,min=1"`
	PrjId              uint     `json:"project_id" validate:"required"`
	QuestionTemplateId []uint   `json:"question_template_id" validate:"required"`
}

type SetAssignUser struct {
	ProjectId   uint     `json:"project_id" validate:"required"`
	StructureId []string `json:"structure_id" validate:"required,min=1"`
	Job         []string `json:"job" validate:"required,min=1"`
	Users       []string `json:"users" validate:"required,min=1"`
}

type AnswerConditions struct {
	Label string `json:"label"`
	Value string `json:"value"`
}

type AnswerQuestion struct {
	QuestionId uint `json:"question_id" validate:"required"`
	Answer     struct {
		Label      string             `json:"label" validate:"required"`
		Value      string             `json:"value" validate:"required"`
		Keterangan string             `json:"keterangan"`
		Conditions []AnswerConditions `json:"conditions"`
	} `json:"answer"`
}

type GetFilterQuestioner struct {
	BasePagination
	GetQuestionByStructure
	Search         string `query:"search"`
	StatusAnswered string `query:"status_answered"`
	AnsweredBy     uint   `query:"answered_by"`
}

type GetDetailAnsweredQuestion struct {
	QuestionId uint `param:"question_id"`
}

type GetReportQuestionaire struct {
	BasePagination
	ProjectId   uint   `query:"project_id" validate:"required"`
	ProjectType string `query:"project_type"`
	Status      string `query:"project_status"`
	CompanyId   uint   `query:"company_id" validate:"required"`
	StructureId string `query:"structure_id"`
}

type RequestDispatchReportQuestioner struct {
	ProjectId uint `json:"project_id" validate:"required"`
	CompanyId uint `json:"company_id" validate:"required"`
	UserId    uint `json:"user_id"`
}

type RequestDispatchDownloadVolumeAttachment struct {
	ProjectId   uint   `json:"project_id" validate:"required"`
	StructureId string `json:"structure_id"`
	UserId      uint   `json:"user_id"`
	VolumeId    *uint  `json:"volume_id"`
}

type GetAllAssignedTasks struct {
	BasePagination
	Job    string `query:"job" validate:"required"`
	UserId uint   `query:"user_id" validate:"required"`
}

type GetDetailAssignUser struct {
	UserId    uint `param:"user_id" validate:"required"`
	ProjectId uint `query:"project_id" validate:"required"`
}

type GetProjectByCompany struct {
	BasePagination
	CompanyId uint `query:"company_id" validate:"required"`
}

type GetStructureByProject struct {
	BasePagination
	ProjectId uint `query:"project_id" validate:"required"`
}

type DeleteAssignedUser struct {
	UserId    uint `param:"user_id" validate:"required"`
	ProjectId uint `json:"project_id" validate:"required"`
}

type UpdateDetailAssignedUser struct {
	ProjectId   uint     `json:"project_id" validate:"required"`
	StructureId []string `json:"structure_id" validate:"required,min=1"`
	Job         []string `json:"job" validate:"required,min=1"`
	UserId      string   `param:"user_id" validate:"required" swaggerignore:"true"`
}

type GetProjectLogByProjectRequest struct {
	ProjectId uint `param:"project_id" validate:"required"`
	BasePagination
}

type GetStatProject struct {
	Month string `query:"month" validate:"required"`
	Year  string `query:"year" validate:"required"`
}

type GetProjectLogByUserRequest struct {
	UserId uint `param:"user_id" validate:"required"`
	BasePagination
}

type CreateStructureForProjectRequest struct {
	ProjectId uint   `json:"project_id" validate:"required"`
	Kode      string `json:"kode"`
	Nama      string `json:"nama" validate:"required"`
	Parent    string `json:"parent" validate:"required"`
	Uuid      string `json:"uuid" validate:"required"`
}

type AnswerQuestionParam struct {
	QuestionId        uint
	AnsweredValue     uint
	Conditions        []interface{}
	AnswerLabel       string
	AnsweredByName    string
	AnsweredByProfile string
	Desc              string
	RawValue          string
	UserId            uint
}

// Inventory

type GetInventory struct {
	BasePagination
	FilledBy string `query:"filled_by"`
	StatusId string `query:"status_id"`
}

type GetInventoryDocument struct {
	BasePagination
	FilledBy    string `query:"filled_by"`
	StatusId    string `query:"status_id"`
	InventoryId string `query:"inventory_id"`
}

type GetFieldSelectInventory struct {
	BasePagination
	Field string `json:"field" query:"field" validate:"required"`
}
type GetSingleFieldSelectInventory struct {
	Id    uint   `json:"id" query:"id" param:"id" validate:"required"`
	Field string `json:"field" query:"field" validate:"required"`
}

type CreateFieldSelectInventory struct {
	IsActive *bool  `json:"is_active"`
	Name     string `json:"name"`
	Type     string `json:"type" validate:"required"`
}

type UpdateFieldSelectInventory struct {
	Id uint `json:"id" validate:"required"`
	CreateFieldSelectInventory
}

type CreateInventory struct {
	UserId                      uint
	ProjectId                   uint                      `json:"project_id" validate:"required"`
	StructureId                 string                    `json:"structure_id" validate:"required"`
	ArchiveTitle                string                    `json:"archive_title" validate:"required"`
	FileNumber                  string                    `json:"file_number"`
	FrequencyOfChangeAdditionId int                       `json:"frequency_of_change_addition_id" form:"-"`
	ArchiveYearOf               string                    `json:"archive_year_of" `
	ArchiveYearTo               string                    `json:"archive_year_to"`
	StorageMediaId              int                       `json:"storage_media_id" `
	StorageFacilitiesId         int                       `json:"storage_facilities_id"`
	InventoryDocuments          []CreateInventoryDocument `json:"inventory_documents"`
}

type UpdateInventory struct {
	UserId                      uint
	InventoryId                 uint   `json:"inventory_id" param:"inventory_id" validate:"required" swaggerignore:"true"`
	ArchiveTitle                string `json:"archive_title" validate:"required"`
	FileNumber                  string `json:"file_number"`
	FrequencyOfChangeAdditionId int    `json:"frequency_of_change_addition_id" form:"-"`
	ArchiveYearOf               string `json:"archive_year_of" `
	ArchiveYearTo               string `json:"archive_year_to"`
	StorageMediaId              int    `json:"storage_media_id" `
	StorageFacilitiesId         int    `json:"storage_facilities_id"`
}

type CreateInventoryDocument struct {
	InventoryId                  uint   `json:"inventory_id"`
	FilledBy                     uint   `json:"filled_by"`
	Status                       string `json:"status"`
	Content                      string `json:"content"`
	DocumentTypeInOrderOfProcess string `json:"document_type_in_order_of_process"`
	DocumentTypeId               int    `json:"document_type_id"`
	DocumentShapeId              int    `json:"document_shape_id"`
	DimensionSizeArchievId       int    `json:"dimension_size_archiev_id"`
	AuthenticityLevelId          int    `json:"authenticity_level_id"`
}

type GetDetailInventory struct {
	InventoryId uint `json:"inventory_id" param:"inventory_id" query:"inventory_id"`
}

type CreateProjectLog struct {
	UserId      uint   `json:"user_id"`
	ProjectId   uint   `json:"project_id"`
	Action      string `json:"action"`
	Description string `json:"description"`
}

type GetVolume struct {
	BasePagination
	ProjectId   uint   `json:"project_id" form:"project_id" param:"project_id" query:"project_id" validate:"required"`
	StructureId string `query:"structure_id" form:"structure_id" json:"structure_id"`
}

type GetVolumeById struct {
	VolumeId uint `json:"volume_id" param:"volume_id" query:"volume_id"`
}

type UpdateVolume struct {
	ID                           uint                    `json:"id" form:"id" validate:"required"`
	StorageFacilityId            uint                    `json:"storage_facility_id" form:"storage_facility_id" validate:"required"`
	Unit                         float64                 `json:"unit" form:"unit" validate:"required"`
	Shelf                        float64                 `json:"shelf" form:"shelf" validate:"required"`
	ShelfLong                    float64                 `json:"shelf_long" form:"shelf_long" validate:"required"`
	VolumeStorageFacility        float64                 `json:"-" swaggerignore:"true"`
	VolumeStorageMedia           float32                 `json:"-" swaggerignore:"true"`
	FilledBy                     uint                    `json:"-" swaggerignore:"true" validate:"required"`
	VolumeStorageMediaPercentage float64                 `json:"volume_storage_media_percentage" form:"volume_storage_media_percentage" `
	RemovedFiles                 []uint                  `json:"removed_files" form:"removed_files" swaggerignore:"true"`
	Files                        []*multipart.FileHeader `swaggerignore:"true" validate:"max=6"`
	// UploadedFiles                []utils.UploadedFile    `json:"-" swaggerignore:"true"`
}

type CreateVolume struct {
	BaseCreate
	StorageFacilityId            uint                    `json:"storage_facility_id" form:"storage_facility_id" validate:"required"`
	Unit                         float64                 `json:"unit" form:"unit" validate:"required"`
	Shelf                        float64                 `json:"shelf" form:"shelf" validate:"required"`
	ShelfLong                    float64                 `json:"shelf_long" form:"shelf_long" validate:"required"`
	VolumeStorageFacility        float64                 `json:"-" swaggerignore:"true"`
	VolumeStorageMedia           float32                 `json:"-" swaggerignore:"true"`
	FilledBy                     uint                    `json:"-" swaggerignore:"true" validate:"required"`
	VolumeStorageMediaPercentage float64                 `json:"volume_storage_media_percentage" form:"volume_storage_media_percentage"`
	Files                        []*multipart.FileHeader `swaggerignore:"true" validate:"required,max=6,min=1"`
	// UploadedFiles                []utils.UploadedFile    `json:"-" swaggerignore:"true"`
}
