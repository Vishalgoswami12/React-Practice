import React,{useState,useEffect} from "react"

function DisplayData(){
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(5);
    const [active, setActive] = useState(false);
    const handleButton = (e) => {
      if ((e.target.innerText = "Show More")) {
        setDisplay(data.length);
      } else {
        setDisplay(display);
        setActive(false);
      }
    };
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return(
        <>
          {data &&
        data.slice(0, display).map((ele) => {
          const { id, title, body } = ele;
          return (
            <div>
              <h2>{id}</h2>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          );
        })}
         <button onClick={handleButton}>
        {active ? "Show Less" : "Show More"}
      </button>
        </>
    )
}

export default DisplayData;