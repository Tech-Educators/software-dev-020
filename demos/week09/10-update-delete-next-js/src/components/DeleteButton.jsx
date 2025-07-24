import { handleDelete } from "@/utils/actions";

export default function DeleteButton({ id, bookId }) {
  return (
    <form action={handleDelete}>
      {/* inputs are hidden because we're just using them to send in formData */}
      <input type="hidden" name="review_id" defaultValue={id} />
      <input type="hidden" name="book_id" defaultValue={bookId} />
      <button type="submit" className="text-red-600 text-sm ml-2">
        Delete
      </button>
    </form>
  );
}
