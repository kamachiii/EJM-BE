package utils

import (
	"io"
	"mime/multipart"
	"os"
	"strconv"
	"strings"
)

func UploadExcel(file *multipart.FileHeader) (string, error) {
	if file == nil {
		return "", nil
	}

	// Source
	src, err := file.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()

	// Filter Size
	if file.Size >= 2097152 {
		return "", ErrFileTooLarge
	}

	splitFileType := strings.Split(file.Filename, ".")
	if len(splitFileType) < 2 {
		return "", ErrFileHasNoExtension
	}

	resFileType := strings.ToLower(splitFileType[1])

	checkFileType := resFileType != "xlsx"

	if checkFileType {
		return "", ErrFileExtension
	}

	resGenerateNum, _ := GenerateNumber()
	concacteFilename := strconv.Itoa(resGenerateNum) + "_" + file.Filename

	// Destination
	dst, err := os.Create("public/temp_files/" + concacteFilename)
	if err != nil {
		return "", err
	}
	defer dst.Close()

	// Copy
	if _, err = io.Copy(dst, src); err != nil {
		return "", err
	}

	return concacteFilename, nil
}
