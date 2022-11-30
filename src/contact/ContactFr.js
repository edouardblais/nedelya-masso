import React from 'react';
import './contact.css';
import hook from '../img/hook.png';
import cafebloc from '../img/cafebloc.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const ContactFr = () => {
    return (
        <div className='contact-box'>
            <div className='text-box orange-background'>
                <h2 className='home-text'>Réservez votre séance de massage avec Nedelya ici!</h2>
            </div>
            <div className='overview-box with-padding'>
                <div className='image-box'>
                    <img src={cafebloc} alt='cafe bloc location' className='contact-image'/>
                </div>
                <div className='text-box'>
                    <p className='home-text'>Café Bloc</p>
                    <p className='about-text'>1209-1211 St Laurent Blvd, Montreal, Quebec H2X 2S6</p>
                    <p className='about-text'>(438) 794-3874</p>
                    <a className='home-btn' href='https://www.gorendezvous.com/fr/cafebloc/'>Réserve Maintenant!</a>
                </div>
            </div>
            <div className='overview-box with-padding'>
                <div className='text-box'>
                    <p className='home-text'>Hook Bouldering</p>
                    <p className='about-text'>2101 Rue Nobel, Sainte-Julie, QC J3E 1Z8</p>
                    <p className='about-text'>(450) 922-7734</p>
                    <a className='home-btn' href='https://www.hookbouldering.com/services'>Réserve Maintenant!</a>
                </div>
                <div className='image-box'>
                    <img src={hook} alt='hook bouldering location' className='contact-image'/>
                </div>
            </div>
            <div className='ned-reservation-box'>
                <div className='know-more-sub-box'>
                    <h3 className='about-know-more-title'>Sinon n'hésitez-pas à réservez directement avec Nedelya via n'importe quel des liens ci-dessous!</h3>
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
        </div>
    )
}

export default ContactFr;