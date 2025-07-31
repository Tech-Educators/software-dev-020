import {auth} from "@clerk/nextjs/server"
import pg from "pg"

export default async function ProfilePage() {

    const db = new pg.Pool({connectionString: process.env.DB_CONN})
    const {userId, redirectToSignIn} = await auth()

    // is the user signed in?
    if (!userId) redirectToSignIn()

    // is the user in *our* database
    const res = await db.query(`SELECT * FROM user_account WHERE clerk_id = $1`, [userId])

    // just to have a variable to work with
    // an empty array is still truthy, so we need to check if it has a length greather than 0 
    // true or false if user is in db
    const isInDB = res.rows.length > 0


    async function handleSubmit(formData) {
        "use server"
        const {username, bio} = Object.fromEntries(formData)

        const db = new pg.Pool({connectionString: process.env.DB_CONN})
        await db.query(`INSERT INTO user_account (username, bio, clerk_id) VALUES ($1, $2, $3)`, [username, bio, userId])
            // throw new Error(`couldnlt make accoutn`)
    }

    if (!isInDB) {
        return (
            <form action={handleSubmit}>
                <input name="username" placeholder="username" />
                <input name="bio" placeholder="bio" />
                <button type="submit">submit</button>
            </form>
        )
    }
    // user is in the database and signed in

    return (
        <div>
            <h1>user info</h1>
            <p>{res.rows[0].username}</p>
            <p>{res.rows[0].bio}</p>
        </div>
    )
}