package routes

import (
	"github.com/gorilla/mux"
	"github.com/ichtrojan/go-todo/controllers"
)

func Init() *mux.Router {
	route := mux.NewRouter()

	route.HandleFunc("/", controllers.Show)
	route.HandleFunc("/add", controllers.Add).Methods("POST")
	route.HandleFunc("/delete/{id}", controllers.Delete)

	route.HandleFunc("/complete/{id}", controllers.Complete)
	route.HandleFunc("/progress/{id}", controllers.InProgress)
	route.HandleFunc("/do/{id}", controllers.InDo)

	return route
}