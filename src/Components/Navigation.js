import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
function Navigation({settext ,setrate}) {
  return (
<Navbar bg="dark" expand="lg" variant='dark' className='navbares'>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"red",fontFamily:"-moz-initial",fontSize:"50px",fontStyle:"oblique"}}>NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">ALL Movies</Nav.Link>
            <Nav.Link href="#action2">Kids</Nav.Link>
            <Nav.Link href="#action2">Comedie</Nav.Link>
            <Nav.Link href="#action2">Action</Nav.Link>
          </Nav>
          <div className='stars'>
          <ReactStars count={5} size={24} activeColor="#ffd700" onChange={(newRating)=>setrate(newRating)}/>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             style={{backgroundColor:"black", border:"white", color:"white"}}
             onChange={(e)=>settext(e.target.value)}
             />
            <Button variant="outline-success" style={{background:"red", border:"none",color:"white"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation