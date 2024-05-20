import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function DisplayData() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(5);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(null);
  const[input,setInput] = useState("")

  const handleButton = () => {
    if (!active) {
      setDisplay(data.length);
    } else {
      setDisplay(5);
    }
    setActive(!active);
  };

  const handleChange = (id) => {
    setShow(show === id ? null : id);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
    <div>
    <Link to="/movie">
        <button style={{color:"orange"}}>
            Watch Movie
        </button>
    </Link>
    </div>
    <input type="text" value={input} placeholder="search" onChange={(e) => setInput(e.target.value)}/>
    <div>
        <button >Submit</button>
    </div>
    <div style={{display:"flex",justifyContent:"space-between", flexWrap:"wrap", backgroundColor:"gray",gap:10, marginTop:20}}>
      {data &&
        data.slice(0, display).filter((ele) => ele.title.toLowerCase().includes(input.toLocaleLowerCase()) || ele.body.toLowerCase().includes(input.toLowerCase()) ).map((ele) => {
          const { id, title, body } = ele;
          return (
           
            <div  style={{
                border: "1px solid black",
                padding: "10px",
                width: "calc(20% - 10px)",
                minHeight: "150px",
                boxSizing: "border-box",
                overflow: "hidden",
                position: "relative",
               
              }} key={id} onClick={() => handleChange(id)}>
              <h2>{id}</h2>
              <h3>{title}</h3>
              {show === id ? <p>{body}</p> : ""}
              <Link to={`/card/${id}`}>
                <button>Details</button>
              </Link>
            </div>
          );
        })}
         </div>
      <button style={{color:"orange", marginTop:20}} onClick={handleButton}>
        {active ? "Show Less" : "Show More"}
      </button>
    </>
  );
}

export default DisplayData;
