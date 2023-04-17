import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
export default function Moviecards({el}) {
  return (
    <div>
      <Link  to={`/trailer/${el.name}`} style={{textDecoration:"none" ,color:"white"}}>
      <Card style={{ width: '18rem',background:"black" ,margin:"20px 10px", position:"static"}} className='moviecard'>
      <Card.Img variant="top" src={el.posterurl} style={{minHeight:"250px" ,maxHeight:"250px"}} />
      <Card.Body>
        <Card.Title style={{color:"red"}}>{el.name}</Card.Title>
        <Card.Text style={{minHeight:"220px", maxHeight:"220px", font:"justify"}}>
          {el.description}
          <div className='starss'><ReactStars  count={5} size={24} activeColor="#ffd700" edit={false} value={el.rating}/></div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}
