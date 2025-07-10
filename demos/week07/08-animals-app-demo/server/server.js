import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json()); // so our server knows how to read json
app.use(cors());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.send(`Youre looking looking at my root route. How roude!`);
});

// I'd like a route that gives me a list of animals
app.get("/animals", async (req, res) => {
  try {
    if (req.query.withHabits) {
      const animals =
        await db.query(`SELECT animals.name, animals.image, ARRAY_AGG(habitats.type) AS habitats
                FROM animals
                INNER JOIN animals_habitats
                ON animals.id = animals_habitats.animal_id
                INNER JOIN habitats
                ON habitats.id = animals_habitats.habitat_id
                GROUP BY animals.name, animals.image`);
            res.status(200).json(animals.rows)
    }
    // some beautiful request to my database
    const animals = await db.query(`SELECT * FROM animals`);

    console.log(animals);
    res.status(200).json(animals.rows);
  } catch (e) {
    // if something goes wrong, we'll send back a HTTP status 500 (server error) and the error message
    res.status(500).json({ error: e });
  }
});

// get me a single animals details
app.get('/animals/:id', async (req, res) => {
  try {
   const {id} = req.params 
    const animal = await db.query(`SELECT * FROM animals WHERE id = $1`, [id])
    res.status(200).json(animal.rows)
  } catch(e) {
    res.status(500).json({error: e})
  }
})


app.post('/animals', async (req, res) => {
    try {
        const {name, description, scientfic_name, image} = req.body
        const result = await db.query(`INSERT INTO animals (name, description, scientfic_name, image) VALUES ($1, $2, $3, $4)`, [name, description, scientfic_name, image])
       res.status(201).json('New animal added')
    } catch(e) {
        res.status(500).json({error: e})
    }
})

// DELETING A PARTICUALR ANIMAL
// send a delete quest to /animals/3
app.delete('/animals/:id', async (req, res) => {
    try{
        console.log(req.params)
        // returning * means we can show the user what they've deleted in a toast message for example
        const result = await db.query(`DELETE FROM animals WHERE id = $1 RETURNING *`, [req.params.id])
        res.status(200).json(result.rows)
    } catch(e) {
        res.status(500).json({error: e})
    }
})

app.listen(8080, () => {
  console.log(`Server is running on PORT 8080: ୧༼ಠ益ಠ༽୨`);
});
