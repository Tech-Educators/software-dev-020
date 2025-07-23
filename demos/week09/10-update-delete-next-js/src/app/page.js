import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 font-mono text-sm">
      <h1 className="text-2xl mb-4">welcome to bookstack.</h1>
      <p className="mb-2">your quiet little shelf on the internet.</p>
      <p className="mb-2">track what you’re reading. log what you’ve loved. avoid what you’ve hated.</p>
      <p className="mb-2">start by visiting the <Link href={'/books'} className="underline">Books</Link> page.</p>
    </main>
  )
}
