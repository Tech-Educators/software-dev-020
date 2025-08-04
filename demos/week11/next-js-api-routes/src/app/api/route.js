
// we export functions per HTTP method - get, post, put, so on
// optionally, all of these functions GET(), POST() ect get the request obj and params if you want them

export async function GET() {
    return Response.json({message: "Hello world"})
}

/**
 * 
 * app.get((req, res) => {
 *  res.json({message: "hello world"})
 * })
 */