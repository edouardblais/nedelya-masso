import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './TopNav.css';
import topNavLogo from '../img/topNavLogo.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const TopNav = () => {
    const navigate = useNavigate();

    const [english, setEnglish] = useState(false);

    const [homeFocus, setHomeFocus] = useState(true);
    const [aboutFocus, setAboutFocus] = useState(false);
    const [servicesFocus, setServicesFocus] = useState(false);
    const [shopFocus, setShopFocus] = useState(false);
    const [contactFocus , setContactFocus] = useState(false);

    const goToHome = () => {
        navigate('/')
    }

    const activateHome = () => {
        setAboutFocus(false);
        setServicesFocus(false);
        setShopFocus(false);
        setContactFocus(false)
        setHomeFocus(true)
    }

    const activateAbout = () => {
        setServicesFocus(false);
        setShopFocus(false);
        setContactFocus(false)
        setHomeFocus(false)
        setAboutFocus(true);
    }

    const activateServices = () => {
        setShopFocus(false);
        setContactFocus(false)
        setHomeFocus(false)
        setAboutFocus(false);
        setServicesFocus(true);
    }

    const activateShop = () => {
        setContactFocus(false)
        setHomeFocus(false)
        setAboutFocus(false);
        setServicesFocus(false);
        setShopFocus(true);
    }

    const activateContact = () => {
        setHomeFocus(false)
        setAboutFocus(false);
        setServicesFocus(false);
        setShopFocus(false);
        setContactFocus(true);
    }

    const chooseLanguage = () => {
        if (english) {
            setEnglish(false);
            navigate('/')
            activateHome();
        } else {
            setEnglish(true);
            navigate('/en');
            activateHome();
        }
    }

    if (english) {
        return (
            <div className='top-nav-box'>
                <div className="top-nav-top-box">
                    <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png"src={facebook} alt='facebook link'/></a>
                    </div>
                    <img src={topNavLogo} onClick={goToHome} alt='top nav logo' className="top-nav-logo"/>
                    <div className="top-nav-button-box">
                        <button onClick={chooseLanguage} className='top-nav-button'>Fr</button>
                    </div>
                </div>
                <div className="top-nav-bottom-box">
                    <ul className="top-nav-links">
                        <Link to='en'>
                            <li className={homeFocus? 'active-nav' : ''} onClick={activateHome}>Accueil</li>
                        </Link>
                        <Link to='en/about'>
                            <li className={aboutFocus? 'active-nav' : ''} onClick={activateAbout}>About</li>
                        </Link>
                        <Link to='en/services'>
                            <li className={servicesFocus? 'active-nav' : ''} onClick={activateServices}>Services</li>
                        </Link>
                        <Link to='en/shop'>
                            <li className={shopFocus? 'active-nav' : ''} onClick={activateShop}>Shop</li>
                        </Link>
                        <Link to='en/contact'>
                            <li className={contactFocus? 'active-nav' : ''} onClick={activateContact}>Reservation</li>
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
                    <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png" src={instagram} alt='instagram link'/></a>
                    <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png" src={facebook} alt='facebook link'/></a>
                </div>
                <img src={topNavLogo} onClick={goToHome} alt='top nav logo' className="top-nav-logo"/>
                <div className="top-nav-button-box">
                    <button onClick={chooseLanguage} className='top-nav-button'>En</button>
                </div>
            </div>
            <div className="top-nav-bottom-box">
                <ul className="top-nav-links">
                    <Link to=''>
                        <li className={homeFocus? 'active-nav' : ''} onClick={activateHome}>Accueil</li>
                    </Link>
                    <Link to='fr/a-propos'>
                        <li className={aboutFocus? 'active-nav' : ''} onClick={activateAbout}>A Propos</li>
                    </Link>
                    <Link to='fr/services'>
                        <li className={servicesFocus? 'active-nav' : ''} onClick={activateServices}>Services</li>
                    </Link>
                    <Link to='fr/boutique'>
                        <li className={shopFocus? 'active-nav' : ''} onClick={activateShop}>Boutique</li>
                    </Link>
                    <Link to='fr/contact'>
                        <li className={contactFocus? 'active-nav' : ''} onClick={activateContact}>Reservation</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default TopNav;