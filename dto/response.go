package dto

import (
	"TKD/pkg/models"
	"time"
)

type MenuAPI struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	ParentId *uint  `json:"parentId"`
	Path     string `json:"path"`
	Type     string `json:"type"`
}

type IdAndName struct {
	Id   uint   `json:"id"`
	Name string `json:"name"`
}

type TableQuestionTemplate struct {
	ID             uint      `json:"id" gorm:"primary_key"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
	Name           string    `json:"name"`
	TotalQuestions int       `json:"total_questions"`
}

type ReturnProject struct {
	models.BaseModel
	Name               string                   `json:"project_name" gorm:"not null;type=text"`
	Code               string                   `json:"project_code" gorm:"not null;max=15"`
	DueDate            time.Time                `json:"project_date" gorm:"not null"`
	Type               string                   `json:"project_type" gorm:"not null"`
	TotalAssignedUsers uint                     `json:"total_assigned_users" gorm:"not null"`
	Status             string                   `json:"project_status" gorm:"not null"`
	Progress           float64                  `json:"progress"`
	Description        *string                  `json:"description" gorm:"text"`
	CompanyId          uint                     `json:"company_id"`
	CompanyName        string                   `json:"company_name"`
	CompanyProfilePict string                   `json:"company_profile_pict"`
	AssignedUsers      []map[string]interface{} `json:"assigned_users"`
}

type ProjectDetail struct {
	models.Project
	TotalAssignedUsers     uint   `json:"total_assigned_users"`
	SelectStatusLabel      string `json:"select_status_label"`
	SelectStatusValue      string `json:"select_status_value"`
	SelectProjectTypeLabel string `json:"select_project_type_label"`
	SelectProjectTypeValue string `json:"select_project_type_value"`
}

type AssignUsers struct {
	models.ProjectAssignedUsers
	FullName       string `json:"full_name"`
	ProfilePict    string `json:"profile_pict"`
	SelectLabelJob string `json:"select_label_job"`
	SelectValueJob string `json:"select_value_job"`
}

type BaseSelectValue struct {
	Value string `json:"value"`
	Label string `json:"label"`
}

type DetailAssignUser struct {
	Job        []BaseSelectValue `json:"job"`
	Structures []BaseSelectValue `json:"structures"`
}

type AssignedTasks struct {
	ID                 uint      `json:"id"`
	StructureName      string    `json:"structure_name"`
	ProjectCode        string    `json:"project_code"`
	ProjectId          uint      `json:"project_id"`
	StructureId        string    `json:"structure_id"`
	ProjectType        string    `json:"project_type"`
	CompanyProfilePict string    `json:"company_profile_pict"`
	CompanyName        string    `json:"company_name"`
	AssignedAt         time.Time `json:"assigned_at"`
	Type               string    `json:"type"`
}

type ResponseMenu struct {
	models.Menu
	ParentName string `json:"parent_name"`
}

type ProjectStatistics struct {
	TotalQuestions         int64 `json:"total_questions"`
	CurrentFilledQuestions int64 `json:"current_filled_questions"`
	TotalInventory         int64 `json:"total_inventory"`
	CurrentFilledInventory int64 `json:"current_filled_inventory"`
	TotalVolumes           int64 `json:"total_volumes"`
	CurrentFilledVolumes   int64 `json:"current_filled_volumes"`
}

type ReportQuestionerResponse struct {
	Id         uint       `json:"id"`
	UnitKerja  string     `json:"unit_kerja"`
	Name       string     `json:"name"`
	RawStatus  string     `json:"raw_status"`
	Status     string     `json:"status"`
	Answer     string     `json:"answer"`
	AnsweredAt *time.Time `json:"answered_at"`
}

type GetProjectLogResponse struct {
	ID          uint      `json:"id"`
	User        IdAndName `json:"user"`
	Time        time.Time `json:"time"`
	Action      string    `json:"action"`
	Description string    `json:"description"`
}

type ResponseStatProject struct {
	Type       string `json:"type"`
	PrevMonth  string `json:"prev_month"`
	CurrMonth  string `json:"curr_month"`
	Percentage string `json:"percentage"`
	MothYear   string `json:"month_year"`
}
