import React from 'react'
import landingImg from './img/landingImage.png'
import './MainSection.css'

const MainSection = () => {
    return(
    <main>
        <section>
            <h4>Nearest Cinema, Newest Movie<br/><span>FIND OUT NOW!</span></h4>
            <img src={landingImg} alt="landingImg"/>
        </section>
    </main>
    )
}

export default MainSection