import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './TopNav.css';
import topNavLogo from '../img/topNavLogo.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [english, setEnglish] = useState(false);

    useEffect(() => {
        if (location.pathname.startsWith('/en')) {
            setEnglish(true)
        }
    }, [location])
  
    const goToHome = () => {
        if (english) {
            navigate('/en')
        } else {
            navigate('/');
        }
    }

    const chooseLanguage = () => {
        if (english) {
            setEnglish(false);
            navigate('/')
        } else {
            setEnglish(true);
            navigate('/en');
        }
    }

    if (english) {
        return (
            <nav aria-label='main navigation' className='top-nav-box'>
                <div className="top-nav-top-box">
                    <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover"src={facebook} alt='facebook link'/></a>
                    </div>
                    <img src={topNavLogo} onClick={goToHome} alt='Nedelya massage logo' className="top-nav-logo"/>
                    <div className="top-nav-button-box">
                        <button onClick={chooseLanguage} alt='choisir langue francaise' className='top-nav-button'>Fr</button>
                    </div>
                </div>
                <div className="top-nav-bottom-box">
                    <ul className="top-nav-links">
                        <li><Link to='en'>Home</Link></li>
                        <li><Link to='en/about'>About</Link></li>
                        <li><Link to='en/services'>Services</Link></li>
                        <li><Link to='en/shop'>Shop</Link></li>
                        <li><Link to='en/contact'>Reservation</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <nav arial-label='main navigation' className='top-nav-box'>
            <div className="top-nav-top-box">
                <div className="top-nav-socialmedia-box">
                    <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                    <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover" src={facebook} alt='facebook link'/></a>
                </div>
                <img src={topNavLogo} onClick={goToHome} alt='nedelya massage logo' className="top-nav-logo"/>
                <div className="top-nav-button-box">
                    <button onClick={chooseLanguage} className='top-nav-button' alt='choose english language'>En</button>
                </div>
            </div>
            <div className="top-nav-bottom-box">
                <ul className="top-nav-links">
                    <li><Link to=''>Accueil</Link></li>
                    <li><Link to='fr/a-propos'>À Propos</Link></li>
                    <li><Link to='fr/services'>Services</Link></li>
                    <li><Link to='fr/boutique'>Boutique</Link></li>
                    <li><Link to='fr/contact'>Réservation</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav;