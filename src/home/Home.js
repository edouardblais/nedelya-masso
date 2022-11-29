import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';
import Nedmass from '../img/nedmass.jpg';
import { useNavigate } from 'react-router-dom';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const Home = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/nedelya-masso/en/about')
    }

    const goToServices = () => {
        navigate('/nedelya-masso/en/services')
    }

    const goToReservation = () => {
        navigate('/nedelya-masso/en/contact')
    }

    const goToShop = () => {
        navigate('/nedelya-masso/en/shop')
    }
    return (
        <div className='home-box'>
            <div className='overview-box'>
                <div className='image-box-stretch nedclimb'>
                    <div className='text-box-nedclimb'>
                        <p className='home-text'>Massotherapy for athletes by an athlete</p>
                        <button className='home-btn' onClick={goToReservation}>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='text-box'>
                    <p className='home-text'>Whatever your need, Ned can help you.</p>
                    <button className='home-btn' onClick={goToServices}>SERVICES</button>
                </div>
                <div className='image-box'>
                    <img src={Nedmass} alt='massaging a client' className='home-image'/>
                </div>
            </div>
            <div className='overview-box'>
                <div className='image-box-stretch skala'>
                    <div className='text-box-skala'>
                        <p className='home-text'>Recommended products</p>
                        <button className='home-btn' onClick={goToShop}>SHOP</button>
                    </div>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='image-box'>
                    <img src={Nedso} alt='Ned' className='home-image'/>
                </div>
                <div className='text-box'>
                    <p className='home-text'>Ned is pro. Hire Ned.</p>
                    <button className='home-btn' onClick={goToAbout}>KNOW MORE</button>
                </div>
            </div>
            <div className='know-more-box'>
                <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover"src={facebook} alt='facebook link'/></a>
                </div>
                <div className='know-more-sub-box'>
                    <p className='about-text'>(514) 582-4130</p>
                    <a href = "mailto: massotherapie.nedelya@gmail.com" className='about-text'>massotherapie.nedelya@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Home;