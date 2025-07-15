import pg from "pg"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function AddBook() {

    // two rules for server functions
    // we have to do 'use server' in the body of the funciton
    // they HAVE to be async
    async function handleSubmit(formData) {
        'use server'
        const data = Object.fromEntries(formData)
        const {title, author, description, quote, released, img_url} = data

        const db = new pg.Pool({connectionString: process.env.DB_CONN})

        const newBook = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *`, [title, author, description, quote, released, img_url])

        console.log(newBook.rows)

        // go fetch all data for books route again please
        revalidatePath('/books')

        // redirect the user to the book route
        redirect('/books')

    }

    return (
        <form style={{display: 'flex', flexDirection: 'column', width: '200px', alignSelf: 'center'}} action={handleSubmit}
        >
            <input name="title" placeholder="title" required />
            <input name="author" placeholder="author" required />
            <input name="description" placeholder="description" required />
            <input name="quote" placeholder="quote" required />
            <input name="released" placeholder="released" required type="date"/>
            <input name="img_url" placeholder="img_url" required />
            <button type="submit">Submit</button>
        </form>
    )
}