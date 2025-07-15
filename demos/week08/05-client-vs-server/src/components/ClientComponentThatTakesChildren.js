'use client'

import {useState} from "react"

export default function ClientComponentThatTakesChildren({children}) {
    const [user,setUser] = useState('Sam')

    return (
        <div>
            <button onClick={() => setUser('COnnor')} className="bg-red-400">Click me!</button>
            <p>{user}</p>

            {children}
        </div>
    )
}