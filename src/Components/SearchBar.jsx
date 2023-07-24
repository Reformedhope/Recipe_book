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
        <div className="flex justify-center py-4">
          <form onSubmit={handleRecipeSubmit} className="w-full max-w-lg">
            <div className="flex items-center border rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Separate ingredients w/ a comma"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-3 px-6 w-full rounded-l-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-r-lg ml-2" // Add 'ml-2' class to create space between the input and the button
              >
                Button
              </button>
            </div>
          </form>
        </div>
      );
}
 
export default SearchBar;

