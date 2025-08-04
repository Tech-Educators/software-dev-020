
// app.get('/:id', (req, res) => {})

export async function POST(request, {params}) {
    // get dynamic route param
    const {id} = await params
    // get request.body
    const details = await request.json()

    console.log('Id:', id, 'Details:', details)

    return Response.json('Updated pet')
}