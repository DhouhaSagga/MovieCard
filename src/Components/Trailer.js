import React from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

function Trailer({movies}) {
    const params =useParams();
    const movie=movies.filter((el)=>el.name===params.name)[0];
  return (
    <div className='yes'>
        <div className='no'>
      <h1 style={{color:"red",marginTop:"250px"}}>{movie.name}</h1>
      <p>{movie.description}</p>
      <div className='starss'><ReactStars  count={5} 
      size={24} activeColor="#ffd700" 
      edit={false} value={movie.rating}/>
      </div>
      </div>
      <img src={movie.posterurl} className='mag' style={{minHeight:"550px",maxHeight:"550px",maxWidth:"500px",minWidth:"500px",marginTop:"70px" ,marginRight:"50px",marginLeft:"50px",marginBottom:"70px"}}/>
      
    </div>
  )
}

export default Trailer