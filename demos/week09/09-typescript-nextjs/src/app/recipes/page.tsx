import Link from "next/link"
import { recipeType } from "@/utils/types/recipes"

export default async function RecipePage() {

    const res = await fetch(`https://dummyjson.com/recipes`)
    const recipes = (await res.json()).recipes

    return (
        <div>
            {recipes.map((recipe: recipeType) => (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            ))}
        </div>
    )
}

