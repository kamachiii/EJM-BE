package services

import (
	"TKD/dto"
	"TKD/pkg/models"
	"TKD/pkg/repository"
	"TKD/utils"
	"errors"
	"strconv"

	"gorm.io/gorm"
)

type RoleService struct {
	*gorm.DB
	RoleRepository   repository.RoleRepository
	MenuRepository   repository.MenuRepository
}

func NewRoleService(service *RoleService) *RoleService {
	return service
}

func (role *RoleService) CreateRole(roleDto *dto.CreateRole, userLoginID uint) (models.Role, error) {
	var roles repository.RoleRepository
	roles = role.RoleRepository

	// check role exist in database
	roleIsExist := roles.FindRoleByName(roleDto.Name)

	if roleIsExist != nil {
		return models.Role{}, roleIsExist
	}

	data, err := roles.CreateRole(roleDto)
	if err != nil {
		return models.Role{}, err
	}

	return data, nil
}

func (role *RoleService) FindRoleById(id uint) (models.Role, error) {
	var roles repository.RoleRepository
	roles = role.RoleRepository
	data, err := roles.FindRoleById(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.Role{}, utils.ErrRoleNotExists
		} else {
			return models.Role{}, err
		}
	}

	return data, nil
}

// delete role
func (role *RoleService) DeleteRole(roleId uint) error {
	var roleRepo repository.RoleRepository
	roleRepo = role.RoleRepository

	var casbinRepository repository.CasbinRepository
	casbinRepository = role.CasbinRepository

	if roleId == utils.DEFAULT_ROLE {
		return utils.ErrRoleCannotDeleted
	}

	// check if role exist
	_, err := roleRepo.FindRoleById(roleId)

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return utils.ErrRoleNotExists
		} else {
			return err
		}
	}

	// clean up casbin
	errDeleteRole := casbinRepository.DeleteRuleByRoleId(roleId)
	if errDeleteRole != nil {
		return errDeleteRole
	}

	// clean roles_menus
	errDeleteMenus := roleRepo.DeleteMenusByRole(roleId)
	if errDeleteMenus != nil {
		return errDeleteMenus
	}

	// delete Role By Id
	return roleRepo.DeleteRole(roleId)
}

func (role *RoleService) FindRoles(getRoles *dto.GetRoles) ([]models.Role, *models.Paginate, error) {
	pagination := models.Paginate{
		Page:     getRoles.Page,
		PageSize: getRoles.PageSize,
	}
	var roles repository.RoleRepository
	roles = role.RoleRepository
	data, meta, err := roles.FindRoles(&pagination, getRoles.Search, getRoles.UsingActive, getRoles.Value)
	if err != nil {
		return []models.Role{}, meta, err
	}
	return data, meta, nil
}

func (roleService *RoleService) UpdateRole(role *dto.UpdateRole, userID uint) error {
	var roleRepo repository.RoleRepository
	roleRepo = roleService.RoleRepository

	_, err := roleRepo.FindRoleById(role.ID)

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return utils.ErrRoleNotExists
		} else {
			return err
		}
	}

	_, errUpdateRole := roleRepo.UpdateRole(role)
	if errUpdateRole != nil {
		return errUpdateRole
	}

	return nil
}

// Update Akses Role
func (roleservice *RoleService) UpdateAccessRole(accessRole *dto.SetAccessRole) error {
	return roleservice.SetAccessRole(accessRole)
}

// Set akses role
func (roleServices *RoleService) SetAccessRole(accessRole *dto.SetAccessRole) error {
	roleId := accessRole.RoleId
	var menuIds []uint
	var apiIds []uint

	var roleRepository repository.RoleRepository
	roleRepository = roleServices.RoleRepository

	var actionRepository repository.ActionRepository
	actionRepository = roleServices.ActionRepository

	var casbinRepository repository.CasbinRepository
	casbinRepository = roleServices.CasbinRepository

	// di pecah dari dto
	for _, access := range accessRole.Actions {
		menuIds = append(menuIds, access.MenuId)
		if len(access.APIId) > 0 {
			for _, apiId := range access.APIId {
				apiIds = append(apiIds, apiId)
			}
		}
	}

	// cari rolenya dulu
	_, err := roleRepository.FindRoleById(roleId)
	if err != nil {
		return utils.ErrRoleNotExists
	}

	// insert ke roles_menus
	errRolesMenus := roleRepository.SetAccessRole(roleId, menuIds)
	if errRolesMenus != nil {
		return errRolesMenus
	}

	// cari action api nya, trus masukin ke casbin_rules
	actions := actionRepository.GetActionById(apiIds)

	// delete rule yang ada
	errDeleteRule := casbinRepository.DeleteRuleByRoleId(roleId)
	if errDeleteRule != nil {
		return errors.New("Delete Rule Gagal")
	}

	// insert rule
	if len(actions) > 0 {
		actionDefault := actionRepository.GetActionsDefault()
		for _, actionD := range actionDefault {
			err3 := casbinRepository.CreateRuleAuth(&models.CasbinRule{
				Ptype: "p",
				V0:    strconv.Itoa(int(roleId)),
				V1:    actionD.API,
				V2:    actionD.Method,
			})
			if err3 != nil {
				return err3
			}
		}

		for _, action := range actions {
			_, errCariAPi := casbinRepository.FindRuleByApi(strconv.Itoa(int(roleId)), action.API)
			if errCariAPi != nil && errors.Is(gorm.ErrRecordNotFound, errCariAPi) {
				err2 := casbinRepository.CreateRuleAuth(&models.CasbinRule{
					Ptype: "p",
					V0:    strconv.Itoa(int(roleId)),
					V1:    action.API,
					V2:    action.Method,
				})
				if err2 != nil {
					return err2
				}
			}
		}
	}

	return nil
}

func (roleService *RoleService) DeleteAccessRole(roleId uint, menuId uint) error {
	var roleRepository repository.RoleRepository
	roleRepository = roleService.RoleRepository

	var casbinRepository repository.CasbinRepository
	casbinRepository = roleService.CasbinRepository

	// cari rolenya dulu
	_, err := roleRepository.FindRoleById(roleId)
	if err != nil {
		return utils.ErrRoleNotExists
	}

	// delete rule yang ada
	errDeleteRule := casbinRepository.DeleteRuleByRoleId(roleId)
	if errDeleteRule != nil {
		return errors.New("Delete Rule Gagal")
	}

	errDeleteAccessRole := roleRepository.DeleteAccessRole(roleId, menuId)

	if errDeleteAccessRole != nil {
		return errors.New("Delete Access Role Gagal")
	}

	return nil
}

func (roleService *RoleService) GetAccessRole(roleId uint) ([]models.RolesMenus, error) {
	var roleMenuRepo repository.RoleRepository
	roleMenuRepo = roleService.RoleRepository

	data, err := roleMenuRepo.GetAccessRole(roleId)

	if err != nil {
		return []models.RolesMenus{}, err
	}

	return data, nil
}
