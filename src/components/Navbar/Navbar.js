import {Link} from 'react-router-dom'
import logo from './img/brandlogo.svg'
import './Navbar.css';


const Navbar = ()=> {
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
                    <li><Link to="active" href="#">Home</Link></li>
                    <li><Link to="main-page/main-2.html">List Movies</Link></li>
                    <li><Link to="Login Page/registration.html"><button>Sign-Up</button></Link></li>
                    <p> © 2020 Tickitz. All Rights Reserved.</p>
                </ul>
            </nav>
    )
}
export default Navbar;