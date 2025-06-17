import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
// servers dont know how to read JSON on their own
// so we use middlware to parse the JSON to normal js objects for us. 
// can read incoming jsonç
app.use(express.json())

app.get('/', (request, response) => {
    response.json(`Loud and clear`)
})

app.post('/books', (req, res) => {
    console.log(req.body)
    // get the server to clg what the user sent. 
    res.json({you_sent_me_this: req.body})
})

app.listen(7070, () => console.log(`Running on port 7070`))