import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href='/users'>Users</Link>
      <Link href="/">Home</Link>
    </div>
  )
}