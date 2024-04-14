import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipePage from "./Pages/RecipePage/RecipePage";
import PersonalRecipePage from "./Pages/PersonalRecipePage/PersonalRecipePage";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import './app.css'
function App() {
  return (
    <div className="background">
      <div className=" container">
        

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path ="/recipes" element = {<RecipePage/>}/>
          <Route path ="/PersonalRecipePage" element = {<PersonalRecipePage/>}/>
        </Routes>
      </Router>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
