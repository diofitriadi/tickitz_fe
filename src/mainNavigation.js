import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Registration, Login} from './pages';
import { VerifyUser } from './pages/Login/verifyUser';



const MainNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/' element={<VerifyUser/>}>
          <Route path='Registration' element={<Registration/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
    </Routes>
  )
}

export default MainNavigation;