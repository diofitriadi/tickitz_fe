import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import spiderManPic from './img/spiderman.png'
import lionKingPic from './img/lionKing.png'
import johnWick3Pic from './img/johnWick3.png'
import './NowShowing.css';


const NowShowing = ()=> {
    useEffect(()=> {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/movies/',
        }).then((res)=> {
            console.log(res.data.data)
        })
    },[])
    return(
        <div className="show-toogle" style={{paddingTop: 10}}>
            <section>
                <p><Link to="#">Now Showing</Link></p>
                <p><Link to="#">view all</Link></p>
            </section>
            <div className="card-movie">
                <ul>
                    <li>
                        <div className="card-image item-1">
                            <img src={spiderManPic} alt="card-1"/>
                        </div>
                    </li>
                    <li>
                        <div className="card-image item-2">
                            <img src={lionKingPic} alt="card-2"/>
                            
                        </div>
                    </li>
                    <li>
                        <div className="card-image item-3">
                            <img src={johnWick3Pic} alt="card-3"/>
                        </div>
                    </li>
                    <li>
                        <div className="card-image item-1">
                            <img src={spiderManPic} alt="card-1"/>
                        </div>
                    </li>
                    <li>
                        <div className="card-image item-2">
                            <img src={lionKingPic} alt="card-2"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NowShowing;