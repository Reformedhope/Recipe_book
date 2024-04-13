import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeList from "./RecipeList";

export default function RecipeMapper({recipes}){
    console.log (recipes)
    return<div> {recipes.map((el)=>{

        return(
        <RecipeCard recipe = {el}/>)
        })} </div>
    

}