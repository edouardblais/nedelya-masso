import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './TopNav.css';
import topNavLogo from '../img/topNavLogo.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const TopNav = () => {
    const navigate = useNavigate();

    const [english, setEnglish] = useState(false);
  
    const goToHome = () => {
        if (english) {
            navigate('/nedelya-masso/en')
        } else {
            navigate('/nedelya-masso');
        }
    }

    const chooseLanguage = () => {
        if (english) {
            setEnglish(false);
            navigate('/nedelya-masso')
        } else {
            setEnglish(true);
            navigate('/nedelya-masso/en');
        }
    }

    if (english) {
        return (
            <div className='top-nav-box'>
                <div className="top-nav-top-box">
                    <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover"src={facebook} alt='facebook link'/></a>
                    </div>
                    <img src={topNavLogo} onClick={goToHome} alt='top nav logo' className="top-nav-logo"/>
                    <div className="top-nav-button-box">
                        <button onClick={chooseLanguage} className='top-nav-button'>Fr</button>
                    </div>
                </div>
                <div className="top-nav-bottom-box">
                    <ul className="top-nav-links">
                        <Link to='nedelya-masso/en'>
                            <li>Home</li>
                        </Link>
                        <Link to='nedelya-masso/en/about'>
                            <li>About</li>
                        </Link>
                        <Link to='nedelya-masso/en/services'>
                            <li>Services</li>
                        </Link>
                        <Link to='nedelya-masso/en/shop'>
                            <li>Shop</li>
                        </Link>
                        <Link to='nedelya-masso/en/contact'>
                            <li>Reservation</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className='top-nav-box'>
            <div className="top-nav-top-box">
                <div className="top-nav-socialmedia-box">
                    <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                    <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover" src={facebook} alt='facebook link'/></a>
                </div>
                <img src={topNavLogo} onClick={goToHome} alt='top nav logo' className="top-nav-logo"/>
                <div className="top-nav-button-box">
                    <button onClick={chooseLanguage} className='top-nav-button'>En</button>
                </div>
            </div>
            <div className="top-nav-bottom-box">
                <ul className="top-nav-links">
                    <Link to='nedelya-masso'>
                        <li>Accueil</li>
                    </Link>
                    <Link to='nedelya-masso/fr/a-propos'>
                        <li>À Propos</li>
                    </Link>
                    <Link to='nedelya-masso/fr/services'>
                        <li>Services</li>
                    </Link>
                    <Link to='nedelya-masso/fr/boutique'>
                        <li>Boutique</li>
                    </Link>
                    <Link to='nedelya-masso/fr/contact'>
                        <li>Réservation</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default TopNav;