import { NextResponse } from "next/server";
import pg from "pg"

export async function GET() {
    const db = await pg.Pool({connectionString: "blah"})

    const example = (await db.query(`select * from foo`)).rows

    return NextResponse.json(example)

}

export async function POST(req) {
    // get data from request object
    const data = await req.json()

    const db = await pg.Pool({connectionString: "foo"})

    // db stuff

    return NextResponse.json({success: true})
}