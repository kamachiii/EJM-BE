package utils

import (
	"fmt"

	jwt "github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

type UserRefreshJWTPayload struct {
	ID uint `json:"id"`
	jwt.RegisteredClaims
}

type TokenResult struct {
	Token        string
	RefreshToken string
}

type UserJWTPayload struct {
	ID       uint   `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	RoleID   int    `json:"roleId"`
	RoleName string `json:"roleName"`
	jwt.RegisteredClaims
}

// hashing password
func HashPassword(password string) (string, error) {
	var passwordBytes = []byte(password)
	hashedPasswordBytes, err := bcrypt.
		GenerateFromPassword(passwordBytes, bcrypt.MinCost)

	return string(hashedPasswordBytes), err
}

// do matching password
func DoPasswordMatch(hashedPassword, currPassword string) bool {
	fmt.Println("hashedPassword =====>", hashedPassword)
	fmt.Println("currPassword =====>", currPassword)
	data, _ := HashPassword(currPassword)
	fmt.Println(data)
	err := bcrypt.CompareHashAndPassword(
		[]byte(hashedPassword), []byte(currPassword))
	return err == nil
}

// create token for login and refresh
func CreateToken(jwtClaim *UserJWTPayload, refreshClaims *UserRefreshJWTPayload, key []byte) (TokenResult, error) {
	// Create token with claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwtClaim)

	// Create refresh token with claims
	refresh := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims)

	// Generate encoded token and send it as response.
	t, err := token.SignedString(key)
	r, err2 := refresh.SignedString(key)

	if err != nil {
		return TokenResult{}, err
	}
	if err2 != nil {
		return TokenResult{}, err2
	}

	return TokenResult{Token: t, RefreshToken: r}, nil
}
