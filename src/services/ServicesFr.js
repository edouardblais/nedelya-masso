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
                <h2 className='services-title'>Tarifs</h2>
                <p className='prices-text'>
                    60 minutes: 80$ (+ taxes)
                </p>
                <p className='prices-text'>
                    90 minutes: 105$ (+ taxes)
                </p>
            </div>
            <div className='services-text-box'>
                <h2 className='services-title'>Qu'est-ce que la kinésithérapie?</h2>
                <p className='services-text'>
                    La kinésithérapie est le mélange du massage et du mouvement. 
                    Par le biais de mobilisations passives, actives ou contrariées, 
                    elle vise à faciliter un mouvement normal et sans douleur du corps
                     et de ses articulations. Cette approche peut tout aussi bien être incorporée dans un soin
                      de détente que dans un soin dit thérapeutique. 
                </p>
                <a href='https://rmpq.ca/ressources-et-formation-des-therapeutes/disciplines-reconnues/kinesitherapie/?fbclid=IwAR1wCA_CTycWHcpxNpZ-_a6gcRGsDn4Y61sj9y4fAJTHazVvePhCehHzESw' class='home-btn'>Plus d'info</a>
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
                    <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/massage-suedois/' class='home-btn'>Plus d'info</a>
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
                    <p className='services-title'>Drainage Lymphatique Manuel (DLM)</p>
                    <p className='services-text'>
                        Le système lymphatique est responsable de la réponse immunitaire du corps. 
                        Il s’occupe de drainer le liquide interstitiel et les déchets métaboliques ainsi que de transporter les hormones et les lipides. 
                        Le DLM est un massage plus doux et plus lent que le massage suédois. 
                        Il est généralement pratiqué sans huile dans le sens de la circulation lymphatique 
                        (distale à proximale, à sens unique, des capillaires sanguins vers le coeur), 
                        de manière précise et rhytmée, afin de désengorger les ganglions et vaisseaux. 
                        Il vise à aider le corps dans son processus de détoxification, de réduction de la rétention d’eau et de l’inflammation. 
                        Il est idéal suite à une chirurgie, pour éviter la retention d’eau, l’enflure (oedème) ou la sensation de jambes lourdes. 
                        En plus d’être extrêmement relaxant, les défenses immunitaires de l’organisme en bénéficient énormement.
                    </p>
                    <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/drainage-lymphatique/' class='home-btn'>Plus d'info</a>
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
                        <div>
                            <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/massage-aux-ventouses/?fbclid=IwAR14raccXf6PpEfwLFodQizn5ixvFUXnsEO7dEzXm1Mo1PlwgC74Y4evhTs' className='services-link'>
                                -La vacuothérapie (traitement avec ventouses)
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/blogue/fascinants-fascias/?fbclid=IwAR0ePkHDSgh6TzbB3Cr_ewpKd5onyTwup9B1NEJBiedMIB_8mRZ1nv7o5OA' className='services-link'>
                                -La fasciathérapie 
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/therapie-viscerale-integree-md/' className='services-link'>
                                -Le massage viscéral intégré (massage ventral et décongestion du diaphragme)
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/taping-sportif/?fbclid=IwAR0HiV_8T7uIKuu_FrBh4_8t2X2SBQLTFo1Ke3vzcIt_a-KdQIXNoeUNJYg' className='services-link'>
                                -Le taping neuro-proprioceptif 
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/massage-tissus-profonds/' className='services-link'>
                                -Le massage des tissus profonds
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/techniques-et-bienfaits-de-la-massotherapie/techniques-reconnues/points-gachettes-trigger-points/' className='services-link'>
                                -Le relâchement des points gachettes (Trigger points)
                            </a>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={therap} alt='massage therapeuthique' className='services-image'/>
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

export default ServicesFr;