import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';
import Nedmass from '../img/nedmass.jpg';

const Home = () => {
    return (
        <div className='home-box'>
            <div className='overview-box'>
                <div className='image-box-stretch nedclimb'>
                    <div className='text-box-nedclimb'>
                        <p className='home-text'>Massotherapy for athletes by an athlete</p>
                        <button className='home-btn'>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='text-box'>
                    <p className='home-text'>Whatever your need, Ned can help you.</p>
                    <button className='home-btn'>SERVICES</button>
                </div>
                <div className='image-box'>
                    <img src={Nedmass} alt='massaging a client' className='home-image'/>
                </div>
            </div>
            <div className='overview-box'>
                <div className='image-box-stretch skala'>
                    <div className='text-box-skala'>
                        <p className='home-text'>Recommended products</p>
                        <button className='home-btn'>SHOP</button>
                    </div>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='image-box'>
                    <img src={Nedso} alt='Ned' className='home-image'/>
                </div>
                <div className='text-box'>
                    <p className='home-text'>Ned is pro. Hire Ned.</p>
                    <button className='home-btn'>KNOW MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Home;