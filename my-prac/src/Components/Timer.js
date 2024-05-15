import React,{useState} from "react"

function Timer(){
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const handleIncrement = () => {
        setCount(Number(input) + 1);
        setInput(Number(input) + 1);
      };
    return(
        <>
        <h2>{count}</h2>
      <input
        type="number"
        placeholder="Enter"
        onChange={(e) => setInput(e.target.value)}
      />
        <button onClick={handleIncrement}>Increase</button>
        </>
    )
}


export default Timer;