import React, { useState, useEffect } from "react";

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
    <input type="text" value={input} placeholder="search" onChange={(e) => setInput(e.target.value)}/>
      {data &&
        data.slice(0, display).filter((ele) => ele.title.toLowerCase().includes(input.toLocaleLowerCase()) || ele.body.toLowerCase().includes(input.toLowerCase()) ).map((ele) => {
          const { id, title, body } = ele;
          return (
            <div key={id} onClick={() => handleChange(id)}>
              <h2>{id}</h2>
              <h3>{title}</h3>
              {show === id ? <p>{body}</p> : ""}
            </div>
          );
        })}
      <button onClick={handleButton}>
        {active ? "Show Less" : "Show More"}
      </button>
    </>
  );
}

export default DisplayData;