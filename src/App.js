import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipePage from "./Pages/RecipePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path ="/recipes" element = {<RecipePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
