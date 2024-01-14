import React ,{useState,useEffect}from 'react'
import "./RowPost.css"
import axios from '../axios'
import { ImageUrl,Api_Key } from '../../constants/constant'
import YouTube from 'react-youtube'

function RowPost(props) {
     const [movies,setMovies]=useState([])
     const [urlid,setUrlId]=useState('')
      useEffect(()=>{
         axios.get(props.url).then((responds=>{
          console.log(responds.data)
          setMovies(responds.data.results)
         })).catch(err=>{
          alert('network error')
         })
      },[])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      const handleMovie=(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${Api_Key}&languages=en-US`).then((responds=>{
          if(responds.data.results.length!==0){
            setUrlId(responds.data.results[0])
          }else{
            console.log('trailer not available')
          }
        }))
      }
  return (
    <div className='row'>
      <h2>{props.title} </h2>
      <div className='posters'>
      {movies.map((obj)=>
      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'}  alt='poster'src={`${ImageUrl+obj.backdrop_path}`}/>

      )}
      
       

      </div>
     {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost
