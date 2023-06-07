package models

type Action struct {
	BaseModel
	Name    string `json:"name" gorm:"not null"`
	API     string `json:"api"`
	Method  string `json:"method"`
	Default *bool  `json:"default" gorm:"default:false"`
}
