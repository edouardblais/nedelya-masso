import React from 'react';
import './shop.css';
import skalaCB from '../img/skalacb.jpg';
import skalaHand from '../img/skalahand.jpeg';
import nedMass2 from '../img/nedmass2.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import skalaLogo from '../img/skalaLogo2.png';
import { Link } from 'react-router-dom';

const Boutique = () => {
    return (
        <main className='services-box'>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <img src={skalaLogo} alt='skala logo' className='shop-logo'/>
                    <p className='shop-text'>
                        Produit par Nedelya, Skala est un baume réparateur dédié aux grimpeurs fait exclusivement d’ingrédients naturels
                    </p>
                </div>
                <div className='image-box'>
                    <img src={skalaHand} alt='skala in hands' className='shop-images'/>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='image-box'>
                    <img src={skalaCB} alt='skala on a shelf' className='shop-images'/>
                </div>
                <div className='services-text-box'>
                    <p className='shop-title'>Disponible en magasin!</p>
                    <p className='shop-text'>
                        Procurez-vous du Skala au <a href='https://www.cafebloc.com/' className='shop-link'>Café Bloc</a> et au <a className='shop-link' href='https://www.hookbouldering.com/'>Hook Bouldering</a>, ou encore en contactant directement <Link className='shop-link' to='../fr/contact'>Nedelya</Link>!
                    </p>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                <p className='shop-title'>Certificats-cadeaux</p>
                    <p className='shop-text'>
                        Offrez un soin en cadeau! Des certificats-cadeaux sont disponibles pour des massages de 60 ou de 90 minutes. Contactez <Link className='shop-link-alternative' to='../fr/contact'>Nedelya</Link> pour vous en procurer!
                    </p>
                </div>
                <div className='image-box'>
                    <img src={nedMass2} alt='nedelya massaging' className='shop-images'/>
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

export default Boutique;