package dto

type BasePagination struct {
	Page        string `json:"page" query:"page" validate:"required"`
	PageSize    string `json:"page_size" query:"page_size" validate:"required"`
	Search      string `json:"search" query:"search"`
	UsingActive bool   `json:"using_active" query:"using_active" form:"using_active"`
	Value       string `json:"value" query:"value"`
}

// --------------------User
type CreateNewUser struct {
	Name     string `json:"name" validate:"required"`
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
	RoleId   uint   `json:"roleId" validate:"required,min=1"`
}

type LoginByPin struct {
	Pin string `json:"pin" validate:"required"`
}

type DeleteUserBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type UpdateUser struct {
	ID uint `params:"id" validate:"required"`
	CreateNewUser
}

type ToggleActive struct {
	ID      uint  `param:"id" validate:"required" swaggerignore:"true"`
	Payload *bool `json:"payload"`
}

type GetUsers struct {
	BasePagination
}

type GetNotification struct {
	BasePagination
	UserId uint `json:"user_id" form:"user_id" validate:"required"`
	Type   uint `json:"type" validate:"required"`
}

type PayloadCreateMenu struct {
	Data []CreateMenu `json:"data" validate:"required,min=1"`
}

type PayloadCreateAction struct {
	Data []CreateAction `json:"data" validate:"required,min=1"`
}

// mapping code
type CreateNewMappingCode struct {
	Code       string `json:"code" form:"code" validate:"required"`
	Definition string `json:"definition" form:"definition" validate:"required"`
	Status     bool `json:"status" validate:"required"`
	Priority   int `json:"priority" form:"priority" validate:"required"`
	// IsActive   bool `json:"isActive" form:"isActive" validate:"required"`
}

type GetMappingCodes struct {
	BasePagination
}

type DeleteMappingCodeBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type UpdateMappingCode struct {
	ID uint `params:"id" validate:"required"`
	CreateNewMappingCode
}
// menu
type CreateMenu struct {
	Name     string `json:"name" validate:"required"`
	Path     string `json:"path" validate:"required"`
	ParentId *uint  `json:"parent_id"`
}

type CreateAction struct {
	Name    string `json:"name" validate:"required"`
	Path    string `json:"path" validate:"required"`
	Method  string `json:"method" validate:"required"`
	Default *bool  `json:"default"`
}

type GetMenu struct {
	Name     string `json:"name" validate:"required"`
	ParentId int    `json:"parent_id" validate:"required"`
	Path     string `json:"path" validate:"required"`
}

type DeleteMenu struct {
	Id uint `param:"id" validate:"required" swaggerignore:"true"`
}

type DeleteAction struct {
	GetDetailAction
}

type GetDetailMenu struct {
	DeleteMenu
}

type GetDetailAction struct {
	Id uint `param:"id" validate:"required" swaggerignore:"true"`
}

type GetActionByMenu struct {
	MenuId uint `param:"menu_id"`
}

type DeleteMenuBulk struct {
	Ids []uint `json:"ids" validate:"required,min=1"`
}

type DeleteActionBulk struct {
	DeleteMenuBulk
}

type UpdateMenu struct {
	GetDetailMenu
	APIS []uint `json:"apis"`
	CreateMenu
}

type UpdateAction struct {
	GetDetailAction
	CreateAction
}

// --------------------Roles
type CreateRole struct {
	Name          string        `json:"name" validate:"required"`
	Active        bool          `json:"active"`
	Actions       []MenusAction `json:"actions" validate:"required"`
	ObjectActions []struct {
		ID       int    `json:"id" validate:"required"`
		Name     string `json:"name" validate:"required"`
		ParentID uint   `json:"parentId"`
		Path     string `json:"path" validate:"required"`
		State    int    `json:"state"`
		Type     string `json:"type" validate:"required"`
	} `json:"object_actions" validate:"required,dive,required"`
}

type DeleteRoleBulk struct {
	RoleIds []uint `json:"role_ids" validate:"required,min=1"`
}

type UpdateRole struct {
	ID uint `params:"id" form:"id" validate:"required"`
	CreateRole
}

type CreateRoleMenu struct {
	ID    uint   `param:"id" form:"id" validate:"required"`
	Menus []uint `json:"list_menu" validate:"required"`
}

type UpdateRoleMenu struct {
	ID    uint   `param:"id" form:"id" validate:"required"`
	Menus []uint `json:"list_menu" validate:"required"`
}

type GetRoles struct {
	BasePagination
}

// --------------------Auth
type RefreshToken struct {
	Token string `json:"refresh_token" validate:"required"`
}

type MenusAction struct {
	MenuId uint `json:"menuId" validate:"required"`
	APIId  []uint
}

type SetAccessRole struct {
	RoleId  uint          `json:"roleId" validate:"required"`
	Actions []MenusAction `json:"actions" validate:"required"`
}

type Login struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
}

type ObjectStructures struct {
	Name     string  `json:"name" validate:"required"`
	Code     *string `json:"structureCode"`
	ParentID string  `json:"parentId"`
	ID       string  `json:"id" validate:"required"`
}