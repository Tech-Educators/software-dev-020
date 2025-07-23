"use server";
import { auth } from "@clerk/nextjs/server";
import { connect } from "./connect";
import { redirect } from "next/navigation";

export const handleSubmit = async (formData) => {
  const { book_id, content } = Object.fromEntries(formData);
  try {
    const { userId } = await auth();
    console.log(Object.fromEntries(formData));
    const db = connect();

    const res = await db.query(
      `SELECT id FROM user_account WHERE clerk_id = $1`,
      [userId]
    );
    console.log("user information", res);
    const isUser = res.rows[0]?.id ? true : false;
    const user_id = res.rows[0]?.id;

    console.log(user_id);

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

export const handleDelete = async (book_id) => {
  // delete from reivews WHERE ....
};

export const handleUpdate = async (formData) => {
  // update review SET
};
