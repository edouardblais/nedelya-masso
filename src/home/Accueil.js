import React from 'react';
import './home.css';
import Nedso from '../img/nedso.jpg';
import Nedmass from '../img/nedmass.jpg';

const Accueil = () => {
    return (
        <div className='home-box'>
            <div className='overview-box'>
                <div className='image-box-stretch nedclimb'>
                    <div className='text-box-nedclimb'>
                        <p className='home-text'>La massothérapie pour les athlètes par une athlète</p>
                        <button className='home-btn'>RÉSERVEZ MAINTENANT</button>
                    </div>
                </div>
            </div>
            <div className='overview-box'>
                <div className='text-box'>
                    <p className='home-text'>Peu importe votre bobo, Ned peut vous aider.</p>
                    <button className='home-btn'>SERVICES</button>
                </div>
                <div className='image-box'>
                    <img src={Nedmass} alt='massaging a client' className='home-image'/>
                </div>
            </div>
            <div className='overview-box'>
                <div className='image-box-stretch skala'>
                    <div className='text-box-skala'>
                        <p className='home-text'>Produits recommandés</p>
                        <button className='home-btn'>BOUTIQUE</button>
                    </div>
                </div>
            </div>
            <div className='overview-box'>
                <div className='image-box'>
                    <img src={Nedso} alt='Ned' className='home-image'/>
                </div>
                <div className='text-box'>
                    <p className='home-text'>Ned est pro. Engage Ned.</p>
                    <button className='home-btn'>EN SAVOIR PLUS</button>
                </div>
            </div>
        </div>
    )
}

export default Accueil;