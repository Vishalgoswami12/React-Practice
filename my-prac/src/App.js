import './App.css';
import React from "react";
import Timer from './Components/Timer';
import DisplayData from './Components/DisplayData';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';
function App() {
 
  return (
     <div className="App" style={{padding:10}}>
      <Router>
        <Routes>
          <Route path="/" element={<Timer/>}></Route>
          <Route path="/card" element={<DisplayData/>}/>
          <Route path="/card/:id" element={<DetailsPage/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
