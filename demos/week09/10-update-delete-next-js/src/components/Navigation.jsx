import Link from "next/link"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 border-b flex justify-between items-center font-mono text-sm">
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/books" className="hover:underline">
          Books
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  )
}
