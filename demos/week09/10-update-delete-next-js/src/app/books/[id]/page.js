import { connect } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { handleSubmit, handleUpdate } from "@/utils/actions";
import { BookDetail } from "@/components/BookDetail";
import DeleteButton from "@/components/DeleteButton";

export default async function Page({ params }) {
  // get currently signed in user
  const { userId } = await auth();
  // get the id of the book we're looking at
  const { id } = await params;

  const db = connect();
  const data = (
    await db.query(
      `
    SELECT books.*, ARRAY_AGG(genres.name) AS genres
    FROM books
    LEFT JOIN book_genres ON books.id = book_genres.book_id
    LEFT JOIN genres ON book_genres.genre_id = genres.id
    WHERE books.id = $1
    GROUP BY books.id
  `,
      [id]
    )
  ).rows[0];

  // get all reviews
  const reviews = (
    await db.query(
      `SELECT review.*, user_account.username, user_account.clerk_id FROM review JOIN user_account ON review.user_id = user_account.id WHERE review.book_id = $1 ORDER BY review.id DESC`,
      [id]
    )
  ).rows;
  // we look through the reviews array and check if any of the reviews where made by the currently signed in user
  const userReview = reviews.find((review) => review.clerk_id == userId);

  // console.log('userId', userId)
  // console.log('userReview', userReview)
  // console.log('reviews', reviews)

  return (
    <div className="min-h-screen px-20">
      <BookDetail book={data} />
      <section>
        <h2 className="text-xl">Your Reviews:</h2>
        {userId ? (
          // if the user is signed in, show the reivew form
          // if there is a review made the user - show them the 'update' version of the review form : otherwise show them the 'add' version of the review Form.
          userReview ? (
            <div>
              <DeleteButton id={userReview.id} bookId={id} />
              <ReviewForm bookId={id} review={userReview} /> )
            </div>
          ) : (
            <ReviewForm bookId={id} />
          )
        ) : (
          <p className="text-sm">Sign in to leave a review</p>
        )}
        <p className="text-xl">All reviews</p>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.username}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// for both updateing a review and creating one
export function ReviewForm({ bookId, review }) {
  return (
    <form
      action={review ? handleUpdate : handleSubmit}
      className="border-2 border-b-blue-600"
    >
      {/* these inputs server just to pass in the bookID to the server action - the user doesn't see them or type into them. But they will get passed along with the rest of our form as formData */}
      <input type="hidden" value={bookId} name={"book_id"} />
      {review && <input type="hidden" value={review.id} name="review_id" />}

      <input defaultValue={review ? review.content : " "} name="content" />
      <button type="submit">{review ? "Edit review" : "Add review"}</button>
    </form>
  );
}

// actions

// handleUpdateReviVew

// handleAddReview

// handleDelete
