import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbPath = path.resolve("src/db", "db.sqlite");

export const getDb = async () => {
    try {
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        // await db.run(
        //     `CREATE TABLE IF NOT EXISTS blog (
        //       id INTEGER PRIMARY KEY AUTOINCREMENT,
        //       author TEXT NOT NULL,
        //       authorImg TEXT NOT NULL,
        //       title TEXT NOT NULL,
        //       content TEXT NOT NULL,
        //       imgUrl TEXT NOT NULL,
        //       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        //     )`
        // );
        console.log("Connected to SQLite db");
        return db;
    } catch (error) {
        console.error("Error connecting to SQLite db:", error);
        throw error;
    }
};


export default getDb;
