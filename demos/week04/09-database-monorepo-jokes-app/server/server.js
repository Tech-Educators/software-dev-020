import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

// instansiate my app
const app = express()

// set up my middleware
app.use(cors())
// tell my server to parse incomming JSON
app.use(express.json())

// tell my server to go look foor a .env file and pull the varaibles there into my node process
dotenv.config()

// setup an object that gives us methods to interact with oour database. 
// this db object managed making the connection to our supabase for us.
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (req, res) => {
    res.json(`On the root route`)
})

// get route that gets all jokes
app.get('/jokes', async (req, res) => {
    // fetch jokes from SQL table
    // result is a big JSON object
    const result = await db.query(`SELECT * FROM jokes`)

    res.json(result.rows)
})

// I'll make a route that allows users to add new jokes to our database
app.post('/jokes', async (req, res) => {
    // I need to get information the client has sent me in the request object. 
    const body = req.body
    // I know the person doing the front end
    // I know they'll send an object that looks like this 
    /*
        {
            joke: "Did you hear about the claustrophic astronaut?",
            punchline: "He just wanted a bit more space"
        }
    */
        const jokeFromClient = req.body.joke
        const punchlineFromClient = req.body.punchline

        const data = await db.query(`INSERT INTO jokes (joke, punchline) VALUES ($1, $2)`, [jokeFromClient, punchlineFromClient ])
        // DONT DO THIS
        // const UNSAFEDONTDO = await db.query(`INSERT INTO jokes VALUES ${jokeFromClient}`
    res.send(data)
})

// tell the server where to listen for incomming connections
app.listen('4242', () => console.log('App running on http://localhost:4242'))