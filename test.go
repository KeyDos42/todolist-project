package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/ichtrojan/go-todo/routes"
	"github.com/ichtrojan/thoth"
	"github.com/joho/godotenv"
)

func main() {
	styles := http.FileServer(http.Dir("./views/stylesheets"))
	http.Handle("/styles/", http.StripPrefix("/styles/", styles))

	logger, _ := thoth.Init("log")

	if err := godotenv.Load(); err != nil {
		logger.Log(errors.New("no .env file found"))
		log.Fatal("No .env file found")
	}

	port, exist := os.LookupEnv("PORT")

	if !exist {
		logger.Log(errors.New("PORT not set in .env"))
		log.Fatal("PORT not set in .env")
	}

	fmt.Println("Starting application on the port 4040")

	err := http.ListenAndServe(":"+port, routes.Init())

	if err != nil {
		logger.Log(err)
		log.Fatal(err)
	}

}
