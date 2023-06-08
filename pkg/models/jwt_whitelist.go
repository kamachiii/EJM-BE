package models

type JWTWhitelist struct {
	BaseModel
	UserID       int    `json:"userId" form:"userId" gorm:"not null"`
	User         User   `json:"user" gorm:"foreignKey:UserID"`
	AccessToken  string `json:"access_token" gorm:"not null"`
	RefreshToken string `json:"refresh_token" gorm:"not null"`
}
