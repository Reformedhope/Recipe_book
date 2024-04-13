import React from "react"
import RecipeSummary from "./RecipeSummary"
import './RecipeCard.css'

export default function recipeCard({recipe}){
    console.log("single Recipe inside of card:", recipe)
    return(
        <div class="cards-container">
  <div className="container-box">
    <div className="flex">
      <div className="image">
        <img src={recipe.image} alt="Recipe" />
      </div>
      <div>
        <h1>{recipe.title}</h1>
        <span className="summary">
        <RecipeSummary recipeId={recipe.id} />
        </span>
      </div>
    </div>
  </div>
</div>
    )
}