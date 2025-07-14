export default async function Page({params}) {

    // I can use this to tell me what the id is

const {id} = await params

    console.log(id)


    // try and fetch the information from our database about the id 

    // if we can't find it, we call a function called notFound()
    // notFound() redirects the user to a 404 page.

    return (
        <div>
            This is for the {id}  </div>
    )
}


// localhost/dogs/1
// localhost/dogs/sam


// all page.js files get two props - params, and searchParams