import React from 'react';
import SearchBar from '../Components/SearchBar';
import './HomePage.css';

const HomePage = (props) => {
  return (
    // <body class="bg-gradient-to-br from-blue-400 to-gray-600">


    <div >
        <div className='content'>
            <h2 className="text-4xl font-bold text-center text-dark-green-600 mb-8"> Welcome to great food ideas!</h2> 
            <div>
            </div>
            <SearchBar/>
            

        </div>
      
    </div>
    // </body>
  );
}

export default HomePage;