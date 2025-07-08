import { useState } from "react"

export default function UseStateFunctionalUpdate() {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }
    
    return (
        <div>
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}