import React, { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom";
function DetailsPage(){
    const[data,setData]  = useState([])
    const{id} = useParams()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => res.json())
        .then((data) => setData(data.find(ele => ele.id === Number(id))))
    },[])

    return(
        <>
        <Link to="/">
            <button style={{color:"orange"}} >Back to home page</button>
        </Link>
        <div style={{backgroundColor:"gray",padding:20, marginTop:20}}>
        <h2>Title: {data?.title}</h2>
        <p style={{fontSize:27,fontWeight:"bold"}} >Body:{data?.body}</p>
        </div>
    
        </>
    )
}


export default DetailsPage;