import pg from "pg"
export default async function Page({params}) {
    const {id} = await params

    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    // wrapping the await part in ()'s means we finish doing the request before getting the .rows
    const bookDetails = (await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [id])).rows[0]

    console.log(bookDetails)
    return (
        <div>
           <h2>{bookDetails.title}</h2> 
           <p>{bookDetails.author}</p>
        </div>
    )
}