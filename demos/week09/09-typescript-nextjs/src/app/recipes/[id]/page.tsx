
type paramsType = {
    params: Promise<{id: number}>,
    //searchParams: Promise<{sortBy: string}>
}
// https://nextjs.org/docs/app/api-reference/file-conventions/page#displaying-content-based-on-params


export default async function Page({params}: paramsType) {
    const {id} = await params

    const res = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe = await res.json()

    console.log(recipe)
    return (
        <div>
            <h2>Single Recipe page</h2>
        </div>
    )
}