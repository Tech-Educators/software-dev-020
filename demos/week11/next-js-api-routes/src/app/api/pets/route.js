

const petsList = [
    {
        name: 'Darcy',
        colour: 'Brown',
        type: 'Dog'
    }, {
        name: "Tulip",
        colour: "Black",
        type: "cat"
    }
]
export async function GET() {
    return Response.json({pets: petsList})
}


export async function POST(request) {
    // if you want metadata of request

    // if we want the request.body we just need to await it
    const petDetails = await request.json()

    console.log(petDetails)

    // do whatever db stuff you want to do ect.

    return Response.json('Added pet')
}