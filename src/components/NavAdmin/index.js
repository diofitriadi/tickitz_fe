import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from './img/brandlogo.svg'
import './NavAdmin.css';
import { AuthLogout } from '../../redux/action/Auth';
import {useSelector, useDispatch} from 'react-redux'
import { FaBars, FaTimes } from "react-icons/fa";

const NavAdmin = ()=> {
    const dispatch = useDispatch()
    const [ toggle, setToggle ] = useState(false)
    const {isLogin} = useSelector((state)=> state.auth)
    return(
        <nav className='nav-bar'>
        <div className="container">
        <div className='nav-logo'>
            <Link to="/"><div className='imgbox'><img src={logo} alt="nav-logo" title="Tickitz" /></div></Link>
            <div className={toggle ? 'nav-menu nav-active' : 'nav-menu'}>
            <div className="link-nav">
            <Link to="/"><div className='nav-links nav-active'>Dashboard</div></Link>
            <Link to="/movies"><div className='nav-links'>Manage Movies</div></Link>
            <Link to="/"><div className='nav-links'>Manage Schedule</div></Link>
            </div>
            <div className='nav-button'>
                <Link to={'/'}>
                    {isLogin ? (
                        <button className='button-navigation' onClick={()=> {
                            dispatch(AuthLogout())
                            alert('Logout Success')
                        }}>Logout</button>
                    ): (<Link to='/registration'><button className='button-navigation'>Sign-Up</button></Link>)}
                </Link>
            </div>
            </div>
            <div className="nav-icons" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
            </div>
        </div>
        </div>
    </nav>
        // <nav>
        //     <div className="logo">
        //         <Link to="#"><img src={logo} alt="logo"/></Link>
        //     </div>
        //         <input type="checkbox" id="click"/>
        //         <label htmlFor="click" className="menu-btn">
        //             <i className="fas fa-bars"></i>
        //         </label>
        //         <ul>
        //             <li><Link to="active" href="#">Dashboard</Link></li>
        //             <li><Link to="main-page/main-2.html">Manage Movies</Link></li>
        //             <li><Link to="Login Page/registration.html">Manage Schedules</Link></li>
        //             <li><Link to={'/'}>
        //                     {isLogin ? (
        //                         <button className='rounded-2' onClick={()=> {
        //                             dispatch(AuthLogout())
        //                             alert('Logout Success')
        //                         }}>Logout</button>
        //                     ): 
        //                     (<Link to='/registration'><button className='rounded-2'>Sign-Up</button></Link>)}
        //                 </Link>
        //             </li>
        //             <p> © 2020 Tickitz. All Rights Reserved.</p>
        //         </ul>
        //     </nav>
    )
}
export default NavAdmin;