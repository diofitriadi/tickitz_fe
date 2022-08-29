import logo from './img/brandlogo.svg'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { AuthLogout } from '../../redux/action/Auth';
import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './NavUser.css';
// import './tes.scss'




const NavUser = ()=> {
    const dispatch = useDispatch()
    const {isLogin} = useSelector((state)=> state.auth)
    const [ toggle, setToggle ] = useState(false)
    return(
        <>
        <nav className='navbar'>
            <div className='container'>
            <div className='logo'>
                <Link to="/"><div className='imgbox'><img src={logo} alt="logo" title="Tickitz" /></div></Link>
                <div className={toggle ? 'navmenu active' : 'navmenu'}>
                <div className="links">
                <Link to="/"><div className='navlinks active'>Home</div></Link>
                <Link to="/movies"><div className='navlinks'>List Movies</div></Link>
                </div>
                <div className='navbutton' >
                    <Link to={'/'}>
                        {isLogin ? (
                            <button className='button-nav' onClick={()=> {
                                dispatch(AuthLogout())
                                alert('Logout Success')
                            }}>Logout</button>
                        ): (<Link to='/registration'><button className='button-nav'>Sign-Up</button></Link>)}
                    </Link>
                </div>
                </div>
                <div className="nav-icon" onClick={() => setToggle(!toggle)}>
                {toggle ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            </div>
        </nav>
        </>
    )
}
export default NavUser;