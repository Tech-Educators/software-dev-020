import Image from "next/image"
import Link from "next/link"

export default async function UserPage({searchParams}) {

    const query = await searchParams

    const data = await fetch(`https://dummy-json.mock.beeceptor.com/users`)
    const users = await data.json()

    console.log(query)


    if (query.sortBy == 'asc') {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
        users.sort((a, b) => {
            console.log(a, b)
            return a.name.localeCompare(b.name) 
        })
    } else if (query.sortBy == 'desc') {
        users.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
    }

    // .filter() (with .startsWith())
    // .find()

    return (
        <div>
            <div className="m-5 flex flex-row gap-10">
                <Link href="/users?sortBy=asc">Sort by asc</Link>
                <Link href="/users?sortBy=desc">Sort by des</Link>
                <Link href='/users'>Don't sort</Link>
            </div>
            <h1>Users:</h1>
            <div>
                {users.map(user => (
                    <div key={user.id} className="m-10 bg-lime-600">
                        <p className="text-2xl">{user.name}</p>
                        {user.photo ? <Image height={200} width={200} src={user.photo} alt="" /> : <Image height={200} width={200} src={`https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg`} alt=""/>}
                    </div>
                ))}
            </div>
        </div>
    )
}