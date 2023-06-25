import React, { useState } from "react";

const SearchBar = (props) => {
    const[search, setSearch] = useState([]);

    function handleRecipeSubmit(e){
        e.preventDefault();
        props.searchRecipe(search)

    };
    
    return ( 
        <div>
            <form  on onSubmit={handleRecipeSubmit}>
                <input type = "text" place holder ="Search Recipes" value = {search}  onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Search Yummy Recipes</button>
            </form>

        </div>

     );
}
 
export default SearchBar;