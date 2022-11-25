import React from 'react';
import './about.css';
import Nedhappy from '../img/nedhappy.jpg';

const About = () => {
    return (
        <div className='about-box'>
            <div className='overview-box'>
                <div className='image-box'>
                    <img src={Nedhappy} alt='Ned' className='home-image'/>
                </div>
                <div className='about-text-box'>
                    <p className='about-text'>Ned est pro. Engage Ned.</p>
                </div>
            </div>
        </div>
    )
}

export default About;