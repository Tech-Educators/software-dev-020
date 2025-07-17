export default function AddComment({post_id}) {
    // server function that gets form data
    // just also insert the post_id

    async function handleSubmit(formData) {
        'use server'

        // do databse stuff
    }
    return (
        <div>
            <form action={handleSubmit}>
                // inputs
            </form>
        </div>
    )
}