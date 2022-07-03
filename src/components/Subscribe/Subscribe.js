import React from 'react'
import './Subscribe.css';


const Subscribe = ()=> {
    return(
        <>
        <div className="subscribe">
            <h2>Be the Vanguard of</h2>
            <h1>MovieGoers</h1>
                <div className="input-subscribe">
                    <input type="e-mail" name="Subscribe" placeholder="Type your e-mail"/>
                    <button>Join Now!</button>
                </div>
                <p style={{fontSize: "small", textAlign: "center"}}>By joining you as a Tickitz member,<br/>we will always send you the latest updates via email .</p>
        </div>
        </>
    )
}
export default Subscribe;