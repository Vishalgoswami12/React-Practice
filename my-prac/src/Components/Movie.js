import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";


function Movie(){
    const[data,setData] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.json())
        .then((data) => setData(data))
    })
    return (
        <>
        <h1>Movies</h1>
        <Link to="/card">
            <button>Cards</button>
        </Link>
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10,}}>
        {
            data && 
            data.map((ele) => {
                let{name,language,genres,rating,runtime,image,id} = ele.show
                return(
                    <>
                    <div style={{
                          border: "1px solid black",
                          padding: "10px",
                          width: "calc(20% - 10px)",
                          minHeight: "150px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                          position: "relative",
                          backgroundColor:"gray"
                    }}>
                    <img src={image?.medium} alt="img"/>
                    <h2>{name}</h2>
                    <h3>Language-{language}</h3>
                    <h3>Genres-{genres}</h3>
                    <h3>Runtime-{runtime}</h3>
                    <h4>Rating-{rating.average}</h4>
                    <Link to={`/movie/${id}`}>
                        <button>Book Ticket</button>
                    </Link>
                    </div>
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default Movie;