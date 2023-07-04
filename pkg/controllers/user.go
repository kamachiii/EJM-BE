package controllers

import (
	"EJM/dto"
	"EJM/internal/server"
	"EJM/pkg/repository"
	"EJM/pkg/services"
	"EJM/utils"
	"strconv"

	"github.com/nicksnyder/go-i18n/v2/i18n"
	"gorm.io/gorm"

	"github.com/labstack/echo/v4"
)

type UserController struct {
	db              *gorm.DB
	server          server.IServerInterface
	registerService *services.RegisterService
}

func NewUserController(srv *server.Server) *UserController {
	db := srv.DB
	return &UserController{
		server: srv,
		db:     db,
		registerService: services.NewRegisterService(
			&services.RegisterService{
				RegisterRepository: repository.NewRegisterRepository(srv.DB),
				RoleRepository:     repository.NewRoleRepository(srv.DB),
				Db:                 db,
				Config:             srv.Config,
			},
		),
	}
}

// Set Status User
// @Summary API untuk Set Status User
// @Tags    User
// @Accept  json
// @Produce json
// @Param   id   path     string           true "User ID"
// @Param   user body     dto.ToggleActive true "Set Status User"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /users/status/{id} [put]
func (userController *UserController) ToggleActiveNonActive(c echo.Context) error {
	req := new(dto.ToggleActive)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	userRepo := userController.registerService.RegisterRepository
	userRepo.Begin(userController.db)

	err := userController.registerService.ToggleActive(req.ID, req.Payload)
	if err != nil {
		userRepo.Rollback()
		return err
	}

	userRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "users.status.updated",
			Other: "Success set status user",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)

}

// Daftar User Baru
// @Summary API untuk Daftar atau Create User Baru
// @Tags    User
// @Accept  json
// @Produce json
// @Param   user body     dto.CreateNewUser true "Daftar User Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /users/register [post]
func (userController *UserController) RegisterUser(c echo.Context) error {
	req := new(dto.CreateNewUser)

	if err := c.Bind(req); err != nil {
		return err
	}
	
	if err := c.Validate(req); err != nil {
		return err
	}

	userRepo := userController.registerService.RegisterRepository
	roleRepo := userController.registerService.RoleRepository

	roleRepo.Begin(userController.db)
	userRepo.Begin(userController.db)

	data, err := userController.registerService.RegisterUser(req)
	if err != nil {
		roleRepo.Rollback()
		userRepo.Rollback()
		return err
	}

	roleRepo.Commit()
	userRepo.Commit()

	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Insert data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Ambil Daftar User
// @Summary API untuk Ambil daftar User
// @Tags    User
// @Accept  json
// @Produce json
// @Param   page      query    string true  "Halaman"
// @Param   page_size query    string true  "Jumlah Data Per halaman"
// @Param   search    query    string false "Mencari Data"
// @Success 200       {object} utils.ResponsePaginate
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /users [get]
func (userController *UserController) FindUsers(c echo.Context) error {
	req := new(dto.GetUsers)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	data, meta, err := userController.registerService.FindUsers(req)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "users",
		Meta: meta,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data user",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)

}

// Update User
// @Summary API untuk Update Data User
// @Tags    User
// @Accept  json
// @Produce json
// @Param   id   path     int               true "User ID"
// @Param   user body     dto.CreateNewUser true "Update User Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /users/{id} [put]
func (userController *UserController) UpdateUser(c echo.Context) error {
	id, errConvert := strconv.Atoi(c.Param("id"))
	if errConvert != nil {
		return errConvert
	}

	req := new(dto.UpdateUser)
	req.ID = uint(id)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	userRepo := userController.registerService.RegisterRepository
	roleRepo := userController.registerService.RoleRepository

	roleRepo.Begin(userController.db)
	userRepo.Begin(userController.db)

	err := userController.registerService.UpdateUser(uint(id), req)
	if err != nil {
		roleRepo.Rollback()
		userRepo.Rollback()
		return err
	}

	roleRepo.Commit()
	userRepo.Commit()

	res := utils.Response{
		Data:       nil,
		Message:    "Berhasil Update data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Delete User
// @Summary API untuk Delete User
// @Tags    User
// @Accept  json
// @Produce json
// @Param   id  path     int true "User ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /users/{id} [delete]
func (userController *UserController) DeleteUser(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	userRepo := userController.registerService.RegisterRepository
	roleRepo := userController.registerService.RoleRepository

	roleRepo.Begin(userController.db)
	userRepo.Begin(userController.db)

	err := userController.registerService.DeleteUser(uint(id))
	if err != nil {
		roleRepo.Rollback()
		userRepo.Rollback()
		return err
	}

	roleRepo.Commit()
	userRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "user.success.delete",
			Other: "Success Delete User",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Delete User Bulk
// @Summary API untuk Delete User Bulk
// @Tags    User
// @Accept  json
// @Produce json
// @Param   user_ids body     dto.DeleteUserBulk true "Delete User Bulk"
// @Success 201      {object} utils.Response
// @Failure 400      {object} middlewares.ResponseError
// @Failure 401      {object} middlewares.ResponseError
// @Failure 404      {object} middlewares.ResponseError
// @Failure 500      {object} middlewares.ResponseError
// @Router  /users [delete]
func (userController *UserController) DeleteUserBulk(c echo.Context) error {
	req := new(dto.DeleteUserBulk)
	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	userRepo := userController.registerService.RegisterRepository
	roleRepo := userController.registerService.RoleRepository

	roleRepo.Begin(userController.db)
	userRepo.Begin(userController.db)

	for _, id := range req.Ids {
		err := userController.registerService.DeleteUser(uint(id))
		if err != nil {
			roleRepo.Rollback()
			userRepo.Rollback()
			return err
		}
	}

	roleRepo.Commit()
	userRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "user.success.delete",
			Other: "Success Delete User",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Find User By ID
// @Summary API untuk Find User By ID
// @Tags    User
// @Accept  json
// @Produce json
// @Param   id  path     int true "User ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /users/{id} [GET]
func (userController *UserController) FindUserById(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		return err
	}

	data, errFindUser := userController.registerService.FindUserById(uint(id))

	if errFindUser != nil {
		return errFindUser
	}

	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Get Data User",
		StatusCode: 200,
	}

	return res.ReturnSingleMessage(c)
}
