package services

import (
	"EJM/config"
	"EJM/dto"
	"EJM/internal/logs"
	"EJM/pkg/models"
	"EJM/pkg/repository"
	"EJM/utils"
	// "errors"
	// "gorm.io/gorm"
)

type RegisterService struct {
	RegisterRepository repository.UserRepository
	RoleRepository     repository.RoleRepository
	Config             *config.Config
}

type IUserService interface {
	ToggleActive(id uint, payload *bool) error
	RegisterUser(user *dto.CreateNewUser) (models.User, error)
	FindUsers(users *dto.GetUsers) ([]models.User, *models.Paginate, error)
	UpdateUser(id uint, user *dto.UpdateUser) error
	DeleteUser(id uint) error
	FindUserById(id uint) (models.User, error)
}

func NewRegisterService(constructor *RegisterService) *RegisterService {
	return constructor
}

func (register *RegisterService) ToggleActive(id uint, payload *bool) error {
	var registerRepo repository.UserRepository
	registerRepo = register.RegisterRepository

	_, errFindUser := registerRepo.FindFirst(id)
	if errFindUser != nil { // kalo user gak ada
		// return utils.ErrUserNotFound
	}

	if err := registerRepo.ToggleActive(id, payload); err != nil {
		return err
	}

	return nil

}

// // register user [tested]
// func (register *RegisterService) RegisterUser(user *dto.CreateNewUser) (models.User, error) {
// 	user.Password, _ = utils.HashPassword(user.Password)

// 	var registerRepo repository.UserRepository
// 	var roleRepo repository.RoleRepository
// 	registerRepo = register.RegisterRepository
// 	roleRepo = register.RoleRepository

// 	// cari role dulu
// 	_, rolenotfound := roleRepo.FindRoleById(uint(user.RoleId))
// 	if rolenotfound != nil {
// 		if errors.Is(rolenotfound, gorm.ErrRecordNotFound) {
// 			// return models.User{}, utils.ErrRoleNotExists
// 		} else {
// 			return models.User{}, rolenotfound
// 		}
// 	}

// 	// cari username dulu
// 	data, err := registerRepo.FindByUsername(user.Username)

// 	// err != nil berarti username belum ada
// 	if err != nil {
// 		createdUser, errCreateUser := registerRepo.CreateUser(user)
// 		if errCreateUser != nil {
// 			return models.User{}, errCreateUser
// 		}

// 		return createdUser, nil

// 	}
// 	return data, utils.ErrUsernameExist
// }

// find all usres [tested]
func (register *RegisterService) FindUsers(users *dto.GetUsers) ([]models.User, *models.Paginate, error) {
	pagination := models.Paginate{
		Page:     users.Page,
		PageSize: users.PageSize,
	}

	var registerRepo repository.UserRepository
	registerRepo = register.RegisterRepository

	data, meta, err := registerRepo.FindUsers(&pagination, users.Search, users.Value)
	if err != nil {
		return []models.User{}, meta, err
	}

	return data, meta, nil
}

// update user [tested]
func (register *RegisterService) UpdateUser(id uint, user *dto.UpdateUser) error {
	// cari id user
	var registerRepo repository.UserRepository
	var roleRepo repository.RoleRepository
	registerRepo = register.RegisterRepository
	roleRepo = register.RoleRepository

	_, errFindUser := registerRepo.FindFirst(id)
	if errFindUser != nil { // kalo user gak ada
		// return utils.ErrUserNotFound
	}

	_, errFindRole := roleRepo.FindRoleById(uint(user.RoleId))
	if errFindRole != nil {
		// return utils.ErrRoleNotExists
	}

	logs.Debug(user.EnableLoginByLink)

	hashed, _ := utils.HashPassword(user.Password)
	user.Password = hashed

	return registerRepo.UpdateUser(id, user)
}

// delete user [tested]
func (register *RegisterService) DeleteUser(id uint) error {
	var registerRepo repository.UserRepository
	registerRepo = register.RegisterRepository

	// cari id dulu
	_, err := registerRepo.FindFirst(id)
	if err != nil {
		// return utils.ErrUserNotFound
	}

	// delete
	return registerRepo.DeleteUser(id)
}

// Find User By Id
func (register *RegisterService) FindUserById(id uint) (models.User, error) {
	var userRepo repository.UserRepository
	userRepo = register.RegisterRepository

	data, err := userRepo.FindFirst(id)

	if err != nil {
		// return models.User{}, utils.ErrUserNotFound
	}

	return data, nil
}
