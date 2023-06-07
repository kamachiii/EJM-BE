package utils

import (
	"strconv"
	"strings"
	"time"
)

func DateToTimestamp(date string) time.Time {
	if date == "" || date == "-" {
		return time.Date(0, time.Month(0), 0, 0, 0, 0, 0, time.UTC)
	}
	splitDate := strings.Split(date, "-")
	year, _ := strconv.Atoi(splitDate[0])
	month, _ := strconv.Atoi(splitDate[1])
	day, _ := strconv.Atoi(splitDate[2])

	var result = time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC)
	return result
}

// example month = January , year = 2022
func MonthYearToTimestamp(day int, month string, year int) time.Time {
	if day == 0 {
		day = 01
	}
	var resMonth = ""
	switch strings.ToLower(month) {
	case "january":
		resMonth = "01"
	case "february":
		resMonth = "02"
	case "march":
		resMonth = "03"
	case "april":
		resMonth = "04"
	case "may":
		resMonth = "05"
	case "june":
		resMonth = "06"
	case "july":
		resMonth = "07"
	case "august":
		resMonth = "08"
	case "september":
		resMonth = "09"
	case "october":
		resMonth = "10"
	case "november":
		resMonth = "11"
	case "december":
		resMonth = "12"
	}

	monthInt, _ := strconv.Atoi(resMonth)

	var result = time.Date(year, time.Month(monthInt), day, 0, 0, 0, 0, time.UTC)
	return result
}

func DayToInt(day string) int {
	var resday = 0
	switch strings.ToLower(day) {
	case "senin":
		resday = 1
	case "monday":
		resday = 1
	case "selasa":
		resday = 2
	case "tuesday":
		resday = 2
	case "rabu":
		resday = 3
	case "wednesday":
		resday = 3
	case "kamis":
		resday = 4
	case "thursday":
		resday = 4
	case "jum'at":
		resday = 5
	case "friday":
		resday = 5
	case "sabtu":
		resday = 6
	case "saturday":
		resday = 6
	case "minggu":
		resday = 7
	case "sunday":
		resday = 7
	}
	return resday
}
