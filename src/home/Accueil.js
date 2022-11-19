import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';

const Accueil = () => {
    return (
        <div className='home-box'>
            <div className='overview-box'>
                <div className='text-box'></div>
                <div className='image-box'></div>
            </div>
            <div className='overview-box'>
                <div className='text-box'></div>
                <div className='image-box'></div>
            </div>
            <div className='overview-box'>
                <div className='text-box'>
                    <p className='home-text'>Ned est pro. Engage Ned.</p>
                    <button className='home-btn'>EN SAVOIR PLUS</button>
                </div>
                <div className='image-box'>
                    <img src={Nedso} alt='picture of Ned' className='home-image'/>
                </div>
            </div>
            <div className='overview-box'>
                <div className='text-box'></div>
                <div className='image-box'></div>
            </div>
        </div>
    )
}

export default Accueil;