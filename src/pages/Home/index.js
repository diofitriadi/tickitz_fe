import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NowShowing from '../../components/NowShowing/NowShowing'
import MainSection from '../../components/MainSection/MainSection'
import UpcomingMovies from '../../components/UpcomingMovies/UpcomingMovies'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
import './style.css'


const Home = ()=> {
    return(
        <>
        <Navbar />
        <MainSection />
        <NowShowing />
        <UpcomingMovies />
        <Subscribe />
        <Footer />
        </>
    )
}

export default Home