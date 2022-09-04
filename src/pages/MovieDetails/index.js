import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import NavUser from "../../components/NavUser/NavUser"
import Footer from "../../components/Footer/Footer"
import './style.css'




const ViewMovieDetails = () => {

  // eslint-disable-next-line
  const {id_movies : id_movies} = useParams()
  const [movieDetails, setMovieDetails] = useState([])


  useEffect(()=> {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BE}/api/v1/movies/${id_movies}`,
    }).then((res)=> {
      setMovieDetails(res.data.data)
    }).catch((err)=> {
      console.log(err)
    })
  }, [])


  return (
    <>
    <NavUser/>
    {movieDetails.map((movies, index) => {
      return (
        <>
         <div className='details-container'>
          <div className='details-main'>
            <div className='details-image'>
              <img 
                src={`${process.env.REACT_APP_URL_BE}/uploads/${movies.cover}`} 
                alt={movies.title}
                className='image-style'/>
            </div>
            <div className='details-text'>
              <div className='details-text-head'>
                <h1>{movies.title}</h1>
                <h3>{movies.categories}</h3>
              </div>
              <div className='details-text-main'>
                <div className='details-text-main-col-1'>
                  <h5>Release date</h5>
                  <p>{moment(movies.release_date).format('DD MMMM YYYY')}</p>
                </div>
                <div className='details-text-main-col-2'>
                  <h5>Director</h5>
                  <p>{movies.director}</p>
                </div>
              </div>
              <div className='details-text-main-2'>
                <div className='details-text-main-2-col-1'>
                    <h5>Duration</h5>
                    <p>{movies.duration}</p>
                </div>
                <div className='details-text-main-2-col-2'>
                    <h5>Casts</h5>
                    <p>{movies.casts}</p>
                </div>                
              </div>
              <div className='details-text-2'>
                <h5>Synopsis</h5>
                <p>{movies.synopsis}</p>  
              </div>     
            </div>
          </div>
         </div>
        </>
      );
    })}
    <Footer/>
    </>
  )
}

export default ViewMovieDetails