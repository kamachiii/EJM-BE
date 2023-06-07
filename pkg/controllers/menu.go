package controllers

import (
	"TKD/dto"
	"TKD/internal/server"
	"TKD/pkg/repository"
	"TKD/pkg/services"
	"TKD/utils"
	"github.com/nicksnyder/go-i18n/v2/i18n"
	"net/http"

	"github.com/labstack/echo/v4"
)

type MenuController struct {
	server      *server.Server
	menuService *services.MenuService
}

func NewMenuController(srv *server.Server) *MenuController {
	return &MenuController{
		server: srv,
		menuService: services.NewMenuService(&services.MenuService{
			MenuRepository: repository.NewMenuRepository(srv.DB),
		}),
	}
}

// Get All Menu
// @Summary API untuk Ambil semua data menu
// @Tags    Menu
// @Accept  json
// @Produce json
// @Success 200 {object} utils.Response{data=[]dto.MenuAPI}
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /menus [GET]
func (menuController *MenuController) GetAll(c echo.Context) error {
	var menuService = menuController.menuService

	data, err := menuService.FindAll()

	if err != nil {
		return err
	}

	res := utils.Response{
		Data: data,
		Translating: &i18n.Message{
			ID:    "menu.success",
			Other: "Success Get Data Menu",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Get All Menu
// @Summary API untuk Ambil semua data menu
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   page      query    string true  "Halaman"
// @Param   page_size query    string true  "Jumlah Data Per halaman"
// @Param   search    query    string false "Mencari Data"
// @Success 200       {object} utils.Response
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /menus/paginated [GET]
func (menuController *MenuController) GetAllPaginated(c echo.Context) error {
	request := new(dto.BasePagination)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	data, meta, err := menuService.FindAllPaginated(request)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "menus",
		Meta: meta,
		Response: utils.Response{
			Data: data,
			Translating: &i18n.Message{
				ID:    "menu.success",
				Other: "Success Get Data Menu",
			},
			StatusCode: 201,
		},
	}

	return res.ReturnPaginates(c)
}

// Create Menu Bulk
// @Summary API untuk Create Menu Bulk
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   menus body     dto.PayloadCreateMenu true "Data Menu"
// @Success 200   {object} utils.Response
// @Failure 400   {object} middlewares.ResponseError
// @Failure 401   {object} middlewares.ResponseError
// @Failure 404   {object} middlewares.ResponseError
// @Failure 500   {object} middlewares.ResponseError
// @Router  /menus/create-bulk [post]
func (menuController *MenuController) CreateMenuBulk(c echo.Context) error {
	request := new(dto.PayloadCreateMenu)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	// menuRepo := menuController.menuService.MenuRepository
	// menuRepo.Begin(menuController.server.DB)

	err := menuService.CreateMenu(request)
	if err != nil {
		// menuRepo.Rollback()
		return err
	}

	// menuRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.created.menu",
			Other: "Success Create Menu",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Menu
// @Summary API untuk Delete Menu
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   id  path     int true "ID Menu"
// @Success 200 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /menus/{id} [delete]
func (menuController *MenuController) DeleteMenu(c echo.Context) error {
	request := new(dto.DeleteMenu)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	// menuRepo := menuController.menuService.MenuRepository
	// menuRepo.Begin(menuController.server.DB)

	err := menuService.DeleteMenuById(request)
	if err != nil {
		// menuRepo.Rollback()
		return err
	}

	// menuRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.delete.menu",
			Other: "Success Delete Menu",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Detail Menu
// @Summary API untuk Detail Menu
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   id  path     int true "ID Menu"
// @Success 200 {object} utils.Response{data=models.Menu}
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /menus/{id} [get]
func (menuController *MenuController) FindDetailMenu(c echo.Context) error {
	request := new(dto.GetDetailMenu)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	data, err := menuService.FindMenuById(request)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: data,
		Translating: &i18n.Message{
			ID:    "success.getdetail.menu",
			Other: "Success get detail Menu",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)

}

// Update Menu
// @Summary API untuk Update Menu
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   id   path     int            true "ID Menu"
// @Param   menu body     dto.UpdateMenu true "body update"
// @Success 200  {object} utils.Response{data=models.Menu}
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /menus/{id} [put]
func (menuController *MenuController) UpdateMenu(c echo.Context) error {
	request := new(dto.UpdateMenu)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	// menuRepo := menuController.menuService.MenuRepository
	// menuRepo.Begin(menuController.server.DB)

	err := menuService.UpdateMenu(request)
	if err != nil {
		// menuRepo.Rollback()
		return err
	}

	// menuRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.update.menu",
			Other: "Success update Menu",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)

}

// Delete Menu Bulk
// @Summary API untuk Delete Menu Bulk
// @Tags    Menu
// @Accept  json
// @Produce json
// @Param   menu body     dto.DeleteMenuBulk true "body delete"
// @Success 200  {object} utils.Response{data=models.Menu}
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /menus/bulk [delete]
func (menuController *MenuController) DeleteMenuBulk(c echo.Context) error {
	request := new(dto.DeleteMenuBulk)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	var menuService services.IMenuService
	menuService = menuController.menuService

	// menuRepo := menuController.menuService.MenuRepository
	// menuRepo.Begin(menuController.server.DB)

	err := menuService.DeleteMenuBulk(request)
	if err != nil {
		// menuRepo.Rollback()
		return err
	}

	// menuRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.update.menu",
			Other: "Success update Menu",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}
