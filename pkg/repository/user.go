package repository

import (
	"EJM/dto"
	"EJM/pkg/models"
	"EJM/utils"
	"strings"

	"gorm.io/gorm"
)

type UserRepository interface {
	// TransactionRepository
	FindUsers(pagination *models.Paginate, search string, value string) ([]models.User, *models.Paginate, error)
	FindFirst(id uint) (models.User, error)
	FindByEmail(email string) (models.User, error)
	FindById(id uint) (models.User, error)
	FindByUsername(username string) (models.User, error)
	FindUserByPin(pin string) (models.User, error)
	FindUsersNotAssignedByProject(pagination *models.Paginate, search string, projectId uint) ([]models.User, *models.Paginate, error)
	FindUsersNotAssignedByProject2(projectId uint) []models.User
	FindUsersAssignedByProject(pagination *models.Paginate, search string, projectId uint) ([]models.User, *models.Paginate, error)
	FindUsersAssignedByProject2(projectId uint) []models.User
	FindAllUsers() []models.User
	UpdateUser(id uint, user *dto.UpdateUser) error
	ToggleActive(id uint, payload *bool) error
	DeleteUser(id uint) error
	CreateUser(user *dto.CreateNewUser) (models.User, error)
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

func (register *User) Database() *gorm.DB {
	return register.Db
}

func (register *User) SetDatabaseTransaction(tx *gorm.DB) {
	register.Db = tx
}

func (register *User) UserModel() (tx *gorm.DB) {
	return register.Db.Model(&models.User{})
}

// FindByUsernameMobile : Find By Username For User Mobile

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
	// otp, _ := utils.GenerateOTP(12)
	userModel := models.User{
		Phone:             user.Phone,
		Address:           user.Address,
		FullName:          user.FullName,
		Username:          user.Username,
		// ProfilePict:       user.ProfilePict,
		Email:             user.Email,
		Password:          user.Password,
		RoleID:            user.RoleId,
		EnableLoginByLink: user.EnableLoginByLink,
		// Pin:               &otp,
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
	cariPin, _ := register.FindById(id)
	// otp, _ := utils.GenerateOTP(12)
	var pin *string
	if cariPin.Pin == nil {
		// pin = &otp
	} else {
		pin = cariPin.Pin
	}

	update := register.UserModel().Where("users.id = ?", id).Updates(models.User{
		Phone:             user.Phone,
		Address:           user.Address,
		FullName:          user.FullName,
		Username:          user.Username,
		// ProfilePict:       user.ProfilePict,
		Email:             user.Email,
		Password:          user.Password,
		RoleID:            user.RoleId,
		EnableLoginByLink: user.EnableLoginByLink,
		Pin:               pin,
	})

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

func (register *User) FindUsersNotAssignedByProject(pagination *models.Paginate, search string, projectId uint) ([]models.User, *models.Paginate, error) {
	var users []models.User
	data := register.UserModel().Where("users.id <> ? ", utils.DEFAULT_USER).Count(&pagination.Total)

	if search != "" {
		// cari data
		data.Where("lower(users.full_name) like ?", "%"+strings.ToLower(search)+"%").Count(&pagination.Total)
	}
	//pagination
	data.Scopes(pagination.Pagination()).
		Where("not exists (select user_id from project_assigned_users where project_assigned_users.project_id = ? and project_assigned_users.user_id = users.id and deleted_at is null)", projectId).
		Count(&pagination.Total).
		Preload("Role", func(tx *gorm.DB) *gorm.DB {
			return tx.Select("id,is_active,name")
		}).
		Debug().
		Find(&users)

	// checking errors
	if err := data.Error; err != nil {
		return []models.User{}, pagination, err
	}

	return users, pagination, nil
}

func (register *User) FindUsersAssignedByProject(pagination *models.Paginate, search string, projectId uint) ([]models.User, *models.Paginate, error) {
	var users []models.User
	data := register.UserModel().Where("users.id <> ? ", utils.DEFAULT_USER).Count(&pagination.Total)

	if search != "" {
		// cari data
		data.Where("lower(users.full_name) like ?", "%"+strings.ToLower(search)+"%").Count(&pagination.Total)
	}
	//pagination
	data.Scopes(pagination.Pagination()).
		Where("exists (select user_id from project_assigned_users where project_assigned_users.project_id = ? and project_assigned_users.user_id = users.id and deleted_at is null)", projectId).
		Count(&pagination.Total).
		Preload("Role", func(tx *gorm.DB) *gorm.DB {
			return tx.Select("id,is_active,name")
		}).
		Debug().
		Find(&users)

	// checking errors
	if err := data.Error; err != nil {
		return []models.User{}, pagination, err
	}

	return users, pagination, nil
}

func (register *User) FindUsersNotAssignedByProject2(projectId uint) []models.User {
	var users []models.User
	data := register.UserModel().Where("users.id <> ? ", utils.DEFAULT_USER)
	//pagination
	data.Where("not exists (select user_id from project_assigned_users where project_assigned_users.project_id = ? and project_assigned_users.user_id = users.id and deleted_at is null)", projectId).
		Preload("Role", func(tx *gorm.DB) *gorm.DB {
			return tx.Select("id,is_active,name")
		}).
		Debug().
		Find(&users)

	return users
}

func (register *User) FindUsersAssignedByProject2(projectId uint) []models.User {
	var users []models.User
	data := register.UserModel().Where("users.id <> ? ", utils.DEFAULT_USER)
	//pagination
	data.Where("exists (select user_id from project_assigned_users where project_assigned_users.project_id = ? and project_assigned_users.user_id = users.id and deleted_at is null)", projectId).
		Preload("Role", func(tx *gorm.DB) *gorm.DB {
			return tx.Select("id,is_active,name")
		}).
		Debug().
		Find(&users)

	return users
}
