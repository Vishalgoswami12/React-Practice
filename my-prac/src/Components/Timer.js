import React,{useState} from "react"
import {Link} from "react-router-dom"
function Timer(){
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const handleIncrement = () => {
        setCount(Number(input) + 1);
        setInput(Number(input) + 1);
      };
    return(
        <>
        <div style={{backgroundColor:"lightblue",height:"100vh",padding:20}}>
        <Link to="/card">
        <button style={{color:"orange"}} >Next</button>
        </Link>
        <Link to="/movie"><button> Watch Movie</button></Link>
        <h2>{count}</h2>
      <input
        type="number"
        placeholder="Enter"
        onChange={(e) => setInput(e.target.value)}
      />
      <div style={{marginTop:20}}>
        <button onClick={handleIncrement}>Increase</button>
        </div>
        </div>
        </>
    )
}


export default Timer;