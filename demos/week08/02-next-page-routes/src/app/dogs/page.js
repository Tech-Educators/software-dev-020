import Link from "next/link"

export default function Page() {
    const pets = [
        {
            id: 0,
            name: 'Archer',
            type: 'Husky'
        }, {
            id: 1,
            name: 'Maisie',
            type: 'Lurcher'
        }, {
            id: 2,
            name: 'Bella',
            type: 'Cocker Spaniel'
        }, {
            id: 3,
            name: 'Elsa',
            type: 'Lurcher'
        }
    ]
    return (
        <div>
            <h2>This is the dogs page</h2>
            {pets.map(pet => (
                <div>
                    <Link href={`/dogs/${pet.id}`}>{pet.name}</Link>
                </div>
            ))}
        </div>
    )
}