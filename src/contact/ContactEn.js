import React from 'react';
import './contact.css';
import hook from '../img/hook.png';
import cafebloc from '../img/cafebloc.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const ContactEn = () => {
    return (
        <main className='contact-box'>
            <header className='text-box'>
                <h1 className='home-text'>Book your massage session!</h1>
            </header>
            <div className='overview-box with-padding'>
                <div className='image-box'>
                    <img src={cafebloc} alt='cafe bloc location' className='contact-image'/>
                </div>
                <div className='text-box'>
                    <h2 className='reserv-title'>Cafe Bloc</h2>
                    <p className='about-text'>1209-1211 St Laurent Blvd, Montreal, Quebec H2X 2S6</p>
                    <p className='about-text'>(438) 794-3874</p>
                    <a className='home-btn' href='https://www.gorendezvous.com/fr/cafebloc/'>Book Now!</a>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='text-box'>
                    <h2 className='reserv-title'>Hook Bouldering</h2>
                    <p className='about-text'>2101 Nobel St, Sainte-Julie, QC J3E 1Z8</p>
                    <p className='about-text'>(450) 922-7734</p>
                    <a className='home-btn' href='https://www.hookbouldering.com/services'>Book Now!</a>
                </div>
                <div className='image-box'>
                    <img src={hook} alt='hook bouldering location' className='contact-image'/>
                </div>
            </div>
            <div className='ned-reservation-box'>
                <div className='text-box'>
                    <h2 className='reserv-title'>...or book directly with Nedelya!</h2>
                </div>
                <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover"src={facebook} alt='facebook link'/></a>
                </div>
                <div className='know-more-sub-box'>
                    <p className='about-text'>(514) 582-4130</p>
                    <a href = "mailto: massotherapie.nedelya@gmail.com" className='about-text'>massotherapie.nedelya@gmail.com</a>
                </div>
            </div>
        </main>
    )
}

export default ContactEn;