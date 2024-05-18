import './App.css';
import React from "react";
import Timer from './Components/Timer';
import DisplayData from './Components/DisplayData';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
 
  return (
     <div className="App" style={{padding:10}}>
      <Router>
        <Routes>
          <Route path="/" element={<Timer/>}></Route>
          <Route path="/next" element={<DisplayData/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
