import React, { useEffect, useState } from "react";
import axios from "axios";


export default function RecipeSummary(){
    const [summary,setSummary]=useState('');

    
    async function fetchSummary(recipeId){
        try{
        let response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/summary`,
        {
            headers: {
          'X-RapidAPI-Key': 'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    );
    const summaryString =JSON.stringify(response.data)
    setSummary(summaryString)
    debugger
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
            <div dangerouslySetInnerHTML={{__html: summary}}/>
            
        </div>
    );
}
