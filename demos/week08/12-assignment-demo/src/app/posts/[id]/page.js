import DeleteButton from "@/components/DeleteButton";

export default function Page({params}) {
    // params will give me the id of this post that i'm on

    // query database for information abotu that particular post `select * from tablename where id = whatever the id is` (from params)

    // display the post content below

    // we'd also like a delete button

    // a delete button needs to know when it's been clicked - so it has to be a client component
    // so i'll make a seperate component called DeleteButton in my components folder


    // I can write a server function in this page 
    // and pass it as a prop to a client component

    // we may want to consider passing in the ID of the post so we can delete the write post
    function deleteTHing(id) {
        // database delete stuff
    }
    return (
        <div>
            <DeleteButton deleteTHing={deleteTHing} />
            <CommentsComponent postID={params.id}/>
        </div>
    )
}