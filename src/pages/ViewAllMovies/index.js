import React from 'react'
import NavUser from '../../components/NavUser/NavUser'
import ViewMovies from '../../components/ViewAllMovies'
import Footer from '../../components/Footer/Footer'



const ViewAllMovies = () => {
  return(
    <>
      <NavUser/>
      <ViewMovies/>
      <Footer/>    
    </>

  )
}

export default ViewAllMovies