import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';

const Home = () => {
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
                    <p className='home-text'>Ned is pro. Hire Ned.</p>
                    <button className='home-btn'>See Bio</button>
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

export default Home;