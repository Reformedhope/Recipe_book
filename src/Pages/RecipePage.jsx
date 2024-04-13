
import React from "react";
import RecipeList from "../Components/RecipeList";
import { useLocation } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

//this will now hold the value of user input. 


const RecipePage = (props) => {
const {state} = useLocation();
console.log("state inside of the recipe page", state)


    return (  
    <div class = 'content'>
        <SearchBar/>
        <RecipeList search = {state}/>
<p> Recipes</p>
    </div>);
}
 
export default RecipePage;