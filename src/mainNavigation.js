import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Registration, Login, Dashboard} from './pages';
import { VerifyAdmin, VerifyUser } from './pages/Login/verifyUser';
import React from 'react'
import MovieDetails from './pages/MovieDetails';


const MainNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie-details/:id' element={<MovieDetails/>}/>
        <Route element={<VerifyUser/>}>
          <Route path='Registration' element={<Registration/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
        <Route element={<VerifyAdmin/>}>
          <Route path='Dashboard' element={<Dashboard/>}/>
        </Route>
    </Routes>
  )
}

export default MainNavigation;