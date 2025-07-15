"use client"

// we have to use the above 'directive' to change thsi component into a client component
import {useState} from "react"
import Example from "./Example"

export default function ClientComponent() {
    const [count, setCount] = useState(0)

    console.log('This is running on the client')

    return (
    <div>
        {/* When we import server components into client components, they become client components  */}
        <Example />
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    </div>
    )
}