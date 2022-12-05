import React from 'react';
import './services.css';
import suedois from '../img/suedois.jpg';
import drainage from '../img/drainage.jpg';
import therap from '../img/therap.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const ServicesEn = () => {
    return (
        <main className='services-box'>
            <div className='services-text-box'>
                <h2 className='services-title'>What is kinesitherapy?</h2>
                <p className='services-text'>
                    Kinesitherapy is the combination of massage and movement.
                    Through passive, active or thwarted mobilizations,
                    it aims to facilitate normal and painless movement of the body
                     and its joints. This approach can just as well be incorporated into a treatment
                      of relaxation than in a so-called therapeutic treatment.
                </p>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <p className='services-title'>Swedish Massage</p>
                    <p className='services-text'>
                        Swedish massage consists of slow, encompassing movements using low to medium pressure.
                        It aims to relax the first layer of muscles, increase the circulation of body fluids
                        and provide a relaxing effect.
                        Since Swedish massage is done on all parts of the body, it is for people
                        who do not have specific problems and who therefore rather seek to relax their body and reduce their stress.
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
                    <p className='services-title'>Lymphatic drainage</p>
                    <p className='services-text'>
                        Lymphatic drainage is a gentler, slower massage
                        than the Swedish massage. It is generally practiced without oil
                        in the direction of the lymphatic circulation, with precision and rhythm, in order to stimulate the
                        lymph nodes and blood vessels. It aims to help the body in
                        the processes of detoxifying, decreasing water retention and reducing inflammation.
                    </p>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <p className='services-title'>Therapeuthic Massage</p>
                    <p className='services-text'>
                        Therapeutic massaging addresses a particular problem,
                        either to relieve an already existing pathology, to prevent injuries
                        or to facilitate recovery following physical training.
                        Therapeutic massage can be performed using the following procedures:
                    </p>
                    <div className='services-procedures-box'>
                        <p className='services-text'>
                            -Vacuotherapy (treatment with cupping)
                        </p>
                        <p className='services-text'>
                            -Fasciatherapy
                        </p>
                        <p className='services-text'>
                            -Integrated visceral massage (ventral massage and decongestion of the diaphragm)
                        </p>
                        <p className='services-text'>
                            -Neuro-proprioceptive taping
                        </p>
                        <p className='services-text'>
                            -Deep tissue massage
                        </p>
                        <p className='services-text'>
                            -Releasing of trigger points
                        </p>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={therap} alt='massage therapeuthique' className='services-image'/>
                </div>
            </div>
            <div className='services-text-box'>
                <h2 className='services-title'>Prices</h2>
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

export default ServicesEn;