package controllers

import (
	"EJM/dto"
	"EJM/internal/server"
	"EJM/pkg/repository"
	"EJM/pkg/services"
	"EJM/utils"
	"errors"
	"net/http"
	"strconv"

	// "github.com/nicksnyder/go-i18n/v2/i18n"
	"gorm.io/gorm"

	"github.com/labstack/echo/v4"
)

type MappingBinCardController struct {
	db                 *gorm.DB
	server             server.IServerInterface
	mappingBinCardService *services.MappingBinCardService
}

func NewMappingBinCardController(srv *server.Server) *MappingBinCardController {
	db := srv.DB
	return &MappingBinCardController{
		server: srv,
		db:     db,
		mappingBinCardService: services.NewMappingBinCardService(&services.MappingBinCardService{
			MappingBinCardRepository: repository.NewMappingBinCardRepository(srv.DB),
		})}
}

// Daftar Mapping BinCard Baru
// @Summary API untuk Membuat Mapping BinCard Baru
// @Tags    Mapping BinCards
// @Accept  json
// @Produce json
// @Param   mappingBinCard body     dto.CreateNewMappingBinCard true "Daftar Mapping BinCard Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /mappingBinCards/create [post]
func (mappingBinCardController *MappingBinCardController) CreateMappingBinCard(c echo.Context) error {
	req := new(dto.CreateNewMappingBinCard)
	if err := c.Bind(req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Gagal melakukan binding data")
	}

	if err := c.Validate(req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Validasi gagal")
	}

	data, err := mappingBinCardController.mappingBinCardService.CreateMappingBinCard(req)
	if err != nil {
		if errors.Is(err, utils.ErrDefinitionAlreadyExists) {
			res := utils.Response{
				Data:       nil,
				Message:    "Definition Already Exist",
				StatusCode: 404,
			}
			return res.ReturnSingleMessage(c)
		}

		return err
	}

	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Insert data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Ambil Daftar Mapping BinCard
// @Summary API untuk Ambil semua daftar mapping BinCard
// @Tags    Mapping BinCards
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
// @Router  /mappingBinCards [get]
func (mappingBinCardController *MappingBinCardController) FindMappingBinCards(c echo.Context) error {
	req := new(dto.GetMappingBinCards)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	data, meta, err := mappingBinCardController.mappingBinCardService.FindMappingBinCards(req)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "mapping_bin_cards",
		Meta: meta,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data mapping BinCards",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)

}

// Update Mapping BinCard
// @Summary API untuk Update Data Mapping BinCard
// @Tags    Mapping BinCards
// @Accept  json
// @Produce json
// @Param   id   path     int               true "BinCard ID"
// @Param   mappingBinCard body     dto.CreateNewMappingBinCard true "Update Mapping BinCard Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /mappingBinCards/{id} [put]
func (mappingBinCardController *MappingBinCardController) UpdateMappingBinCard(c echo.Context) error {
	req := new(dto.UpdateMappingBinCard)
	id, errConvert := strconv.Atoi(c.Param("id"))
	if errConvert != nil {
		return errConvert
	}
	req.ID = uint(id)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	// Cek apakah ID tersedia dalam database
	_, errFind := mappingBinCardController.mappingBinCardService.FindMappingBinCardById(uint(id))
	if errFind != nil {
		if errors.Is(errFind, utils.ErrMappingBinCardNotFound) {
			res := utils.Response{
				Data:       nil,
				Message:    "Data Not Found",
				StatusCode: 404,
			}

			return res.ReturnSingleMessage(c)
		}
		return errFind
	}

	err := mappingBinCardController.mappingBinCardService.UpdateMappingBinCard(uint(id), req)
	if err != nil {
		return err
	}

	res := utils.Response{
		Data:       nil,
		Message:    "Berhasil Update data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Mapping BinCard
// @Summary API untuk Delete Mapping BinCard
// @Tags    Mapping BinCards
// @Accept  json
// @Produce json
// @Param   id  path     int true "BinCard ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /mappingBinCards/{id} [delete]
func (mappingBinCardController *MappingBinCardController) DeleteMappingBinCard(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	// mappingBinCardRepo := mappingBinCardController.mappingBinCardService.RegisterRepository

	// mappingBinCardRepo.Begin(mappingBinCardController.db)

	err = mappingBinCardController.mappingBinCardService.DeleteMappingBinCard(uint(id))
	if err != nil {
		if errors.Is(err, utils.ErrMappingBinCardNotFound) {
			res := utils.Response{
				Data:       nil,
				Message:    "Data Not Found",
				StatusCode: 404,
			}

			return res.ReturnSingleMessage(c)
		}
		return err
	}

	// mappingBinCardRepo.Commit()

	res := utils.Response{
		Data:       nil,
		Message:    "Berhasil Hapus Data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Mapping BinCard Bulk
// @Summary API untuk Delete Mapping BinCard Bulk
// @Tags    Mapping BinCards
// @Accept  json
// @Produce json
// @Param   mapping_BinCard_ids body     dto.DeleteMappingBinCardBulk true "Delete Mapping BinCard Bulk"
// @Success 201      {object} utils.Response
// @Failure 400      {object} middlewares.ResponseError
// @Failure 401      {object} middlewares.ResponseError
// @Failure 404      {object} middlewares.ResponseError
// @Failure 500      {object} middlewares.ResponseError
// @Router  /mappingBinCards [delete]
func (mappingBinCardController *MappingBinCardController) DeleteMappingBinCardBulk(c echo.Context) error {
	req := new(dto.DeleteMappingBinCardBulk)
	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	// mappingBinCardRepo := mappingBinCardController.mappingBinCardService.RegisterRepository

	// mappingBinCardRepo.Begin(mappingBinCardController.db)

	for _, id := range req.Ids {
		err := mappingBinCardController.mappingBinCardService.DeleteMappingBinCard(uint(id))
		if err != nil {
			if errors.Is(err, utils.ErrMappingBinCardNotFound) {
				res := utils.Response{
					Data:       nil,
					Message:    "Data Not Found",
					StatusCode: 404,
				}

				return res.ReturnSingleMessage(c)
			}
				return err
		}
	}

	// mappingBinCardRepo.Commit()

	res := utils.Response{
		Data:       nil,
		Message:    "Berhasil Hapus Data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Find Mapping BinCard Berdasarkan ID
// @Summary API untuk Find Mapping BinCard By ID
// @Tags    Mapping BinCard
// @Accept  json
// @Produce json
// @Param   id  path     string true "BinCard ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /mappingBinCards/{id} [GET]

func (mappingBinCardController *MappingBinCardController) FindMappingBinCardById(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		return err
	}

	data, err := mappingBinCardController.mappingBinCardService.FindMappingBinCardById(uint(id))
	if err != nil {
		if errors.Is(err, utils.ErrMappingBinCardNotFound) {
			res := utils.Response{
				Data:       nil,
				Message:    "Data Not Found",
				StatusCode: 404,
			}

			return res.ReturnSingleMessage(c)
		}
		return err
	}
	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Get Data Mapping BinCard",
		StatusCode: 200,
	}

	return res.ReturnSingleMessage(c)
}
