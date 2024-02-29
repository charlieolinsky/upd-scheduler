package database

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func InitDB() {
	db, err := sql.Open("sqlite3", "./upd-scheduler.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec("PRAGMA schema_version;")
	if err != nil {
		log.Fatal(err)
	}
}
