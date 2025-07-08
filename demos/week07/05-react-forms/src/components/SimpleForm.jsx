import { useState } from "react"

export default function SimpleForm() {
    const [username, setUserName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // await fetch POST DATA
        console.log(username)
    } 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your username</label>
            <input id="username" name="username" onChange={(e) => {
                console.log(e.target.value);
                setUserName(e.target.value)}}/>
            <button type="submit">submti</button>
        </form>
    )
}