package models

import (
	"gorm.io/gorm"
	"math"
	"strconv"
)

type Paginate struct {
	Page      string `json:"page"`
	PageSize  string `json:"page_size"`
	Total     int64  `json:"total"`
	PageCount int    `json:"page_count"`
}

func (paginate *Paginate) Pagination() func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		page, _ := strconv.Atoi(paginate.Page)
		if page == 0 {
			page = 1
		}

		pageSize, _ := strconv.Atoi(paginate.PageSize)
		switch {
		case pageSize > 100:
			pageSize = 100
		case pageSize <= 0:
			pageSize = 10
		}

		offset := (page - 1) * pageSize
		paginate.PageCount = int(math.Ceil(float64(paginate.Total) / float64(pageSize)))

		return db.Offset(offset).Limit(pageSize)
	}
}
