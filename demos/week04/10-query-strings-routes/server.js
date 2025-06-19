import express from "express"

const app = express()

const books = [
  { name: "The Hobbit", year: 1937 },
  { name: "Dune", year: 1965 },
  { name: "Harry Potter", year: 1997 },
  { name: "The BFG", year: 1982 },
  { name: "Charlie and the Chocolate Factory", year: 1964 },
  { name: "The Secret Garden", year: 1911 },
  { name: "Cold Mountain", year: 1997 },
];


app.get('/', (req, res) => {
    res.send(`Root route`)
})

app.get('/books', (req, res) => {
    // query strings
    // if I go to /books?year=200 the request.query will be {year: '200'}
    // books?cat=true then req.query will be {cat: true}
    // books?year=200&genre=horror then req.query will be {year: '200', genre: 'horror'}

    // we mostly use this to filter results
    // we'll use the req.query to filter out books that don't match the year we put in 
    console.log(req.query)

    // req.query = {year: 1997}
    const filteredBooks = books.filter((book) => book.year == req.query.year)
    console.log(filteredBooks)

    res.json(filteredBooks)
})

app.listen(8282, () => console.log(`Server live on port 8282	ò_ô `))