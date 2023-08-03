import React, { useEffect, useState } from "react";
import axios from "axios";


export default function RecipeSummary(){
    const [summary,setSummary]=useState('');

    debugger
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
    
    const summaryString =JSON.stringify(response.data)
    setSummary(summaryString)
    
    console.log(response.data)
    }catch(error){
    console.log("Error fetching recipe summary:", error)


    }
    }
    useEffect(()=>{
        fetchSummary()

    },[])

 return (  
        <div>
            <h1>Summary:</h1>
            <br/>
            <p>{summary}</p>
            {/* <div dangerouslySetInnerHTML={{__html: summary}}/> */}
            
        </div>
    );
}
