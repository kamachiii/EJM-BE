package repository

import (
	"TKD/dto"
	"TKD/pkg/models"
	"strings"

	"gorm.io/gorm"
)

type MenuRepository interface {
	TransactionRepository
	FindAll() ([]models.Menu, error)
	FindAllPaginated(pagination *models.Paginate, search, value string) ([]dto.ResponseMenu, *models.Paginate, error)
	FindMenuById(id uint) (models.Menu, error)
	CreateMenu(menu *dto.CreateMenu) (models.Menu, error)
	DeleteById(id uint) error
	DeleteAllActionsMenus(menuId uint) error
	CreateActionsMenus(dto models.ActionsMenus) error
	UpdateMenu(id uint, data models.Menu) error
}

type Menu struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func NewMenuRepository(db *gorm.DB) *Menu {
	return &Menu{db: db, db2: db}
}

func (menuObject *Menu) Begin(tx *gorm.DB) {
	menuObject.db = tx.Begin()
}

func (menuObject *Menu) Rollback() {
	menuObject.db.Rollback()

	// after commit transaction, we have to rollback transaction
	menuObject.db = menuObject.db2
}

func (menuObject *Menu) Commit() {
	menuObject.db.Commit()

	// after commit transaction, we have to rollback transaction
	menuObject.db = menuObject.db2
}

func (menuObject *Menu) MenuModel() (tx *gorm.DB) {
	return menuObject.db.Model(&models.Menu{})
}

func (menuObject *Menu) ActionsMenusModel() (tx *gorm.DB) {
	return menuObject.db.Model(&models.ActionsMenus{})
}

func (menuObject *Menu) DeleteAllActionsMenus(menuId uint) error {
	return menuObject.ActionsMenusModel().Where("menu_id = ?", menuId).Unscoped().Delete(&models.ActionsMenus{}).Error
}

func (menuObject *Menu) CreateActionsMenus(dto models.ActionsMenus) error {
	return menuObject.ActionsMenusModel().Create(&dto).Error
}

func (menuObj *Menu) FindAll() ([]models.Menu, error) {
	var menu []models.Menu
	data := menuObj.MenuModel()

	// cari data
	data.Preload("ActionsMenus.Action").Find(&menu)

	// checking errors
	if err := data.Error; err != nil {
		return []models.Menu{}, err
	}

	return menu, nil
}

func (menuObj *Menu) FindAllPaginated(pagination *models.Paginate, search, value string) ([]dto.ResponseMenu, *models.Paginate, error) {
	var menus []dto.ResponseMenu
	data := menuObj.MenuModel().
		Count(&pagination.Total)

	if search != "" {
		// cari data
		data.Where("lower(menus.name) like ?", "%"+strings.ToLower(search)+"%").Count(&pagination.Total)
	}

	if value != "" {
		data.Order("menus.id = " + value + " desc")
	}

	// cari data
	data.Scopes(pagination.Pagination()).Debug().
		Select("menus.*,(select name from menus m where m.id = menus.parent_id) as parent_name").
		Order("menus.id asc").
		Find(&menus)

	// checking errors
	if err := data.Error; err != nil {
		return []dto.ResponseMenu{}, pagination, err
	}

	return menus, pagination, nil
}

func (menuObject *Menu) CreateMenu(menu *dto.CreateMenu) (models.Menu, error) {
	createMenu := models.Menu{
		Name:     menu.Name,
		ParentId: menu.ParentId,
		Path:     menu.Path,
	}

	if err := menuObject.MenuModel().Create(&createMenu).Error; err != nil {
		return models.Menu{}, err
	}

	return createMenu, nil

}

func (menuObject *Menu) DeleteById(id uint) error {

	return menuObject.MenuModel().Where("id = ?", id).Unscoped().Delete(&models.Menu{}).Error

}

func (menuObject *Menu) FindMenuById(id uint) (models.Menu, error) {

	var result models.Menu

	if err := menuObject.MenuModel().Where("id = ?", id).First(&result).Error; err != nil {
		return models.Menu{}, err
	}

	return result, nil

}

func (menuObject *Menu) UpdateMenu(id uint, data models.Menu) error {

	err := menuObject.MenuModel().Where("id = ?", id).Updates(&data).Error
	if err != nil {
		return err
	}

	return nil

}
