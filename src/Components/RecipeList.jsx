import React from "react"
import axios from "axios";




export default function RecipeMList(){
    async function fetchRecipes(){
        try{
            let response = await axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples,flour,sugar&number=10&ignorePantry=true&ranking=1",
            {
                headers: {
                    'X-RapidAPI-Key': 'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                  },
            });
        }catch(error){
            console.log("error in fetching the recipes", error)
        }
    }

    return(
        <div>LIST</div>
    )
}