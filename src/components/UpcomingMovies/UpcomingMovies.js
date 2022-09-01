import React from 'react'
import {Link} from 'react-router-dom'
import blackWidowPic from './img/blackWidow.png'
import theWitchesPic from './img/theWitches.png'
import tenetPic from './img/tenet.png'
import './UpcomingMovies.css';


const UpcomingMovies = ()=> {
    return(
        <>
        <div className='upcoming-movies'>
            <section className='header-upcoming'>
                <h3><Link to="">Upcoming Movies</Link></h3>
                <h4><Link to="">View All</Link></h4>
            </section>
        </div>
        <div className='card-date'>
            <h4><button className="button-showing">September</button></h4>
            <h4><button className="button-showing">October</button></h4>
            <h4><button className="button-showing">November</button></h4>
            <h4><button className="button-showing">Desember</button></h4>
            <h4><button className="button-showing">January</button></h4>
            <h4><button className="button-showing">February</button></h4>
            <h4><button className="button-showing">March</button></h4>
            <h4><button className="button-showing">April</button></h4>
            <h4><button className="button-showing">May</button></h4>
        </div>
        <div className="card-movies">
            <div className="card-images">
                <img src={blackWidowPic} alt="black widow"/>
            </div>
            <div className="card-images">
                <img src={theWitchesPic} alt="the witches"/>
            </div>
            <div className="card-images">
                <img src={tenetPic} alt="tenet"/>
            </div>
            <div className="card-images">
                <img src={blackWidowPic} alt="black widow"/>
            </div>
            <div className="card-images">
                <img src={theWitchesPic} alt="the witches"/>
            </div>
        </div>
        </>
    )
}
export default UpcomingMovies;