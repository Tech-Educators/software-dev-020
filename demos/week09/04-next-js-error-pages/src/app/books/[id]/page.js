import { connect } from "@/utils/connect";
import { notFound } from "next/navigation";

export default async function BooksPage({params}) {
    const db = connect()
    const {id} = await params

    const bookInfo = (await db.query(`SELECT * FROM books WHERE id = $1`, [id])).rows[0]

    console.log(bookInfo)
    // if we dont have a matching book id in our database

    if (!bookInfo) {
        // calling this notFound function makes nextjs go display out 'notFound' page
        notFound()
    }
    // if you want to throw an error
    // throw new Error('You cant do that!!!')
   
    
    // if you're fetching data/storitng/localstorage/things users may have disapbled - wrap it in try catch
    try {
        // try to store in locale storage
   } catch(e) {
    // but it's okay to leave the catch empty - if the error you're catching doesn't really effect hte functionality of the website
   }

    return (
        <div>
            <h3>{bookInfo.title}</h3>
        </div>
    )
}