package services

import (
	"EJM/config"
	"EJM/dto"
	"EJM/pkg/models"
	"EJM/pkg/repository"
	"EJM/utils"
	"errors"
	jwt "github.com/golang-jwt/jwt/v4"
	"time"
)

type IAuthService interface {
	LoginUser(login *dto.Login) (LoginResponse, error)
	LoginByPin(login *dto.LoginByPin) (LoginResponse, error)
	RefreshToken(tokenString string) (LoginResponse, error)
	Session(userId uint, token string) (models.User, error)
	Logout(tokenString string) error
}

type AuthService struct {
	RegisterRepository repository.UserRepository
	RoleRepository     repository.RoleRepository
	JWTWhitelist repository.JWTWhitelistRepository
	Config       *config.Config
}

type LoginResponse struct {
	Token        string `json:"token"`
	RefreshToken string `json:"refresh_token"`
}

func NewAuthService(loginService *AuthService) *AuthService {
	return loginService
}

// data session
func (authService *AuthService) Session(userId uint, token string) (models.User, error) {
	var (
		userServiceRepo  = authService.RegisterRepository
		jwtWhitelistRepo = authService.JWTWhitelist
	)

	if errCheckToken := jwtWhitelistRepo.CheckToken(token, utils.ACCESS_TOKEN); errCheckToken != nil {
		return models.User{}, errCheckToken
	}

	user, err := userServiceRepo.FindFirst(userId)
	if err != nil {
		return models.User{}, err
	}

	if !*user.IsActive {
		return models.User{}, utils.ErrTokenInvalid
	}

	return user, nil
}

func (authService AuthService) LoginByPin(login *dto.LoginByPin) (LoginResponse, error) {
	key := []byte(authService.Config.Auth.JWTKey)
	var loginServiceRepo repository.UserRepository
	loginServiceRepo = authService.RegisterRepository
	jwtExpired := authService.Config.Auth.JWTExpired

	var jwtRepo repository.JWTWhitelistRepository
	jwtRepo = authService.JWTWhitelist

	//find username first
	data, err := loginServiceRepo.FindUserByPin(login.Pin)
	if err != nil {
		return LoginResponse{}, utils.ErrCredentialInvalid
	}

	if !*data.IsActive {
		return LoginResponse{}, utils.ErrCredentialInvalid
	}

	// assign jwt payload
	claims := &utils.UserJWTPayload{
		ID:       data.ID,
		RoleID:   int(data.RoleId),
		RoleName: data.Role.Name,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired) * time.Minute)),
		},
	}

	// asign refresh payload
	refreshClaims := &utils.UserRefreshJWTPayload{
		ID: data.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired+60) * time.Minute)),
		},
	}

	tokens, tokenErr := utils.CreateToken(claims, refreshClaims, key)
	if tokenErr != nil {
		return LoginResponse{}, tokenErr
	}

	if errAddToken := jwtRepo.AddToken(tokens.Token, tokens.RefreshToken); errAddToken != nil {
		return LoginResponse{}, errAddToken
	}

	return LoginResponse{
		Token:        tokens.Token,
		RefreshToken: tokens.RefreshToken,
	}, nil
}

// login user
func (authService AuthService) LoginUser(login *dto.Login) (LoginResponse, error) {
	key := []byte(authService.Config.Auth.JWTKey)
	var loginServiceRepo = authService.RegisterRepository
	jwtExpired := authService.Config.Auth.JWTExpired

	var jwtRepo = authService.JWTWhitelist

	user, err := loginServiceRepo.FindByUsername(login.Username)
	if err != nil {
		return LoginResponse{}, utils.ErrCredentialInvalid
	}

	isPasswordMatch := utils.DoPasswordMatch(user.Password, login.Password)
	if !isPasswordMatch {
		return LoginResponse{}, utils.ErrCredentialInvalid
	}

	if !*user.IsActive {
		return LoginResponse{}, utils.ErrCredentialInvalid
	}

	accessClaims := &utils.UserJWTPayload{
		ID:       user.ID,
		RoleID:   int(user.RoleId),
		RoleName: user.Role.Name,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired) * time.Minute)),
		},
	}

	refreshClaims := &utils.UserRefreshJWTPayload{
		ID: user.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired+60) * time.Minute)),
		},
	}

	userAccess, errCreateToken := utils.CreateToken(accessClaims, refreshClaims, key)
	if errCreateToken != nil {
		return LoginResponse{}, errCreateToken
	}

	if errAddToken := jwtRepo.AddToken(userAccess.Token, userAccess.RefreshToken); errAddToken != nil {
		return LoginResponse{}, errAddToken
	}

	return LoginResponse{
		Token:        userAccess.Token,
		RefreshToken: userAccess.RefreshToken,
	}, nil
}

// logout
func (authService AuthService) Logout(tokenString string) error {
	var jwtWhitelistRepo = authService.JWTWhitelist

	if errDeleteToken := jwtWhitelistRepo.DeleteToken(tokenString); errDeleteToken != nil {
		return errDeleteToken
	}

	return nil
}

func (authService AuthService) parseToken(key []byte, token string) (*jwt.Token, error) {
	// parse token
	parsed, err := jwt.ParseWithClaims(token, &utils.UserRefreshJWTPayload{}, func(token *jwt.Token) (interface{}, error) {
		return key, nil
	})

	if err != nil {
		if errors.Is(err, jwt.ErrTokenExpired) {
			// return &jwt.Token{}, utils.ErrTokenInvalid
		} else {
			return &jwt.Token{}, err
		}
	}

	return parsed, nil
}

// refresh token
func (authService AuthService) RefreshToken(tokenString string) (LoginResponse, error) {
	var (
		key        = []byte(authService.Config.Auth.JWTKey)
		jwtExpired = authService.Config.Auth.JWTExpired
	)

	var loginServiceRepo = authService.RegisterRepository
	var jwtRepo = authService.JWTWhitelist

	errCheckRefreshToken := jwtRepo.CheckToken(tokenString, utils.REFRESH_TOKEN)
	if errCheckRefreshToken != nil {
		return LoginResponse{}, errCheckRefreshToken
	}

	parsedToken, errParsing := authService.parseToken(key, tokenString)
	if errParsing != nil {
		return LoginResponse{}, errParsing
	}

	if !parsedToken.Valid {
		// return LoginResponse{}, utils.ErrTokenInvalid
	}

	// get data by token user ID
	user := parsedToken.Claims.(*utils.UserRefreshJWTPayload)

	data, err2 := loginServiceRepo.FindFirst(user.ID)
	if err2 != nil {
		return LoginResponse{}, err2
	}

	// assign jwt payload
	claims := &utils.UserJWTPayload{
		ID:       data.ID,
		RoleID:   int(data.RoleId),
		RoleName: data.Role.Name,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired) * time.Minute)),
		},
	}

	// asign refresh payload
	refreshClaims := &utils.UserRefreshJWTPayload{
		ID: data.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(jwtExpired+60) * time.Minute)),
		},
	}

	tokens, tokenErr := utils.CreateToken(claims, refreshClaims, key)
	if tokenErr != nil {
		return LoginResponse{}, tokenErr
	}

	if errDeleteToken := jwtRepo.UpdateToken(tokens.Token, tokens.RefreshToken, tokenString); errDeleteToken != nil {
		return LoginResponse{}, errDeleteToken
	}

	return LoginResponse{
		Token:        tokens.Token,
		RefreshToken: tokens.RefreshToken,
	}, nil
}
