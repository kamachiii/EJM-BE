package repository

import (
	"TKD/pkg/models"
	// "TKD/utils"
	"errors"
	"fmt"
	"gorm.io/gorm"
)

type JWTWhitelistRepository interface {
	// TransactionRepository
	DeleteToken(accessToken string) error
	AddToken(accessToken string, refreshToken string) error
	UpdateToken(accessToken string, refreshToken string, tokenString string) error
	CheckToken(token, tokenKey string) error
}

type JWTWhitelist struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func JWTWhitelistImplementation(db *gorm.DB) *JWTWhitelist {
	return &JWTWhitelist{db: db, db2: db}
}

func (jwt *JWTWhitelist) Begin(tx *gorm.DB) {
	jwt.db = tx.Begin()
}

func (jwt *JWTWhitelist) Rollback() {
	jwt.db.Rollback()

	// after commit transaction, we have to rollback transaction
	jwt.db = jwt.db2
}

func (jwt *JWTWhitelist) Commit() {
	jwt.db.Commit()

	// after commit transaction, we have to rollback transaction
	jwt.db = jwt.db2
}

func (jwt *JWTWhitelist) JWTWhitelistModel() (tx *gorm.DB) {
	return jwt.db.Model(models.JWTWhitelist{})
}

func (jwt *JWTWhitelist) DeleteToken(accessToken string) error {
	deleteToken := jwt.JWTWhitelistModel().Where("access_token = ?", accessToken).Delete(&models.JWTWhitelist{})

	if err := deleteToken.Error; err != nil {
		return err
	}

	return nil
}

func (jwt *JWTWhitelist) AddToken(accessToken string, refreshToken string) error {
	jwtModel := models.JWTWhitelist{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	}
	err := jwt.db.Create(&jwtModel).Error

	if err != nil {
		return err
	}
	return nil
}

func (jwt *JWTWhitelist) UpdateToken(accessToken string, refreshToken string, tokenString string) error {
	updateToken := jwt.JWTWhitelistModel().Where("refresh_token = ?", tokenString).Updates(models.JWTWhitelist{
		RefreshToken: refreshToken,
		AccessToken:  accessToken,
	})

	if err := updateToken.Error; err != nil {
		return err
	}

	return nil
}

func (jwt *JWTWhitelist) CheckToken(token, tokenKey string) error {
	if err := jwt.JWTWhitelistModel().Where(fmt.Sprintf("%s = ?", tokenKey), token).Debug().First(&models.JWTWhitelist{}).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// return utils.ErrUserUnauhotirzed
		} else {
			return err
		}
	}
	return nil
}
