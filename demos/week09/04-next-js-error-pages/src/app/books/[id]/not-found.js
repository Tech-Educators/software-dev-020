import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <p>I couldn't find the book you were looking for</p>
            <Link href='/books'>Back to all boosk</Link>
        </div>
    )
}