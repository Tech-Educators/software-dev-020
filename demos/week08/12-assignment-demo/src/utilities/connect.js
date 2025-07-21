import {Pool} from "pg"

export const connect = () => {
    const db = new Pool({connectionString: process.env.DB_CONN})
    return db
}