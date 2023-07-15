package controllers

// import (
// 	"EJM/dto"
// 	"EJM/internal/server"
// 	"EJM/pkg/repository"
// 	"EJM/pkg/services"
// 	"EJM/utils"

// 	"github.com/nicksnyder/go-i18n/v2/i18n"

// 	"github.com/labstack/echo/v4"
// 	"gorm.io/gorm"


// )

// type MappingKeyowrdListController struct {
// 	db *gorm.DB
// 	server server.IServerInterface
// 	mappingKeywordListService *services.MappingKeywordListService
// }

// func NewMappingKeywordListcontroller(srv *server.Server) *MappingKeyowrdListController {
// 	db := srv.DB
// 	return &MappingKeyowrdListController{
// 		server: srv,
// 		db: db,
// 		mappingKeywordListService: services.NewMappingKeywordListService(&services.MappingKeywordListService{
// 			MappingKeywordListRepository: repository.MappingKeywordListRepository(srv.DB),
// 		})}
// }

// // Daftar Mapping Keyword List Baru
// // @Summary API untuk Membuat Mapping Keyword List Baru
// // @Tags    Mapping Keyword List
// // @Accept  json
// // @Produce json
// // @Param   mappingkeywordlist body     dto.CreateMappiingKeywordList true "Daftar Mapping Keyword List Baru"
// // @Success 201  {object} utils.Response
// // @Failure 400  {object} middlewares.ResponseError
// // @Failure 401  {object} middlewares.ResponseError
// // @Failure 404  {object} middlewares.ResponseError
// // @Failure 500  {object} middlewares.ResponseError
// // @Router  /mappingkeywordlist/create [post]
// func (mappingKeywordList *MappingKeyowrdListController) CreateMappingKeywordList(c echo.Context) error {
// 	req := new(dto.CreateMappingkeywordlist)

// 	if err := c.Bind(req); err != nil {
// 		return err
// 	}
// 	if err := c.Validate(req); err != nil{
// 		return err
// 	}

// 	data, err := MappingKeyowrdListController.mappingKeywordListService.CreateMappiingKeywordList(req)
// 	if err != nil {
// 		mappingKeywordList.Rollback()
// 		return err
// 	}

// 	mappingKeywordListRepo.Commit()

// 	res := utils.Response{
// 		Data: data,
// 		Message: "Berhasil membuat keyword",
// 		StatusCode: 201,
// 	}

// 	return res.ReturnSingleMessage(c)
// }