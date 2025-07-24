import { auth } from "@clerk/nextjs/server";
import { connect } from "@/utils/connect";
import UserForm from "@/components/UserForm";

export default async function Page() {
  const db = connect();

  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  // how to check if the user is in our database
  // does anyone in our DB have the same clerk id as the user currently on this page?
  const res = await db.query(`SELECT * FROM user_account WHERE clerk_id = $1`, [
    userId,
  ]);
  const userInfo = res.rows[0]; // get the first result from rows
  // if rows is greater than 0 then our user is in the db - if it's 0 then our user is not in the database
  const isInDB = res.rows.length > 0;

  if (!isInDB) {
    return (
      <div>
        <UserForm />
      </div>
    );
  }

  const userReviews = (
    await db.query(
      `SELECT review.*, books.title FROM review INNER JOIN books ON review.book_id = books.id WHERE review.user_id = $1 `,
      [userInfo.id]
    )
  ).rows;

  return (
    <div>
      <p>user id: {userInfo.id}</p>
      <p>Welcome back {userInfo.username}</p>
    </div>
  );
}

// is the user signed into my application? -> redirect to sign-in
// user is signed in - but not in database (user_account) table. -> show them a form to add in their username and bio
// user is signed in and they exist in my database - > show them the normal profile screen.
