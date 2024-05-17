import './App.css';
import React from "react";
import Timer from './Components/Timer';
import DisplayData from './Components/DisplayData';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
 
  return (
     <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Timer/>}></Route>
        </Routes>
      </Router> */}
      <Timer/>
     {/* <DisplayData/> */}
    </div>
  );
}

export default App;
