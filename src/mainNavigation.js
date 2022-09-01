import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Registration, Login, AdminDashboard, ViewMovieDetails, ViewAllMovies} from './pages';
import { VerifyAdmin, VerifyUser } from './pages/Login/verifyUser';
import React from 'react'


const MainNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/' element={<ViewAllMovies/>}/>
        <Route path='/movies/details/:id' element={<ViewMovieDetails/>}/>
          <Route element={<VerifyUser/>}>
            <Route path='Registration' element={<Registration/>}/>
            <Route path='Login' element={<Login/>}/>
          </Route>
        <Route element={<VerifyAdmin/>}>
          <Route path='Dashboard' element={<AdminDashboard/>}/>
        </Route>
    </Routes>
  )
}

export default MainNavigation;