import React from "react";
import axios from "axios";


export default function RecipeSummary(){
{
    
    async function fetchSummary(){
        let response = await axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary",
        {
            headers: {
          'X-RapidAPI-Key': 'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
)    
    
    
   
}
}
 return (  
        <div></div>
    );
}
