package main

import (
	"fmt"
	"net/http"

	"github.com/charlieolinsky/upd-scheduler/server/database"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	http.ListenAndServe(":8080", nil)

	database.InitDB()
}
