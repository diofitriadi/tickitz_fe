import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Dashboard from '../../components/Dashboard/Dashboard'
import './style.css'


const Home = ()=> {
    return(
        <>
        <Navbar />
        <Dashboard />
        <Footer />
        </>
    )
}

export default Home