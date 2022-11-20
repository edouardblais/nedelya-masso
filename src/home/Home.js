import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';

const Home = () => {
    return (
        <div className='home-box'>
            <div className='overview-box'>
                <div className='image-box'></div>
                <div className='text-box'>
                    <p className='home-text'>Massotherapy like you've never experienced it before.</p>
                    <button className='home-btn'>BOOK NOW</button>
                </div>
            </div>
            <div className='overview-box'>
                <div className='text-box'>
                    <p className='home-text'>Whatever your need, Ned can help you.</p>
                    <button className='home-btn'>SERVICES</button>
                </div>
                <div className='image-box'></div>
            </div>
            <div className='overview-box'>
                <div className='image-box'>
                    <img src={Nedso} alt='Ned' className='home-image'/>
                </div>
                <div className='text-box'>
                    <p className='home-text'>Ned is pro. Hire Ned.</p>
                    <button className='home-btn'>KNOW MORE</button>
                </div>
            </div>
            <div className='overview-box'>
                <div className='image-box-stretch-skala'>
                    <div className='text-box-skala'>
                        <p className='home-text'>Recommended products</p>
                        <button className='home-btn'>SHOP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;