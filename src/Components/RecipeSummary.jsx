import React, { useEffect } from "react";
import axios from "axios";


export default function RecipeSummary(){

    
    async function fetchSummary(){
        try{
        let response = await axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary",
        {
            headers: {
          'X-RapidAPI-Key': 'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    );
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
        <div>{response.data.summary}</div>
    );
}
