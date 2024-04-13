import React, { useEffect, useState } from "react";
import axios from "axios";
import './RecipeCard.css'


export default function RecipeSummary({recipeId}){
    const [summary,setSummary]=useState('');
console.log("This is what you are looking for", recipeId)
    // debugger
    async function fetchSummary(recipeId){
        try{
        let response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/summary`,
        {
            headers: {
                'X-RapidAPI-Key': '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    );
    
    const summaryString =(response.data.summary)
    setSummary(summaryString)
    
    console.log(response.data)
    }catch(error){
    console.log("Error fetching recipe summary:", error)


    }
    }
    useEffect(()=>{
        fetchSummary(recipeId)

    },[])

 return (  
        <div>
            <h1>Summary:</h1>
            
            {/* <p>{summary}</p> */}
            <div dangerouslySetInnerHTML={{__html:summary}}/>
            
        </div>
    );
}
