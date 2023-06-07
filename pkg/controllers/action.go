package controllers

import (
	"TKD/dto"
	"TKD/internal/server"
	// "TKD/pkg/repository"
	// "TKD/pkg/services"
	"TKD/utils"
	"github.com/nicksnyder/go-i18n/v2/i18n"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ActionController struct {
	server        *server.Server
	// actionService *services.ActionService
}

func NewActionController(srv *server.Server) *ActionController {
	return &ActionController{
		server: srv,
		// actionService: services.NewActionService(&services.ActionService{
		// 	DB:               srv.DB,
		// 	ActionRepository: repository.NewActionRepository(srv.DB),
		// }),
	}
}

// Get All API
// @Summary API untuk Ambil semua data API
// @Tags    Action
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
// @Router  /actions/paginated [GET]
func (actionController *ActionController) GetAllPaginated(c echo.Context) error {
	request := new(dto.BasePagination)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// data, meta, err := actionService.FindAllPaginated(request)
	// if err != nil {
	// 	return err
	// }

	// res := utils.ResponsePaginate{
	// 	Key:  "actions",
	// 	Meta: meta,
	// 	Response: utils.Response{
	// 		Data: data,
	// 		Translating: &i18n.Message{
	// 			ID:    "actions.success",
	// 			Other: "Success Get Data API",
	// 		},
	// 		StatusCode: 200,
	// 	},
	// }

	// return res.ReturnPaginates(c)
return nil
}

// Create Action Bulk
// @Summary API untuk Create Action Bulk
// @Tags    API
// @Accept  json
// @Produce json
// @Param   menus body     dto.PayloadCreateAction true "Data API"
// @Success 200   {object} utils.Response
// @Failure 400   {object} middlewares.ResponseError
// @Failure 401   {object} middlewares.ResponseError
// @Failure 404   {object} middlewares.ResponseError
// @Failure 500   {object} middlewares.ResponseError
// @Router  /actions/create-bulk [post]
func (actionController *ActionController) CreateActionBulk(c echo.Context) error {
	request := new(dto.PayloadCreateAction)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var menuService services.IActionService
	// menuService = actionController.actionService

	// actionRepo := actionController.actionService.ActionRepository
	// actionRepo.Begin(actionController.server.DB)

	// err := menuService.CreateAction(request)
	// if err != nil {
	// 	actionRepo.Rollback()
	// 	return err
	// }

	// actionRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.created.action",
			Other: "Success Create Action",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Action
// @Summary API untuk Delete Action
// @Tags    Action
// @Accept  json
// @Produce json
// @Param   id  path     int true "ID Menu"
// @Success 200 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /actions/{id} [delete]
func (actionController *ActionController) DeleteAction(c echo.Context) error {
	request := new(dto.DeleteAction)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// actionRepo := actionController.actionService.ActionRepository
	// actionRepo.Begin(actionController.server.DB)

	// err := actionService.DeleteActionById(request)
	// if err != nil {
	// 	actionRepo.Rollback()
	// 	return err
	// }

	// actionRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.delete.action",
			Other: "Success Delete Action",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Detail Action
// @Summary API untuk Detail Action
// @Tags    Action
// @Accept  json
// @Produce json
// @Param   id  path     int true "ID Menu"
// @Success 200 {object} utils.Response{data=models.Action}
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /actions/{id} [get]
func (actionController *ActionController) FindDetailAction(c echo.Context) error {
	request := new(dto.GetDetailAction)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// data, err := actionService.FindActionById(request)
	// if err != nil {
	// 	return err
	// }

	// res := utils.Response{
	// 	Data: data,
	// 	Translating: &i18n.Message{
	// 		ID:    "success.getdetail.action",
	// 		Other: "Success get detail Action",
	// 	},
	// 	StatusCode: http.StatusCreated,
	// }

	// return res.ReturnSingleMessage(c)
	return nil

}

// Detail Action By Menu
// @Summary API untuk Detail Action By Menu
// @Tags    Action
// @Accept  json
// @Produce json
// @Param   menu_id path     int true "ID Menu"
// @Success 200     {object} utils.Response{data=[]models.Action}
// @Failure 400     {object} middlewares.ResponseError
// @Failure 401     {object} middlewares.ResponseError
// @Failure 404     {object} middlewares.ResponseError
// @Failure 500     {object} middlewares.ResponseError
// @Router  /actions/menu/{menu_id} [get]
func (actionController *ActionController) FindActionByMenu(c echo.Context) error {
	request := new(dto.GetActionByMenu)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// data := actionService.FindActionByMenu(request)

	res := utils.Response{
		// Data: data,
		Translating: &i18n.Message{
			ID:    "success.getdetail.action",
			Other: "Success get detail Action",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)

}

// Update Action
// @Summary API untuk Update Action
// @Tags    Action
// @Accept  json
// @Produce json
// @Param   id   path     int              true "ID Menu"
// @Param   menu body     dto.UpdateAction true "body update"
// @Success 200  {object} utils.Response{data=models.Menu}
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /actions/{id} [put]
func (actionController *ActionController) UpdateAction(c echo.Context) error {
	request := new(dto.UpdateAction)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// actionRepo := actionController.actionService.ActionRepository
	// actionRepo.Begin(actionController.server.DB)

	// err := actionService.UpdateAction(request)
	// if err != nil {
	// 	actionRepo.Rollback()
	// 	return err
	// }

	// actionRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.update.actions",
			Other: "Success update Actions",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)

}

// Delete Actions Bulk
// @Summary API untuk Delete Actions Bulk
// @Tags    Actions
// @Accept  json
// @Produce json
// @Param   menu body     dto.DeleteActionBulk true "body delete"
// @Success 200  {object} utils.Response{data=models.Menu}
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /actions/bulk [delete]
func (actionController *ActionController) DeleteActionBulk(c echo.Context) error {
	request := new(dto.DeleteActionBulk)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// var actionService services.IActionService
	// actionService = actionController.actionService

	// actionRepo := actionController.actionService.ActionRepository
	// actionRepo.Begin(actionController.server.DB)

	// err := actionService.DeleteActionBulk(request)
	// if err != nil {
	// 	actionRepo.Rollback()
	// 	return err
	// }

	// actionRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success.update.action",
			Other: "Success update action",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}
