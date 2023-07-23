import React from "react"
import RecipeSummary from "./RecipeSummary"

export default function recipeCard({recipe}){
    console.log("single Recipe inside of card:", recipe)
    return(<div className="flex">

        <div>
        <img src ={recipe.image}/>
        </div>

        <div>
        <h1>{recipe.title}</h1>
        <h3>{recipe.likes}Likes</h3>
        <RecipeSummary recipeId ={recipe.id}/>
        </div>
        </div>
    )
}