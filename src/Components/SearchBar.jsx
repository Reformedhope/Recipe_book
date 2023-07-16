import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    const[search, setSearch] = useState([]);
    const navigate = useNavigate();


    function handleRecipeSubmit(e){
        e.preventDefault();
        // props.searchRecipe(search)
        console.log(search)
        navigate("/recipes", {state: search});
        // to hold the variable when passing from one page to another you incorperate state.

    };
    
    return ( 
        <div>
            <form  on onSubmit={handleRecipeSubmit}>
                <input type = "text" place holder ="Seperate ingredients w/ a comma" value = {search}  onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Button</button>
            </form>

        </div>

     );
}
 
export default SearchBar;