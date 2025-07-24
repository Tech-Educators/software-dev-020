"use server";
import { auth } from "@clerk/nextjs/server";
import { connect } from "./connect";
import { redirect } from "next/navigation";

export const handleSubmit = async (formData) => {
  const { book_id, content } = Object.fromEntries(formData);
  try {
    const { userId } = await auth();

    const db = connect();
    // userId gives me the clerk_id - but I need their user_account.id value
    const res = await db.query(
      `SELECT id FROM user_account WHERE clerk_id = $1`,
      [userId]
    );
    // does this person exist in my database at all
    const isUser = res.rows[0]?.id ? true : false;
    const user_id = res.rows[0]?.id;

    // you may also want to pause here and check if they already have a review of the book, and not allow it

    if (!isUser) throw new Error("User must have an acocunt to make a review");

    await db.query(
      `INSERT INTO review (user_id, book_id, content) VALUES ($1, $2, $3)`,
      [user_id, book_id, content]
    );
  } catch (e) {
    throw new Error(e.message);
  }
  redirect(`/books/${book_id}`);
};

export const handleDelete = async (formData) => {
  // delete from reivews WHERE ....
  const db = connect();

  const { review_id, book_id } = Object.fromEntries(formData);
  console.log("from handle delete", review_id);

  // might want to have an AND check to make the user_id is also the currently signed in user
  db.query(`DELETE FROM review WHERE id = $1`, [review_id]);

  redirect(`/books/${book_id}`);
};

export const handleUpdate = async (formData) => {
  // get user id
  // get your formdata from the above
  // db.qery(udpate blah set foo)
  // redirect
};
