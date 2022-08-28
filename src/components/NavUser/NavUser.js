import logo from './img/brandlogo.svg'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { AuthLogout } from '../../redux/action/Auth';
import React from 'react';
import './NavUser.css';




const NavUser = ()=> {
    const dispatch = useDispatch()
    const {isLogin} = useSelector((state)=> state.auth)
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
                    <li><Link to="active" href="#" style={{color: '#5F2EEA'}}>Home</Link></li>
                    <li><Link to="main-page/main-2.html">List Movies</Link></li>
                    <li><Link to={'/'}>
                            {isLogin ? (
                                <button className='rounded-2' onClick={()=> {
                                    dispatch(AuthLogout())
                                    alert('Logout Success')
                                }}>Logout</button>
                            ): (
                            <Link to='/registration'><button className='rounded-2'>Sign-Up</button></Link>
                            )}
                        </Link>
                    </li>
                    <p> © 2020 Tickitz. All Rights Reserved.</p>
                </ul>
            </nav>
        </>
    )
}
export default NavUser;