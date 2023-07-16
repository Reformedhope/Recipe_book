import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeMapper({recipes}){
    return<div> {recipes.map((el)=>{

        return(<RecipeCard recipe = {el}/>)
        })} </div>
    

}