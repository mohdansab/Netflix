import React, { useState } from 'react'
import { Api_Key,ImageUrl } from '../../constants/constant'
import "./Banner.css"
import { useEffect } from 'react'
import axios from '../axios'


function Banner() {
  const [movie, setMovie]=useState()
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((responds)=>{
    console.log(responds.data.results[0])
    setMovie(responds.data.results[0])
  })
  }, [])
  return (
    

    <div 
    style={{ backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ''})` }}
    className='banner'>
        <div className='content'>
         <h1 className='title'>{movie ? movie.title :""}</h1>
         <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
     </div>
     <h1 className='discription'>{movie ? movie.overview :""}</h1>
 </div>
  <div className='fade'></div> 
      
    </div>
  )
}

export default Banner
