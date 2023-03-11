import React from 'react';
import './about.css';
import Nedhappy from '../img/nedhappy.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import Reseau from '../img/reseau.jpg';

const APropos = () => {
    return (
        <main className='about-box'>
            <div className='about-subbox'>
                <div className='image-box'>
                    <img src={Nedhappy} alt='Nedelya' className='about-image'/>
                </div>
                <div className='about-text-box'>
                    <div className='about-title-box'>
                        <h1 className='about-name'>Nedelya Savcheva</h1>
                        <h2 className='about-title'>Masso-kinesithérapeute</h2>
                    </div>
                    <p className='about-text'>
                        Diplômée de l’Académie de massage scientifique, Nedelya est une massothérapeute  
                        pratiquant depuis 2018. Étant une passionnée d’escalade et désirant mieux comprendre les besoins des athlètes,
                        Nedelya s'est spécialisée en masso-kinésitherapie volet sportif.
                    </p>
                    <p className='about-text'>
                        Sa soif de connaissance et son désir d’apporter un traitement optimal à ses clients
                        l’ont poussé à cumuler plus de 300 heures de formation continue à l’institut de massothérapie Kiné-Concept - Guijek.
                        Aujourd’hui, Nedelya combine ses deux grandes passions en pratiquant dans trois centres d’escalade de la région de Montréal,
                        soit le Bloc Shop, le Café Bloc et le Hook Bouldering.
                    </p>
                    <div className='image-box'>
                        <img src={Reseau} alt='Member of Masso Network' className='reseau-image'/>
                    </div>
                </div>
            </div>
            <div className='know-more-box'>
                <div className='know-more-sub-box'>
                    <h3 className='about-know-more-title'>Vous aimeriez en savoir plus?</h3>
                    <h4 className='about-know-more-sub-title'>N'hésitez-pas à contacter Nedelya!</h4>
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

export default APropos;