package dto

import "EJM/pkg/models"

type MenuAPI struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	ParentId *uint  `json:"parentId"`
	Path     string `json:"path"`
	Type     string `json:"type"`
}

type IdAndName struct {
	Id   uint   `json:"id"`
	Name string `json:"name"`
}

type ResponseMenu struct {
	models.Menu
	ParentName string `json:"parent_name"`
}
