import Link from "next/link"

export default function BooksResults({books}) {
    return (
        <div>
            <ul className="border">
            {books.map(book => (
                <li className="border m-2"key={book.id}><Link href={`/books/${book.id}`}>{book.title}</Link></li>
            ))}
            </ul>
        </div>
    )
}