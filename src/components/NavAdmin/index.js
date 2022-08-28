import React from 'react'
import {Link} from 'react-router-dom'
import logo from './img/brandlogo.svg'
import './NavAdmin.css';
import { AuthLogout } from '../../redux/action/Auth';
import {useSelector, useDispatch} from 'react-redux'

const NavAdmin = ()=> {
    const dispatch = useDispatch()
    
    const {isLogin} = useSelector((state)=> state.auth)
    return(
        <nav>
            <div className="logo">
                <Link to="#"><img src={logo} alt="logo"/></Link>
            </div>
                <input type="checkbox" id="click"/>
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><Link to="active" href="#">Dashboard</Link></li>
                    <li><Link to="main-page/main-2.html">Manage Movies</Link></li>
                    <li><Link to="Login Page/registration.html">Manage Schedules</Link></li>
                    <li><Link to={'/'}>
                            {isLogin ? (
                                <button className='rounded-2' onClick={()=> {
                                    dispatch(AuthLogout())
                                    alert('Logout Success')
                                }}>Logout</button>
                            ): 
                            (<Link to='/registration'><button className='rounded-2'>Sign-Up</button></Link>)}
                        </Link>
                    </li>
                    <p> © 2020 Tickitz. All Rights Reserved.</p>
                </ul>
            </nav>
    )
}
export default NavAdmin;