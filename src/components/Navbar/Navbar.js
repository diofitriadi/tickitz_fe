import logo from './img/brandlogo.svg'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { AuthLogout } from '../../redux/action/Auth';
import React, { useEffect } from 'react';
import './Navbar.css';



const Navbar = ()=> {
    const dispatch = useDispatch()
    const {isLogin} = useSelector((state)=> state.auth)
    const navigate = useNavigate()
    // useEffect(()=> {
    //     if(!isLogin) {
    //         navigate('/login', {replace: true})
    //     }
    // }, [isLogin])
    return(
        <>
        <nav>
            <div className="logo">
                <Link to="#"><img src={logo} alt="logo"/></Link>
            </div>
                <input type="checkbox" id="click"/>
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><Link to="active" href="#">Home</Link></li>
                    <li><Link to="main-page/main-2.html">List Movies</Link></li>
                    {/* harus diganti tombol button ID */}
                    <li><Link to={'/'}>
                        {isLogin ? (
                            <button onClick={()=> {
                                dispatch(AuthLogout())
                                alert('Logout Success')
                            }}>Logout</button>
                        ): (
                        <Link to='/Registration'><button>Sign-Up</button></Link>
                        )}
                        </Link>
                    </li>
                    <p> © 2020 Tickitz. All Rights Reserved.</p>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;