package routes

import (
	"EJM/config"
	"EJM/internal/middlewares"
	"EJM/internal/request_logger"
	"EJM/internal/server"
	"EJM/pkg/controllers"
	"EJM/utils"
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/go-playground/validator/v10"
	casbin_mw "github.com/labstack/echo-contrib/casbin"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/sirupsen/logrus"
)

func InitializeRoute(server *server.Server, cfg *config.Config) {
	// controller
	// notificationContoller := controllers.NewNotificationController(server)
	userController := controllers.NewUserController(server)
	roleController := controllers.NewRoleController(server)
	authController := controllers.NewAuthController(server)
	mappingCodeController := controllers.NewMappingCodeController(server)

	// assignedTaskController := controllers.NewAssignedTaskController(server)
	menuController := controllers.NewMenuController(server)
	// companyController := controllers.NewCompanyController(server)
	// questionController := controllers.NewQuestionController(server)
	actionController := controllers.NewActionController(server)
	// masterLookupController := controllers.NewMasterLookupController(server)
	// projectController := controllers.NewProjectController(server)
	// reportController := controllers.NewReportController(server)
	// inventoryController := controllers.NewInventoryController(server)
	// volumeController := controllers.NewVolumeController(server)

	// middleware
	server.Echo.Validator = &middlewares.CustomValidator{
		Validator: validator.New(),
	}

	// Logger
	request_logger.Logger().SetOutput(os.Stdout)
	request_logger.Logger().SetFormatter(&logrus.TextFormatter{
		TimestampFormat: time.RFC3339,
		ForceColors:     true,
	})
	server.Echo.Logger = request_logger.Logger()
	server.Echo.Use(middlewares.LoggerLogrus())

	server.Echo.HTTPErrorHandler = middlewares.HttpErrorHandler(server.Config)
	server.Echo.Use(middleware.RequestID())
	server.Echo.Use(middlewares.ContextDB(server.DB))
	server.Echo.Use(middleware.Gzip())
	server.Echo.Use(middleware.Recover())
	// server.Echo.Use(middlewares.I18n())
	server.Echo.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"*"},
		AllowCredentials: true,
		ExposeHeaders:    []string{"Content-Disposition"},
		AllowHeaders: []string{
			echo.HeaderOrigin,
			echo.HeaderAuthorization,
			echo.HeaderContentType,
			"module",
			"Content-Range",
			"Accept-Language",
		},
	}))

	prefix := server.Echo.Group(fmt.Sprintf("/api/v%s", server.Config.App.Version))

	if server.Config.App.Env == "development" {
		prefix.GET("/test-queue", func(c echo.Context) error {
			data, _ := json.Marshal(map[string]interface{}{
				"project_id": 11,
				"user_id":    3,
				"volume_id":  nil,
			})

			err := server.Queue.VolumeAttachment.Publish(string(data))
			if err != nil {
				return c.String(400, err.Error())
			}

			return c.String(200, fmt.Sprintf("Job Queue Sent %s", string(data)))
		})
	}

	prefix.Static("/profiles", "assets/profiles")
	prefix.Static("/reports", "assets/reports")
	prefix.Static("/assets/volumes", "assets/volumes")

	/**
	Public Route
	*/

			// actions
			actionRoutes := prefix.Group("/actions")
			{
				actionRoutes.GET("/:id", actionController.FindDetailAction)
				actionRoutes.PUT("/:id", actionController.UpdateAction)
				actionRoutes.DELETE("/:id", actionController.DeleteAction)
				actionRoutes.DELETE("/bulk", actionController.DeleteActionBulk)
				actionRoutes.GET("/paginated", actionController.GetAllPaginated)
				actionRoutes.GET("/menu/:menu_id", actionController.FindActionByMenu)
				actionRoutes.POST("/create-bulk", actionController.CreateActionBulk)
			}
	
			// Role
			roleRoutes := prefix.Group("/roles")
			{
				roleRoutes.POST("", roleController.CreateRole)
				roleRoutes.GET("", roleController.GetRoles)
				roleRoutes.DELETE("/delete/:roleId", roleController.DeleteRole)
				roleRoutes.DELETE("/delete-bulk", roleController.DeleteRoleBulk)
				roleRoutes.PATCH("/:id", roleController.UpdateRole)
				roleRoutes.GET("/:id", roleController.FindRoleById)
	
				roleRoutes.GET("/access-role", roleController.GetAccessRole)
				roleRoutes.POST("/set-access-role", roleController.SetAccessRole)
				roleRoutes.DELETE("/delete-access-role", roleController.DeleteAccessRole)
			}
		// User
		userRoutes := prefix.Group("/users")
		{
			userRoutes.POST("/register", userController.RegisterUser)
			userRoutes.GET("", userController.FindUsers)
			userRoutes.PUT("/status/:id", userController.ToggleActiveNonActive)
			userRoutes.PUT("/:id", userController.UpdateUser)
			userRoutes.GET("/:id", userController.FindUserById)
			userRoutes.DELETE("/:id", userController.DeleteUser)
			userRoutes.DELETE("", userController.DeleteUserBulk)
		}

	authRoutes := prefix.Group("/auth")
	{
		authRoutes.POST("/login", authController.LoginUser)
		authRoutes.POST("/oauth/login", authController.OauthLogin)
		authRoutes.POST("/refresh-token", authController.RefreshToken)
		authRoutes.POST("/register", userController.RegisterUser)
		authRoutes.Use(middleware.JWTWithConfig(middleware.JWTConfig{
			SigningKey:  []byte(cfg.Auth.JWTKey),
			Claims:      &utils.UserJWTPayload{},
			TokenLookup: "header:Authorization,cookie:Token",
		}))
		{
			authRoutes.POST("/logout", authController.Logout)
		}
	}

	/**
	Protected Route
	*/
	// authorization middleware
	prefix.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:  []byte(cfg.Auth.JWTKey),
		Claims:      &utils.UserJWTPayload{},
		TokenLookup: "header:Authorization,cookie:Token",
	}))
	{
		prefix.GET("/session", authController.Session)

		prefix.Use(casbin_mw.MiddlewareWithConfig(casbin_mw.Config{
			Enforcer: server.Casbin,
			UserGetter: func(c echo.Context) (string, error) {
				return strconv.Itoa(utils.User(c).RoleID), nil
			},
			ErrorHandler: func(c echo.Context, internal error, proposedStatus int) error {
				// return utils.ErrUnauthorizedRole
				return nil
			},
		}))



		//Mapping Code
		mappingCodeRoutes := prefix.Group("/mappingCodes")
		{
			mappingCodeRoutes.GET("", mappingCodeController.FindMappingCodes)
			mappingCodeRoutes.GET("/:id", mappingCodeController.FindMappingCodeById)
			mappingCodeRoutes.POST("/create", mappingCodeController.CreateMappingCode)
			mappingCodeRoutes.PUT("/:id", mappingCodeController.UpdateMappingCode)
			mappingCodeRoutes.DELETE("/:id", mappingCodeController.DeleteMappingCode)
			// mappingCodeRoutes.DELETE("", mappingCodeController.DeleteMappingCodeBulk)
		}

		// Notification
		// notificationRoutes := prefix.Group("/notification")
		// {
		// 	notificationRoutes.GET("", notificationContoller.GetAllNotification)
		// 	notificationRoutes.PATCH("/read/:id", notificationContoller.ReadNotification)
		// 	notificationRoutes.DELETE("/delete/:id", notificationContoller.DeleteNotification)
		// }

		// menus
		menuRoutes := prefix.Group("/menus")
		{
			menuRoutes.GET("", menuController.GetAll)
			menuRoutes.GET("/:id", menuController.FindDetailMenu)
			menuRoutes.PUT("/:id", menuController.UpdateMenu)
			menuRoutes.DELETE("/:id", menuController.DeleteMenu)
			menuRoutes.DELETE("/bulk", menuController.DeleteMenuBulk)
			menuRoutes.GET("/paginated", menuController.GetAllPaginated)
			menuRoutes.POST("/create-bulk", menuController.CreateMenuBulk)
		}



		// company
		// companyRoutes := prefix.Group("/company")
		// {
		// 	companyRoutes.POST("", companyController.CreateCompany)
		// 	companyRoutes.GET("", companyController.FindCompanies)
		// 	companyRoutes.DELETE("/:companyId", companyController.DeleteCompany)
		// 	companyRoutes.DELETE("/bulk", companyController.DeleteCompanyBulk)
		// 	companyRoutes.GET("/:companyId", companyController.FindCompany)
		// 	companyRoutes.PUT("/:companyId", companyController.UpdateCompany)
		// }

		// questions
		// questionRoutes := prefix.Group("/questions")
		// {
		// 	questionRoutes.POST("/create", questionController.CreateQuestionsWithTemplate)
		// 	questionRoutes.POST("/create/:templateId", questionController.CreateQuestion)
		// 	questionRoutes.GET("", questionController.FindQuestionTemplates)
		// 	questionRoutes.PUT("/by-template/:templateId", questionController.UpdateQuestionTemplateName)
		// 	questionRoutes.PUT("/by-question/:questionId", questionController.UpdateSingleQuestion)
		// 	questionRoutes.DELETE("/by-template/:templateId", questionController.DeleteQuestionTemplate)
		// 	questionRoutes.DELETE("/by-question/:questionId", questionController.DeleteQuestionById)
		// 	questionRoutes.GET("/by-template/:templateId", questionController.FindDetailQuestionTemplate)
		// 	questionRoutes.GET("/by-question/:questionId", questionController.FindDetailQuestion)
		// 	questionRoutes.GET("/table/:templateId", questionController.FindAllQuestionsByTemplateId)
		// }

		// lookup
		// masterLookupRoutes := prefix.Group("/master-lookup")
		// {
		// 	masterLookupRoutes.GET("", masterLookupController.FindLookups)
		// }

		// projects
		// projectRoutes := prefix.Group("/projects")
		// {
		// projectRoutes.GET("/logs/:project_id", projectController.FindLogByProject)
		// projectRoutes.GET("/stats", projectController.StatProject)
		// projectRoutes.PUT("/create-structure-for-project", projectController.CreateStructureForProject)
		// projectRoutes.GET("/logs-by-user/:user_id", projectController.FindLogByUser)
		// projectRoutes.GET("/statistic/:project_id", projectController.FindProjectStatistics)
		// projectRoutes.PUT("/info/:project_id", projectController.UpdateProjectInfo)
		// projectRoutes.GET("/info-structure", projectController.DetailProjectCompanyStructure)
		// projectRoutes.POST("", projectController.CreateProject)
		// projectRoutes.GET("", projectController.FindProject)
		// projectRoutes.GET("/:project_id", projectController.FindDetailProject)
		// projectRoutes.DELETE("/:project_id", projectController.DeleteProject)
		// projectRoutes.DELETE("/delete-structure", projectController.DeleteStructureByIdAndProject)
		// projectRoutes.GET("/questions", projectController.FindQuestionaireByStructure)
		// projectRoutes.POST("/questions", projectController.SetProjectQuestion)
		// projectRoutes.POST("/assign-users", projectController.SetProjectAssignUsers)
		// projectRoutes.DELETE("/assigned-user/:user_id", projectController.DeleteAssignedUser)
		// projectRoutes.GET("/assigned-user/:user_id", projectController.FindDetailAssignedUser)
		// projectRoutes.PUT("/assigned-user/:user_id", projectController.UpdateDetailAssignUser)
		// projectRoutes.GET("/users-not-assigned", projectController.FindUsersNotAssigned)
		// projectRoutes.GET("/users-assigned", projectController.FindUsersAssigned)
		// projectRoutes.GET("/users-assigned-paginated", projectController.FindUsersAssignedPaginated)
		// projectRoutes.POST("/question/answer", projectController.AnswerQuestion)
		// projectRoutes.GET("/question/answer/:question_id", projectController.FindAnswerQuestion)
		// projectRoutes.GET("/by-company", projectController.FindProjectByCompany)
		// projectRoutes.GET("/structure/by-project", projectController.FindProjectStructureByProject)
		// projectRoutes.PUT("/update-pic", projectController.EditDetailProjectCompanyStructure)
		// }

		// reportRoutes := prefix.Group("/report")
		// {
		// 	reportRoutes.GET("/questioner", reportController.ReportQuestionaire)
		// 	reportRoutes.POST("/questioner", reportController.DispatchQuestionerReport)
		// 	reportRoutes.GET("/status", reportController.GetAllJobQueue)
		// }

		// assigned task
		// assignedTaskRoutes := prefix.Group("/assigned-tasks")
		// {
		// 	assignedTaskRoutes.GET("", assignedTaskController.FindAllAssignedTasks)
		// }

		// invetory
		// inventoryRoutes := prefix.Group("/inventories")
		// {
		// 	inventoryRoutes.GET("/select/:id", inventoryController.FindOneSelectInventory)
		// 	inventoryRoutes.PUT("/select/update", inventoryController.UpdateDataSelectInventory)
		// 	inventoryRoutes.POST("/select/create", inventoryController.CreateDataSelectInventory)
		// 	inventoryRoutes.GET("/select", inventoryController.FindSelectInventory)
		// 	inventoryRoutes.GET("", inventoryController.FindAll)
		// 	inventoryRoutes.GET("/document", inventoryController.FindAllDocument)
		// 	inventoryRoutes.GET("/:inventory_id", inventoryController.FindById)
		// 	inventoryRoutes.POST("", inventoryController.Create)
		// 	inventoryRoutes.POST("/document", inventoryController.CreateInventoryDocument)
		// 	inventoryRoutes.PUT("/:inventory_id", inventoryController.Update)
		// 	inventoryRoutes.DELETE("/:inventory_id", inventoryController.Delete)
		// }

		// volume
		// volumeRoutes := prefix.Group("/volumes")
		// {
		// 	volumeRoutes.GET("", volumeController.Get)
		// 	volumeRoutes.POST("/download-attachment", volumeController.DispatchDownloadVolumeAttachment)
		// 	volumeRoutes.GET("/:volume_id", volumeController.GetById)
		// 	volumeRoutes.POST("/create", volumeController.Create)
		// 	volumeRoutes.POST("/update", volumeController.Update)
		// }
	}
}
