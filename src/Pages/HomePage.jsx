import React from "react";
import SearchBar from "../Components/SearchBar";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div className="content">
      <h2 className="text-4xl font-bold text-center text-dark-green-600 mb-8">
        {" "}
        Welcome to great food ideas!
      </h2>
    
      <div>
        <SearchBar />
      </div>
      <h2 className="text-4xl font-bold text-center text-dark-green-600 mb-8">
        {" "}
        Search ingredients to find recipes that tickle your fancy. When searching make sure to include a "," between each item. Include as many items as you wish.
      </h2>
    </div>
    // </body>
  );
};

export default HomePage;
