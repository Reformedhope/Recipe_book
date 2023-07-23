import React, { useEffect, useState } from "react"
import axios from "axios";
import RecipeMapper from "./RecipeMapper";




export default function RecipeList(search){
    const [recipes, setRecipes] =useState([]);
    async function fetchRecipes(){
        try{
            let response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${search}&number=10&ignorePantry=true&ranking=1`,
            {
                headers: {
                    'X-RapidAPI-Key': 'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                  },
            });
            debugger
            // console.log(response.data)
            setRecipes(response.data)
        }catch(error){
            console.log("error in fetching the recipes", error)
        }
    }
    useEffect(()=>{
        fetchRecipes()
    },[search])

    return(

        <div>
            <RecipeMapper recipes = {recipes}/>
        </div>
    )
}