package main

import (
	"server/database"
)

func main() {

	// Initialize the database
	database.InitDB()

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	// })
	// http.ListenAndServe(":8080", nil)

}
