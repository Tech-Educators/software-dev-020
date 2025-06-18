import express from "express"
import dotenv from "dotenv"

// this command 'pulls' the varaibles in our .env file into our currently running node.js process.
dotenv.config()

// process - the node process running our code
// env - environment variables
// MY_NAME - the env var I made in my .env file
console.log(process.env.MY_NAME)

console.log(process.env)

function getAllUsers() {
    // connect to database
    const db = new pg.Pool({conenctString: process.env.DB_PASSWORD})
}