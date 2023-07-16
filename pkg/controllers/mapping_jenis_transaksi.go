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

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

type MJenisTransaksiController struct {
	db                     *gorm.DB
	server                 server.IServerInterface
	mJenisTransaksiService *services.MJenisTransaksiService
}

func NewMJenisTransaksiController(srv *server.Server) *MJenisTransaksiController {
	db := srv.DB
	return &MJenisTransaksiController{
		server: srv,
		db:     db,
		mJenisTransaksiService: services.NewMJenisTransaksiService(&services.MJenisTransaksiService{
			MJenisTransaksiRepository: repository.NewMJenisTransaksiRepository(srv.DB),
		})}
}

// Daftar Jenis Transaksi Baru
// @Summary API untuk Membuat Jenis Transaksi Baru
// @Tags    Jenis Transaksi
// @Accept  json
// @Produce json
// @Param   jenisTransaksi body     dto.CreateNewJenisTransaksi true "Daftar Jenis Transaksi Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /jenisTransaksi/create [post]
func (jenisTransaksiController *MJenisTransaksiController) CreateJenisTransaksi(c echo.Context) error {
	req := new(dto.CreateNewJenisTransaksi)
	if err := c.Bind(req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Gagal melakukan binding data")
	}

	if err := c.Validate(req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Validasi gagal")
	}

	data, err := jenisTransaksiController.mJenisTransaksiService.CreateJenisTransaksi(req)
	if err != nil {
		if errors.Is(err, utils.ErrTransactionTypeAlreadyExists) {
			res := utils.Response{
				Data:       nil,
				Message:    "Transaction Type Already Exist",
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

// Ambil Daftar Jenis Transaksi
// @Summary API untuk Ambil semua daftar Jenis Transaksi
// @Tags    Jenis Transaksi
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
// @Router  /jenisTransaksi [get]
func (jenisTransaksiController *MJenisTransaksiController) FindJenisTransaksi(c echo.Context) error {
	req := new(dto.GetJenisTransaksi)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	data, meta, err := jenisTransaksiController.mJenisTransaksiService.FindJenisTransaksi(req)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "jenis_transaksi",
		Meta: meta,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data mapping jenis transaksi",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)
}

// Update Jenis Transaksi
// @Summary API untuk Update Data Jenis Transaksi
// @Tags    Jenis Transaksi
// @Accept  json
// @Produce json
// @Param   id   path     int               true "ID"
// @Param   jenisTransaksi body     dto.CreateNewJenisTransaksi true "Update Jenis Transaksi Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /jenisTransaksi/{id} [put]
func (jenisTransaksiController *MJenisTransaksiController) UpdateJenisTransaksi(c echo.Context) error {
	req := new(dto.UpdateJenisTransaksi)
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
	_, errFind := jenisTransaksiController.mJenisTransaksiService.FindJenisTransaksiById(uint(id))
	if errFind != nil {
		if errors.Is(errFind, utils.ErrJenisTransaksiNotFound) {
			res := utils.Response{
				Data:       nil,
				Message:    "Data Not Found",
				StatusCode: 404,
			}

			return res.ReturnSingleMessage(c)
		}
		return errFind
	}

	err := jenisTransaksiController.mJenisTransaksiService.UpdateJenisTransaksi(uint(id), req)
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

// Delete Jenis Transaksi
// @Summary API untuk Delete Jenis Transaksi
// @Tags    Jenis Transaksi
// @Accept  json
// @Produce json
// @Param   id  path     int true "ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /jenisTransaksi/{id} [delete]
func (jenisTransaksiController *MJenisTransaksiController) DeleteJenisTransaksi(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	// mappingCodeRepo := mappingCodeController.mappingCodeService.RegisterRepository

	// mappingCodeRepo.Begin(mappingCodeController.db)

	err = jenisTransaksiController.mJenisTransaksiService.DeleteJenisTransaksi(uint(id))
	if err != nil {
		if errors.Is(err, utils.ErrJenisTransaksiNotFound) {
			res := utils.Response{
				Data:       nil,
				Message:    "Data Not Found",
				StatusCode: 404,
			}

			return res.ReturnSingleMessage(c)
		}
		return err
	}

	// mappingCodeRepo.Commit()

	res := utils.Response{
		Data:       nil,
		Message:    "Berhasil Hapus Data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Find Jenis Transaksi Berdasarkan ID
// @Summary API untuk Find Jenis Transaksi By ID
// @Tags    Jenis Transaksi
// @Accept  json
// @Produce json
// @Param   id  path     string true "ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /jenisTransaksi/{id} [GET]
func (jenisTransaksiController *MJenisTransaksiController) FindJenisTransaksiById(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		return err
	}

	data, err := jenisTransaksiController.mJenisTransaksiService.FindJenisTransaksiById(uint(id))
	if err != nil {
		if errors.Is(err, utils.ErrJenisTransaksiNotFound) {
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
		Message:    "Berhasil Get Data Mapping Code",
		StatusCode: 200,
	}

	return res.ReturnSingleMessage(c)
}
