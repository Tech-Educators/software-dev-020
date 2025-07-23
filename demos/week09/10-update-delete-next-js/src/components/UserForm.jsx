import {auth} from "@clerk/nextjs/server"
import { connect } from "@/utils/connect"

export default async function UserForm() {
    // get user clerk id
    const {userId} = await auth()

    // handleSubmit
    async function handleUserInfoSubmit(formData) {
        "use server"
        // turn formData in to an object
        const {username, bio} = Object.fromEntries(formData)

        const db = connect()
        await db.query(`INSERT INTO user_account (username, bio, clerk_id) VALUES ($1, $2, $3)`, [username, bio, userId])
    }

    return (
        <form action={handleUserInfoSubmit}>
            <input name="username" placeholder="enter you username"/>
            <input name="bio" placeholder="enter a bio...."/>
            <button type="submit">submit</button>
        </form>
    )
}