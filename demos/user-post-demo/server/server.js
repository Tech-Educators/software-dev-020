import express from "express"
import cors from "cors"

// instansiating my app

const app = express()
// make it so incoming JSON is automically understood by the server

// .use() adds middleware
app.use(express.json())
app.use(cors())

// custom middlware that changes all incoming request bodies to 'Mango'
// app.use((req, res, next) => {
//     req.body = 'Mango'
//     next()
// })

// this would be in a database, but we'll just put it here
const books = [
    {name: "Dune", year: 1937 },
    {name: "Butter", year: 2025},
    {name: "Fellowship of the Ring", year: 1954 },
    {name: "Charlie and The Chocolate Factory", year: 1964 },
    {name: "The hobbit", year: 1937 },
    {name: "The Little Prince", year:1943 },
    {name: "1984", year: 1949 },
    {name: "Ready Player Two", year: 2020 },
]

// CREATE - POST

app.post('/books', (req, res) => {
    // how do I get the book infromation from the clients request?
    req.body // holds the data sent form the client
    console.log(req.body)
    // send a response from this endpoint. Even if the client doesn't *need* a response for some reason, you should send one to close the connection.
    res.send('Done')
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.listen(4040, () => console.log(`Running on 8080 :DDDDDD`))