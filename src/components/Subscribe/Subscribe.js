import React from 'react'
import './Subscribe.css';


const Subscribe = ()=> {
    return(
        <>
        <div className='subscribe'>
            <div className='header-subs'>
                <h2>Be the Vanguard of</h2>
                <h1>MovieGoers</h1>
            </div>
            <div className='input-subs'>
                <input type="e-mail" name="Subscribe" placeholder="Type your e-mail"/>
                <button className='rounded-1 button-subs'>Join Now!</button>
            </div>
            <p className='paragraph-subs'>By joining you as a Tickitz member,<br/>we will always send you the latest updates via email .</p>
        </div>
        </>
    )
}
export default Subscribe;