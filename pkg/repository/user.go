package repository

import (
	"EJM/dto"
	"EJM/pkg/models"
	"EJM/utils"
	"strings"

	"gorm.io/gorm"
)

type UserRepository interface {
	TransactionRepository
	FindUsers(pagination *models.Paginate, search string, value string) ([]models.User, *models.Paginate, error) //OK [get all data]
	FindFirst(id uint) (models.User, error) //OK [get data by id]
	FindById(id uint) (models.User, error) // [get data by id]
	FindByUsername(username string) (models.User, error) // [find data by the username]
	FindUserByPin(pin string) (models.User, error) //not used
	UpdateUser(id uint, user *dto.UpdateUser) error // [update data by id]
	ToggleActive(id uint, payload *bool) error // [activating the user]
	DeleteUser(id uint) error // [delete user]
	CreateUser(user *dto.CreateNewUser) (models.User, error) //OK [create data]
}

type User struct {
	Db  *gorm.DB
	db2 *gorm.DB
}

func NewRegisterRepository(Db *gorm.DB) *User {
	return &User{Db: Db, db2: Db}
}

func (register *User) Begin(tx *gorm.DB) {
	register.Db = tx.Begin()
}

func (register *User) Rollback() {
	register.Db.Rollback()

	// after commit transaction, we have to rollback transaction
	register.Db = register.db2
}

func (register *User) Commit() {
	register.Db.Commit()

	// after commit transaction, we have to rollback transaction
	register.Db = register.db2
}

func (register *User) UserModel() (tx *gorm.DB) {
	return register.Db.Model(&models.User{})
}

// Find First CreateNewUser by Id
func (register *User) FindFirst(id uint) (models.User, error) {
	user := models.User{
		BaseModel: models.BaseModel{
			ID: id,
		},
	}

	if err := register.UserModel().
		Preload("Role").
		First(&user, "users.id = ?", id).Error; err != nil {
		return user, err
	}

	return user, nil
}

// create user
func (register *User) CreateUser(user *dto.CreateNewUser) (models.User, error) {
	userModel := models.User{
		Name: user.Name,
		Username: user.Username,
		Password: user.Password,
		RoleId:   user.RoleId,
	}
	err := register.Db.Debug().Create(&userModel).Preload("Role").Error

	if err != nil {
		return userModel, err
	}

	return userModel, nil
}

// find by email
func (register *User) FindByEmail(email string) (models.User, error) {
	user := models.User{}

	if err := register.UserModel().Preload("Role").
		First(&user, "email = ?", email).Error; err != nil {
		return user, err
	}

	return user, nil
}

// find by email
func (register *User) FindById(id uint) (models.User, error) {
	user := models.User{}
	if err := register.UserModel().Preload("Role").
		First(&user, "id = ?", id).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (register *User) FindUserByPin(pin string) (models.User, error) {
	user := models.User{}

	if err := register.UserModel().
		Preload("Role").
		First(&user, "pin = ?", pin).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (register *User) FindByUsername(username string) (models.User, error) {
	user := models.User{}

	if err := register.UserModel().
		Preload("Role").
		First(&user, "username = ?", username).Error; err != nil {
		return user, err
	}

	return user, nil
}

// find all users
func (register *User) FindUsers(pagination *models.Paginate, search string, value string) ([]models.User, *models.Paginate, error) {
	var users []models.User
	data := register.UserModel().Where("users.id <> ? ", utils.DEFAULT_USER).Count(&pagination.Total)

	if search != "" {
		// cari data
		data.Where("lower(users.full_name) like ?", "%"+strings.ToLower(search)+"%").Count(&pagination.Total)
	}

	if value != "" {
		data.Order("users.id = " + value + " desc")
	}
	//pagination
	data.Scopes(pagination.Pagination()).Preload("Role", func(tx *gorm.DB) *gorm.DB {
		return tx.Select("id,is_active,name")
	}).Find(&users)

	// checking errors
	if err := data.Error; err != nil {
		return []models.User{}, pagination, err
	}

	return users, pagination, nil
}

// update user
func (register *User) UpdateUser(id uint, user *dto.UpdateUser) error {

	update := register.UserModel().Where("users.id = ?", id).Updates(
		models.User{
			Username: user.Username,
			Password: user.Password,
			RoleId:   user.RoleId,
		},
	)

	if err := update.Error; err != nil {
		return err
	}

	return nil
}

func (register *User) ToggleActive(id uint, payload *bool) error {
	update := register.UserModel().Where("users.id = ?", id).Updates(models.User{
		ActiveModel: models.ActiveModel{IsActive: payload},
	})

	if err := update.Error; err != nil {
		return err
	}

	return nil
}

// delete user
func (register *User) DeleteUser(id uint) error {
	deleteUser := register.UserModel().Where("users.id = ?", id).Delete(&models.User{})

	if err := deleteUser.Error; err != nil {
		return err
	}
	return nil
}

func (register *User) FindAllUsers() []models.User {
	var users []models.User

	register.UserModel().Where("role_id <> 1").Find(&users)

	return users
}