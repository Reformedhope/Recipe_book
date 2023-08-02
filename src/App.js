import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipePage from "./Pages/RecipePage";
import Footer from "./Components/Footer/Footer";
import './app.css'
function App() {
  return (
    <div className="background">
      <div className=" container">
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path ="/recipes" element = {<RecipePage/>}/>
        </Routes>
      </Router>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
