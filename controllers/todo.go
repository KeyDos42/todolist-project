package controllers

import (
	"fmt"
	"html/template"
	"net/http"
	"project1/models"

	"project1/config"

	"github.com/gorilla/mux"
)

var (
	id               int
	item             string
	completed        int
	progress         int
	late             int
	todoElem         int
	view                 = template.Must(template.ParseFiles("templates/index.html"))
	database             = config.Database()
	movedPermanently int = 301
)

func Show(w http.ResponseWriter, r *http.Request) {
	statement, err := database.Query(`SELECT * FROM todos`)

	if err != nil {
		fmt.Println(err)
	}

	var todos []models.Todo

	for statement.Next() {
		err = statement.Scan(&id, &item, &completed, &progress, &late, &todoElem)

		if err != nil {
			fmt.Println(err)
		}

		todo := models.Todo{
			Id:        id,
			Item:      item,
			Completed: completed,
			Progress:  progress,
			Late:      late,
			TodoElem:  todoElem,
		}

		todos = append(todos, todo)
	}

	data := models.View{
		Todos: todos,
	}

	_ = view.Execute(w, data)
}

func Add(w http.ResponseWriter, r *http.Request) {

	item := r.FormValue("item")
	/**
	*
	* For default value put late = 1
	*
	 */
	_, err := database.Exec(`INSERT INTO todos (item, completed, progress, late, do) VALUE (?, 0, 0, 1, 0)`, item)

	if err != nil {
		fmt.Println(err)
	}

	http.Redirect(w, r, "/", movedPermanently)
}

func Delete(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	_, err := database.Exec(`DELETE FROM todos WHERE id = ?`, id)

	if err != nil {
		fmt.Println(err)
	}

	http.Redirect(w, r, "/", movedPermanently)
}

func Complete(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	_, err := database.Exec(`UPDATE todos SET completed = 1, progress=0 WHERE id = ?`, id)

	if err != nil {
		fmt.Println(err)
	}

	http.Redirect(w, r, "/", movedPermanently)
}

func InProgress(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	_, err := database.Exec(`UPDATE todos SET progress = 1, do = 0 WHERE id = ?`, id)

	if err != nil {
		fmt.Println(err)
	}

	http.Redirect(w, r, "/", movedPermanently)
}

func InDo(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	_, err := database.Exec(`UPDATE todos SET do = 1, late=0 WHERE id = ?`, id)

	if err != nil {
		fmt.Println(err)
	}

	http.Redirect(w, r, "/", movedPermanently)
}
