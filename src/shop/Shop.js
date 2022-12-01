import React from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import skalaCB from '../img/skalacb.jpg';
import skalaHand from '../img/skalahand.jpeg';
import nedMass2 from '../img/nedmass2.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const Shop = () => {
    return (
        <main className='shop-box'>
            <div className='shop-sub-box'>
                <div className='shop-image-box-left'>
                    <img src={skalaHand} alt='skala in hands' className='skalahand'/>
                </div>
                <div className='shop-text-box-right'>
                    <p className='shop-text'>Produced by Nedelya, Skala is a repairing balm dedicated to climbers made exclusively from natural ingredients</p>
                </div>
            </div>
            <div className='shop-sub-box'>
                <div className='shop-text-box-left'>
                    <p className='shop-text'>Get Skala at <a href='https://www.cafebloc.com/' className='shop-link'>Cafe Bloc</a> and <a className='shop-link' href='https://www.hookbouldering.com/'>Hook Bouldering</a>, or simply contact <Link className='shop-link' to='../nedelya-masso/en/contact'>Nedelya</Link>!</p>
                </div>
                <div className='shop-image-box-right'>
                    <img src={skalaCB} alt='skala at cafe bloc' className='skalacb'/>
                </div>
            </div>
            <div className='shop-sub-box'>
                <div className='shop-image-box-left-alternative'>
                    <img src={nedMass2} alt='nedelya massaging' className='nedmass2'/>
                </div>
                <div className='shop-text-box-right-alternative'>
                    <p className='shop-text'>Give Nedelya as a gift! Gift certificats are available for massages of 60 or 90 minutes. Contact <Link className='shop-link-alternative' to='../nedelya-masso/fr/contact'>Nedelya</Link> to get some now!</p>
                </div>
            </div>
            <footer className='know-more-box'>
                <div className="top-nav-socialmedia-box">
                        <a href="https://www.instagram.com/massotherapie.nedelya/?hl=en"><img className="top-nav-socialmedia-png pink-hover" src={instagram} alt='instagram link'/></a>
                        <a href='https://www.facebook.com/nedelya.massage'><img className="top-nav-socialmedia-png blue-hover"src={facebook} alt='facebook link'/></a>
                </div>
                <div className='know-more-sub-box'>
                    <p className='about-text'>(514) 582-4130</p>
                    <a href = "mailto: massotherapie.nedelya@gmail.com" className='about-text'>massotherapie.nedelya@gmail.com</a>
                </div>
            </footer>
        </main>
    )
}

export default Shop;