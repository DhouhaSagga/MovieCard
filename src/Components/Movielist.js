import React from 'react'
import Moviecards from './Moviecards'
import AddMovie from './AddMovie'
function Movielist({movies,setmovies,text, rate}) {

  return (
    <div>
      <div><AddMovie movies={movies} setmovies={setmovies}/></div>
    <div className ='container'>
       {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating >=rate).map((el) => (
       <Moviecards el={el}/>
       )) .reverse()}
    </div>
    </div>
  )
}

export default Movielist