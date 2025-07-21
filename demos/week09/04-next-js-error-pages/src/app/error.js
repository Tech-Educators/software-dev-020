'use client'
import Link from "next/link"
export default function Error({error, reset}) {
    // Error.js file always get this 'error' object and a 'reset' function


    console.log(error)
    return (
        <div>
            <p>Something went wrong :((((</p>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
            <Link href='/'>Go back home</Link>
        </div>
    )
}