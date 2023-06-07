package controllers

import (
	"TKD/dto"
	"TKD/internal/server"
	"TKD/pkg/repository"
	"TKD/pkg/services"
	"TKD/utils"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"github.com/nicksnyder/go-i18n/v2/i18n"
)

type InventoryController struct {
	server            *server.Server
	inventoryServices services.IInventoryService
}

func NewInventoryController(srv *server.Server) *InventoryController {
	return &InventoryController{server: srv, inventoryServices: services.NewInventoryService(&services.InventoryService{
		DB:                  srv.DB,
		InventoryRepository: *repository.NewInventoryRepository(srv.DB),
	})}
}

// Ambil Daftar Inventory
// @Summary API untuk Ambil daftar Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   page      query    string true  "Halaman"
// @Param   page_size query    string true  "Jumlah Data Per halaman"
// @Param   search    query    string false "Mencari Data"
// @Param   filled_by query    string false "Filter Filled By"
// @Param   status    query    string false "Filter Status"
// @Success 200       {object} utils.ResponsePaginate
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /inventories [get]
func (i *InventoryController) FindAll(c echo.Context) error {
	request := new(dto.GetInventory)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// service
	var inventoryServices services.IInventoryService
	inventoryServices = i.inventoryServices
	data, total, err := inventoryServices.FindAll(request)
	if err != nil {
		return err
	}

	res := &utils.ResponsePaginate{
		Key:  "inventories",
		Meta: total,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data inventories",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)
}

// Ambil Daftar Inventory Document
// @Summary API untuk Ambil daftar Inventory Document
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   page      				query    string true  "Halaman"
// @Param   page_size 				query    string true  "Jumlah Data Per halaman"
// @Param   search    				query    string false "Mencari Data"
// @Param   filled_by  			 	query    string false "Filter Filled By"
// @Param   status    				query    string false "Filter Status"
// @Param   inventory_id    	query    string false "Filter Inventory Id"
// @Success 200       {object} utils.ResponsePaginate
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /inventories/document [get]
func (i *InventoryController) FindAllDocument(c echo.Context) error {
	request := new(dto.GetInventoryDocument)

	if errBind := c.Bind(request); errBind != nil {
		return errBind
	}
	if errValidate := c.Validate(request); errValidate != nil {
		return errValidate
	}

	// service
	var inventoryServices services.IInventoryService
	inventoryServices = i.inventoryServices
	data, total, err := inventoryServices.FindAllDocument(request)
	if err != nil {
		return err
	}

	res := &utils.ResponsePaginate{
		Key:  "inventory_documents",
		Meta: total,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data inventories documents",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)
}

// Buat Inventory baru
// @Summary API untuk Buat Inventory baru
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   inventory body     dto.CreateInventory true "Buat Inventory baru Baru"
// @Success 201       {object} utils.Response{data=models.QuestionTemplates}
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /inventories [post]
func (i *InventoryController) Create(c echo.Context) error {
	var (
		inventoryServices = i.inventoryServices
		request           = new(dto.CreateInventory)
	)

	if errBindAndValidate := utils.BindAndValidate[*dto.CreateInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	request.UserId = utils.User(c).ID

	inventory, errCreate := inventoryServices.Create(request)
	if errCreate != nil {
		return errCreate
	}

	res := utils.Response{
		Data: inventory,
		Translating: &i18n.Message{
			ID:    "inventory.created",
			Other: "Success Create New Inventory",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Buat Inventory Document baru
// @Summary API untuk Buat Inventory Document baru
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   inventory body     dto.CreateInventoryDocument true "Buat Inventory Document baru Baru"
// @Success 201       {object} utils.Response{data=models.QuestionTemplates}
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /inventories/document [post]
func (i *InventoryController) CreateInventoryDocument(c echo.Context) error {
	var (
		inventoryServices = i.inventoryServices
		request           = new(dto.CreateInventoryDocument)
	)

	if errBindAndValidate := utils.BindAndValidate[*dto.CreateInventoryDocument](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	request.FilledBy = utils.User(c).ID

	inventory, errCreate := inventoryServices.CreateInventoryDocument(request)
	if errCreate != nil {
		return errCreate
	}

	res := utils.Response{
		Data: inventory,
		Translating: &i18n.Message{
			ID:    "inventory.created",
			Other: "Success Create New Inventory Document",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Update Inventory Info
// @Summary API untuk Update Inventory Info
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   inventory_id path     int                 true "Update Inventory"
// @Param   inventory    body     dto.UpdateInventory true "Update Inventory Info"
// @Success 201          {object} utils.Response{data=models.Inventory}
// @Failure 400          {object} middlewares.ResponseError
// @Failure 401          {object} middlewares.ResponseError
// @Failure 404          {object} middlewares.ResponseError
// @Failure 500          {object} middlewares.ResponseError
// @Router  /inventories/{inventory_id} [put]
func (i *InventoryController) Update(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("inventory_id"))

	var (
		request           = new(dto.UpdateInventory)
		inventoryServices = i.inventoryServices
	)

	request.InventoryId = uint(id)
	request.UserId = utils.User(c).ID

	if errBindAndValidate := utils.BindAndValidate[*dto.UpdateInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	inventory, err := inventoryServices.Update(request)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: inventory,
		Translating: &i18n.Message{
			ID:    "inventory.info.updated",
			Other: "Success update Inventory",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Inventory
// @Summary API untuk Delete Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   inventory_id path     int true "Inventory ID"
// @Success 200          {object} utils.Response
// @Failure 400          {object} middlewares.ResponseError
// @Failure 401          {object} middlewares.ResponseError
// @Failure 404          {object} middlewares.ResponseError
// @Failure 500          {object} middlewares.ResponseError
// @Router  /inventories/{inventory_id} [delete]
func (i *InventoryController) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("inventory_id"))
	userId := utils.User(c).ID

	var inventoryService = i.inventoryServices

	err := inventoryService.Delete(uint(id), uint(userId))
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "inventories.deleted",
			Other: "Success Delete inventory",
		},
		StatusCode: http.StatusOK,
	}

	return res.ReturnSingleMessage(c)
}

// Find By Id Inventory
// @Summary API untuk Find By Id Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   inventory_id path     string true "Inventory ID"
// @Success 200          {object} utils.Response
// @Failure 400          {object} middlewares.ResponseError
// @Failure 401          {object} middlewares.ResponseError
// @Failure 404          {object} middlewares.ResponseError
// @Failure 500          {object} middlewares.ResponseError
// @Router  /inventories/{inventory_id} [get]
func (i *InventoryController) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("inventory_id"))
	var inventoryService = i.inventoryServices

	result, err := inventoryService.FindById(uint(id))
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: result,
		Translating: &i18n.Message{
			ID:    "inventories.deleted",
			Other: "Success Find By Id Inventory",
		},
		StatusCode: http.StatusOK,
	}

	return res.ReturnSingleMessage(c)
}

// Ambil Daftar select Inventory
// @Summary API untuk Ambil daftar select Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   page      query    string true  "Halaman"
// @Param   page_size query    string true  "Jumlah Data Per halaman"
// @Param   search    query    string false "Mencari Data"
// @Param   field     query    string true  "Tipe Select"
// @Success 200       {object} utils.ResponsePaginate
// @Failure 400       {object} middlewares.ResponseError
// @Failure 401       {object} middlewares.ResponseError
// @Failure 404       {object} middlewares.ResponseError
// @Failure 500       {object} middlewares.ResponseError
// @Router  /inventories/select [get]
func (i *InventoryController) FindSelectInventory(c echo.Context) error {
	request := new(dto.GetFieldSelectInventory)
	if errBindAndValidate := utils.BindAndValidate[*dto.GetFieldSelectInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	var inventoryService = i.inventoryServices

	result, pagination, err := inventoryService.FindFormSelectInventory(request)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "select",
		Meta: pagination,
		Response: utils.Response{
			Data: result,
			Translating: &i18n.Message{
				ID:    "success",
				Other: "success get data",
			},
			StatusCode: http.StatusOK,
		},
	}

	return res.ReturnPaginates(c)
}

// Create Daftar select Inventory
// @Summary API untuk Create daftar select Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   page body     dto.CreateFieldSelectInventory true "Body"
// @Success 200  {object} utils.ResponsePaginate
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /inventories/select/create [post]
func (i *InventoryController) CreateDataSelectInventory(c echo.Context) error {
	request := new(dto.CreateFieldSelectInventory)
	if errBindAndValidate := utils.BindAndValidate[*dto.CreateFieldSelectInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	var inventoryService = i.inventoryServices

	err := inventoryService.CreateDataSelectInventory(request)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success",
			Other: "success create data",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Update Daftar select Inventory
// @Summary API untuk Update daftar select Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   Update body     dto.UpdateFieldSelectInventory true "Body"
// @Success 200    {object} utils.ResponsePaginate
// @Failure 400    {object} middlewares.ResponseError
// @Failure 401    {object} middlewares.ResponseError
// @Failure 404    {object} middlewares.ResponseError
// @Failure 500    {object} middlewares.ResponseError
// @Router  /inventories/select/update [put]
func (i *InventoryController) UpdateDataSelectInventory(c echo.Context) error {
	request := new(dto.UpdateFieldSelectInventory)
	if errBindAndValidate := utils.BindAndValidate[*dto.UpdateFieldSelectInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	var inventoryService = i.inventoryServices

	err := inventoryService.UpdateDataSelectInventory(request)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "success",
			Other: "success update data",
		},
		StatusCode: http.StatusCreated,
	}

	return res.ReturnSingleMessage(c)
}

// Ambil Satu Daftar select Inventory
// @Summary API untuk Ambil Satu daftar select Inventory
// @Tags    Inventory
// @Accept  json
// @Produce json
// @Param   id    path     string true "ID"
// @Param   field query    string true "Tipe Select"
// @Success 200   {object} utils.ResponsePaginate
// @Failure 400   {object} middlewares.ResponseError
// @Failure 401   {object} middlewares.ResponseError
// @Failure 404   {object} middlewares.ResponseError
// @Failure 500   {object} middlewares.ResponseError
// @Router  /inventories/select/{id} [get]
func (i *InventoryController) FindOneSelectInventory(c echo.Context) error {
	request := new(dto.GetSingleFieldSelectInventory)
	if errBindAndValidate := utils.BindAndValidate[*dto.GetSingleFieldSelectInventory](request, c); errBindAndValidate != nil {
		return errBindAndValidate
	}

	var inventoryService = i.inventoryServices

	result, err := inventoryService.FindOneDataSelectInventory(request)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data: result,
		Translating: &i18n.Message{
			ID:    "success",
			Other: "success get data",
		},
		StatusCode: http.StatusOK,
	}

	return res.ReturnSingleMessage(c)
}
