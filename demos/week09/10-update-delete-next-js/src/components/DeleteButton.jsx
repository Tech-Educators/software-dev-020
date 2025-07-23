'use client'
import { handleDelete } from "@/utils/actions"
export default function DeleteButton({id}) {
    return (
        <button onClick={() => handleDelete(id)}>X</button>
    )
}