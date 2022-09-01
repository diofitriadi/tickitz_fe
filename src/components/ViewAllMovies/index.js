import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'




const ViewMovies = () => {

  const [refetch, setRefetch] = useState(false)
  const [search, setSearch] = useState('title')
  const [query, setQuery] = useState ({})

  const [movieDetails, setMovieDetails] = useState({
    loading: 'false',
    results: {
        data: []
    }
  })

  useEffect( () => {
    const {title = '', order = 'title', categories = '', release_date = '', sortBy='ASC'} = query
    setMovieDetails((prevState) => ({
        ...prevState,
        loading: true
    }))
    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL_BE}/api/v1/movies/?title=${title}&categories=${categories}&release_date=${release_date}&order=${order}&sortBy=${sortBy}`
    }).then((res) => {
        setMovieDetails ({
            loading: false,
            results: res.data
        })
    })
  }, [refetch, query])

  return (
    <>
      <div className="form-filter m-5 mx-auto px-4 main-parent">
        <div className="row mb-3">
          <div className="col-4">
            <input placeholder='Search Movies' onChange={(e) => {
              setRefetch(!refetch)
              if (search === 'title') {
                setQuery({
                  title: e.target.value,
                  order: 'title'
                })
              } else if(search === 'categories') {
                setQuery({
                  categories: e.target.value,
                  order: 'categories'
                })
              } else if(search === 'release_date') {
                setQuery({
                  release_date: e.target.value,
                  order: 'release_date'
                })
              }
            }} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <select className="form-select" aria-label="Default select example" onChange={(e) => {
              setSearch(e.target.value)
            }}>
              <option defaultValue="title">Title</option>
              <option value="categories">Genre</option>
              <option value="release_date">Date</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <select className="form-select" aria-label="Default select example" onChange={(e) => {
              setQuery(prevData => ({
                ...prevData,
                sortBy: e.target.value
              }))
              setRefetch(!refetch)
              console.log("haloooo")
            }}>
              <option defaultValue="ASC">ASC</option>
              <option value="DESC">DSC</option>
                </select>
          </div>
        </div>
          <div className="cards-movie d-flex flex-wrap justify-content-between">
            {movieDetails.results.data.map((movies, index) => {
              return(
                <div className="card-size card-movie d-flex flex-column mt-5 border p-2 justify-content-center align-items-center rounded-3" key={index}>
                  <img className="card-movie-list image-size rounded-3 mt-2" src={`${process.env.REACT_APP_URL_BE}/uploads/${movies.cover}`} alt={movies.title}/>
                  <p className="text-center mt-2 mx-2">{movies.title}</p>
                  <p className="text-center mx-1">{movies.categories}</p>
                  <p className="text-center">{moment(movies.release_date).format('DD MMMM YYYY')}</p>
                  <button className="rounded-2 button-showing"><Link to="/movie-details">Details</Link></button>
                </div>
              )
            })}
          </div>
        </div>
    </>
  )
}

export default ViewMovies;