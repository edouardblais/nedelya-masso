import React from 'react';
import './services.css';
import suedois from '../img/suedois.jpg';
import drainage from '../img/drainage.jpg';
import therap from '../img/therap.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const ServicesFr = () => {
    return (
        <main className='services-box'>
            <div className='services-text-box'>
                <h2 className='services-title'>Qu'est-ce que la kinésithérapie?</h2>
                <p className='services-text'>
                    La kinésithérapie est le mélange du massage et du mouvement. 
                    Par le biais de mobilisations passives, actives ou contrariées, 
                    elle vise à faciliter un mouvement normal et sans douleur du corps
                     et de ses articulations. Cette approche peut tout aussi bien être incorporée dans un soin
                      de détente que dans un soin dit thérapeutique. 
                </p>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <p className='services-title'>Suédois Détente</p>
                    <p className='services-text'>
                        Le massage suédois est constitué de mouvements englobants et lents en utilisant une pression faible à moyenne. 
                        Il vise à détendre la première couche de muscles, à augmenter la circulation des liquides du corps 
                        et à procurer un effet relaxant. 
                        Puisque le massage suédois se fait sur toutes les parties du corps, il s’adresse aux personnes 
                        n’ayant pas de problèmatiques spécifiques et qui cherchent donc plutôt à se détendre et à diminuer leur stress.
                    </p>
                </div>
                <div className='image-box'>
                    <img src={suedois} alt='massage therapeuthique' className='services-image'/>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='image-box'>
                    <img src={drainage} alt='drainage lymphatique' className='services-image'/>
                </div>
                <div className='services-text-box'>
                    <p className='services-title'>Drainage Lymphatique</p>
                    <p className='services-text'>
                        Le drainage lymphatique est un massage plus doux et plus lent 
                        que le massage suédois. Il est généralement pratiqué sans huile 
                        dans le sens de la circulation lymphatique, de maniere précise et rythmée, afin de stimuler les 
                        ganglions et les vaisseaux sanguins. Il vise à aider le corps dans 
                        les processus de détoxification, de diminution de la rétention d’eau et de réduction de l’inflammation.
                    </p>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <p className='services-title'>Massage Thérapeuthique</p>
                    <p className='services-text'>
                        Le soin thérapeutique s’adresse à une problématique particulière,  
                        soit de soulager une pathologie déjà existante, de prévenir les blessures
                        ou pour faciliter la récupération suite à l’entrainement physique. 
                        Le massage thérapeutique peut s’effectuer à l’aide des procédures suivantes:
                    </p>
                    <div className='services-procedures-box'>
                        <p className='services-text'>
                            -La vacuothérapie (traitement avec ventouses)
                        </p>
                        <p className='services-text'>
                            -La fasciathérapie 
                        </p>
                        <p className='services-text'>
                            -Le massage viscéral intégré (massage ventral et décongestion du diaphragme)
                        </p>
                        <p className='services-text'>
                            -Le taping neuro-proprioceptif 
                        </p>
                        <p className='services-text'>
                            -Le massage des tissus profonds
                        </p>
                        <p className='services-text'>
                            -Le relâchement des points gachettes (Trigger points)
                        </p>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={therap} alt='massage therapeuthique' className='services-image'/>
                </div>
            </div>
            <div className='services-text-box'>
                <h2 className='services-title'>Tarifs</h2>
                <p className='services-text'>
                    60 minutes: 80$ (+ taxes)
                </p>
                <p className='services-text'>
                    90 minutes: 105$ (+ taxes)
                </p>
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

export default ServicesFr;