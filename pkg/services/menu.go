package services

import (
	"EJM/dto"
	"EJM/pkg/models"
	"EJM/pkg/repository"
	"EJM/utils"
	"sync"

	// "EJM/utils"
	"gorm.io/gorm"
)

type IMenuService interface {
	FindAll() ([]dto.MenuAPI, error)
	FindAllPaginated(req *dto.BasePagination) ([]dto.ResponseMenu, *models.Paginate, error)
	FindMenuById(req *dto.GetDetailMenu) (models.Menu, error)
	CreateMenu(request *dto.PayloadCreateMenu) error
	DeleteMenuById(request *dto.DeleteMenu) error
	DeleteMenuBulk(request *dto.DeleteMenuBulk) error
	UpdateMenu(request *dto.UpdateMenu) error
}

type MenuService struct {
	*gorm.DB
	MenuRepository repository.MenuRepository
}

func NewMenuService(menuService *MenuService) *MenuService {
	return menuService
}

func (service *MenuService) FindAll() ([]dto.MenuAPI, error) {
	var menus repository.MenuRepository = service.MenuRepository

	resultMenus, _ := menus.FindAll()

	var results []dto.MenuAPI

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		for _, menu := range resultMenus {
			results = append(results, dto.MenuAPI{
				Id:       menu.ID,
				Name:     menu.Name,
				ParentId: menu.ParentId,
				Path:     menu.Path,
				Type:     "menu",
			})
		}
		wg.Done()
	}()

	go func() {
		for _, menu := range resultMenus {
			if len(menu.ActionsMenus) > 0 {
				for _, action := range menu.ActionsMenus {
					results = append(results, dto.MenuAPI{
						Id:       action.ActionId,
						Name:     action.Action.Name,
						ParentId: &action.MenuId,
						Path:     action.Action.API,
						Type:     "api",
					})
				}

			}
		}
		wg.Done()
	}()
	wg.Wait()

	return results, nil
}

func (service *MenuService) FindAllPaginated(req *dto.BasePagination) ([]dto.ResponseMenu, *models.Paginate, error) {
	pagination := models.Paginate{
		Page:     req.Page,
		PageSize: req.PageSize,
	}
	var menus repository.MenuRepository = service.MenuRepository
	data, meta, err := menus.FindAllPaginated(&pagination, req.Search, req.Value)
	if err != nil {
		return []dto.ResponseMenu{}, meta, err
	}
	return data, meta, nil
}

func (service *MenuService) CreateMenu(request *dto.PayloadCreateMenu) error {
	var menus repository.MenuRepository = service.MenuRepository

	if len(request.Data) < 1 {
		return utils.ErrMenuCannotLessThanOne
	}

	for _, datum := range request.Data {
		_, err := menus.CreateMenu(&datum)
		if err != nil {
			return err
		}
	}

	return nil
}

func (service *MenuService) DeleteMenuById(request *dto.DeleteMenu) error {
	var menus repository.MenuRepository = service.MenuRepository

	return menus.DeleteById(request.Id)
}

func (service *MenuService) FindMenuById(req *dto.GetDetailMenu) (models.Menu, error) {
	var menus repository.MenuRepository = service.MenuRepository

	return menus.FindMenuById(req.Id)
}

func (service *MenuService) UpdateMenu(request *dto.UpdateMenu) error {
	var menus repository.MenuRepository = service.MenuRepository

	if len(request.APIS) > 0 {
		menus.DeleteAllActionsMenus(request.Id)
		for _, api := range request.APIS {
			menus.CreateActionsMenus(models.ActionsMenus{
				MenuId:   request.Id,
				ActionId: api,
			})
		}

	}

	return menus.UpdateMenu(request.Id, models.Menu{
		Name:     request.Name,
		ParentId: request.ParentId,
		Path:     request.Path,
	})
}

func (service *MenuService) DeleteMenuBulk(request *dto.DeleteMenuBulk) error {
	var menus repository.MenuRepository = service.MenuRepository

	if len(request.Ids) < 1 {
		return utils.ErrMenuCannotLessThanOne
	}

	for _, id := range request.Ids {
		if err := menus.DeleteById(id); err != nil {
			return err
		}
	}

	return nil
}
