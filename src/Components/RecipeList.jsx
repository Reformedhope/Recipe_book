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
                    'X-RapidAPI-Key': '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
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