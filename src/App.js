import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
