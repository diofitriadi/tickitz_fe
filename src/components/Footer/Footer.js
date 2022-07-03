import React from 'react'
import {Link} from 'react-router-dom'
import logo from './img/brandlogo.svg'
import ebv from './img/ebv.id.png'
import cineOne from './img/cineOne21.png'
import hiflix from './img/hiflix.png'
import facebookLogo from './img/facebookLogo.svg'
import instagramLogo from './img/instagramLogo.svg'
import twitterLogo from './img/twitterLogo.svg'
import youtubeLogo from './img/youtubeLogo.svg'
import './Footer.css'

const Footer = () => {
    return(
        <>
        <footer>
        <div className="line-1">
            <Link to="#"><img src={logo} alt="logo"/></Link>
            <p>Stop waiting in line. Buy tickets <br/>conveniently, watch movies quietly.</p>
        </div>
        <div className="line-2">
            <h3>Explore</h3>
            <div className="list">
                <h4><Link to="#">Home</Link></h4>
                <h4><Link to="#">List</Link></h4>
                <h4><Link to="#">Movie</Link></h4>
            </div>
        </div>
        <div className="line-3">
            <h4>Our Sponsor</h4>
                <div className="list">
                    <img src={ebv} alt="ebv.id" style={{marginBottom: 1 }}/>
                    <img src={cineOne} alt="Cine-One" style={{marginBottom: 1 }}/>
                    <img src={hiflix} alt="hiflix" style={{marginBottom: 1 }}/>
                </div>
        </div>
        <div className="line-4">
            <h4>Follow Us</h4>
            <ul>
                <li><img src={facebookLogo} alt="facebook"/><span>Tickitz Cinema id</span></li>
                <li><img src={instagramLogo} alt="instagram"/><span>tickitz.id</span></li>
                <li><img src={twitterLogo} alt="twitter"/><span>tickitz.id</span></li>
                <li><img src={youtubeLogo} alt="youtube"/><span>Tickitz Cinema id</span></li>
            </ul>   
        </div>
        </footer>
        <div className="footer-bottom">
            <p style={{textAlign: "center"}}>© 2020 Tickitz. All Rights Reserved.</p>
        </div>
        </>
    )
}

export default Footer