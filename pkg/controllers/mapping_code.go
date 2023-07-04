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

type MappingCodeController struct {
	db                 *gorm.DB
	server             server.IServerInterface
	mappingCodeService *services.MappingCodeService
}

func NewMappingCodeController(srv *server.Server) *MappingCodeController {
	db := srv.DB
	return &MappingCodeController{
		server: srv,
		db:     db,
		mappingCodeService: services.NewMappingCodeService(&services.MappingCodeService{
			MappingCodeRepository: repository.NewMappingCodeRepository(srv.DB),
		})}
}



// Daftar Mapping Code Baru
// @Summary API untuk Membuat Mapping Code Baru
// @Tags    Mapping Code
// @Accept  json
// @Produce json
// @Param   mappingcode body     dto.CreateNewMappingCode true "Daftar Mapping Code Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /mappingCode/create [post]
func (mappingCodeController *MappingCodeController) CreateMappingCode(c echo.Context) error {
	req := new(dto.CreateNewMappingCode)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}
	// mappingCodeRepo := mappingCodeController.mappingCodeService.MappingCodeRepository
	// mappingCodeRepo.Begin(mappingCodeController.server.DB)

	var mappingCodeService services.IMappingCodeService
	mappingCodeService = mappingCodeController.mappingCodeService


	data, err := mappingCodeService.CreateMappingCode(req)
	if err != nil {
		// mappingCodeRepo.Rollback()
		return err
	}

	// mappingCodeRepo.Commit()

	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Insert data",
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Ambil Daftar Mapping Code
// @Summary API untuk Ambil semua daftar mapping code
// @Tags    Mapping Code
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
// @Router  /mappingCodes [get]
func (mappingCodeController *MappingCodeController) FindMappingCodes(c echo.Context) error {
	req := new(dto.GetMappingCodes)

	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	data, meta, err := mappingCodeController.mappingCodeService.FindMappingCodes(req)
	if err != nil {
		return err
	}

	res := utils.ResponsePaginate{
		Key:  "mapping_codes",
		Meta: meta,
		Response: utils.Response{
			Data:       data,
			Message:    "Sukses mengambil data mapping codes",
			StatusCode: 200,
		},
	}

	return res.ReturnPaginates(c)

}

// Update Mapping Code
// @Summary API untuk Update Data Mapping Code
// @Tags    Mapping Code
// @Accept  json
// @Produce json
// @Param   id   path     int               true "Code ID"
// @Param   mappingCode body     dto.CreateNewMappingCode true "Update Mapping Code Baru"
// @Success 201  {object} utils.Response
// @Failure 400  {object} middlewares.ResponseError
// @Failure 401  {object} middlewares.ResponseError
// @Failure 404  {object} middlewares.ResponseError
// @Failure 500  {object} middlewares.ResponseError
// @Router  /mappingCode/{id} [put]
func (mappingCodeController *MappingCodeController) UpdateMappingCode(c echo.Context) error {
	req := new(dto.UpdateMappingCode)
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

	file, _ := c.FormFile("file")
	if file != nil {
		// fileName, errUpload := utils.UploadSingleFile(file)
		// if errUpload != nil {
		// 	return errUpload
		// }
		// req.ProfilePict = &fileName
	}

	err := mappingCodeController.mappingCodeService.UpdateMappingCode(uint(id), req)
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

// Delete Mapping Code
// @Summary API untuk Delete Mapping Code
// @Tags    Mapping Code
// @Accept  json
// @Produce json
// @Param   id  path     int true "Code ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /mappingCode/{id} [delete]
func (mappingCodeController *MappingCodeController) DeleteMappingCode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	// mappingCodeRepo := mappingCodeController.mappingCodeService.RegisterRepository

	// mappingCodeRepo.Begin(mappingCodeController.db)

	err := mappingCodeController.mappingCodeService.DeleteMappingCode(uint(id))
	if err != nil {
		// mappingCodeRepo.Rollback()
		return err
	}

	// mappingCodeRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "mappingCode.success.delete",
			Other: "Success Delete Mapping Code",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Delete Mapping Code Bulk
// @Summary API untuk Delete Mapping Code Bulk
// @Tags    Mapping Code
// @Accept  json
// @Produce json
// @Param   mapping_code_ids body     dto.DeleteMappingCodeBulk true "Delete Mapping Code Bulk"
// @Success 201      {object} utils.Response
// @Failure 400      {object} middlewares.ResponseError
// @Failure 401      {object} middlewares.ResponseError
// @Failure 404      {object} middlewares.ResponseError
// @Failure 500      {object} middlewares.ResponseError
// @Router  /mappingCode [delete]
func (mappingCodeController *MappingCodeController) DeleteMappingCodeBulk(c echo.Context) error {
	req := new(dto.DeleteMappingCodeBulk)
	if err := c.Bind(req); err != nil {
		return err
	}
	if err := c.Validate(req); err != nil {
		return err
	}

	// mappingCodeRepo := mappingCodeController.mappingCodeService.RegisterRepository

	// mappingCodeRepo.Begin(mappingCodeController.db)

	for _, id := range req.Ids {
		err := mappingCodeController.mappingCodeService.DeleteMappingCode(uint(id))
		if err != nil {
			// mappingCodeRepo.Rollback()
			return err
		}
	}

	// mappingCodeRepo.Commit()

	res := utils.Response{
		Data: nil,
		Translating: &i18n.Message{
			ID:    "mappingCode.success.delete",
			Other: "Success Delete Mapping Code",
		},
		StatusCode: 201,
	}

	return res.ReturnSingleMessage(c)
}

// Find Mapping Code By ID
// @Summary API untuk Find Mapping Code By ID
// @Tags    Mapping Code
// @Accept  json
// @Produce json
// @Param   id  path     int true "Mapping Code ID"
// @Success 201 {object} utils.Response
// @Failure 400 {object} middlewares.ResponseError
// @Failure 401 {object} middlewares.ResponseError
// @Failure 404 {object} middlewares.ResponseError
// @Failure 500 {object} middlewares.ResponseError
// @Router  /mappingCode/{id} [GET]
func (mappingCodeController *MappingCodeController) FindMappingCodeById(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		return err
	}

	data, errFindMappingCode := mappingCodeController.mappingCodeService.FindMappingCodeById(uint(id))

	if errFindMappingCode != nil {
		return errFindMappingCode
	}

	res := utils.Response{
		Data:       data,
		Message:    "Berhasil Get Data Mapping Code",
		StatusCode: 200,
	}

	return res.ReturnSingleMessage(c)
}

