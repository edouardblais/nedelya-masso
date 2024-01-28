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
                <h1 className='services-title'>Prices</h1>
                <p className='prices-text'>
                    60 minutes: 95$ (+ taxes)
                </p>
                <p className='prices-text'>
                    90 minutes: 120$ (+ taxes)
                </p>
                <p className='prices-specs-text'>
                    ** Insurance receipts available **
                </p>
                <p className='prices-specs-text'>
                    ** Prices subject to change without notice. **
                </p>
            </div>
            <div className='services-text-box'>
                <h2 className='services-title'>What is kinesitherapy?</h2>
                <p className='services-text'>
                    Kinesitherapy is the combination of massage and movement.
                    Through passive or active mobilizations,
                    it aims to facilitate normal and painless movement of the body
                     and its joints. This approach can just as well be incorporated into a treatment
                      of relaxation or in a therapeutic treatment.
                </p>
                <a href='https://rmpq.ca/en/resources-and-training-of-therapists/recognized-disciplines/kinesitherapy/' className='home-btn'>More info</a>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <h2 className='services-title'>Swedish Massage</h2>
                    <p className='services-text'>
                        Swedish massage consists of slow movements using low to medium pressure. 
                        It aims to relax the first layer of muscles, increase the circulation of body fluids and provide a relaxing effect. 
                        Since Swedish massage is done on all parts of the body, it is for people who do not have specific problems 
                        and who therefore would rather seek to relax their body and reduce their stress.
                    </p>
                    <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/swedish-massage/' className='home-btn'>More info</a>
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
                    <h2 className='services-title'>Manual Lymphatic Drainage (MLD)</h2>
                    <p className='services-text'>
                        The lymphatic system is responsible for the body's immune response. 
                        It is responsible for draining interstitial fluid and metabolic wastes as well as transporting hormones and lipids. 
                        MLD is a gentler and slower form of massage compared to Swedish. 
                        It is generally oil-free, done in the direction of the lymphatic circulation 
                        (distal to proximal, one-way, from the blood capillaries towards the heart),
                         in a precise and rhythmic manner, in order to unclog and stimulate the lymph nodes and vessels. 
                         It aims to help the body in its process of detoxification, and reduction of water retention and inflammation.
                        It is ideal following a surgery, against water retention, swelling (oedema) or to ease the feeling of restless legs. 
                        In addition to being extremely relaxing, the body's immune defenses benefit from it enormously.
                    </p>
                    <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/lymphatic-draining/' className='home-btn'>More info</a>
                </div>
            </div>
            <div className='services-sub-box'>
                <div className='services-text-box'>
                    <h2 className='services-title'>Therapeuthic Massage</h2>
                    <p className='services-text'>
                        Therapeutic massage addresses a particular problem,
                        either to relieve an already existing pathology, to prevent injuries
                        or to facilitate recovery following physical exercise.
                        Therapeutic massage can be performed using the following methods:
                    </p>
                    <div className='services-procedures-box'>
                        <div>
                            <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/cupping-massage/' className='services-link'>
                                -Myofascial decompression ( cupping)
                            </a>
                        </div>
                        <div>
                            <a className='services-link' href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/fascial-therapy/'>
                                -Fasciatherapy
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/integrative-visceral-therapy-md/' className='services-link'>
                                -Integrated visceral massage (ventral massage and decongestion of the diaphragm)
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/neuro-proprioceptive-taping/' className='services-link'>
                                -Neuro-proprioceptive taping
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/deep-tissue-massage/?fbclid=IwAR01W_bhLMZdvBysP9hUJla_bQ2VQJfe4NODGj85piEh8S7hUa02lmhnbQE' className='services-link'>
                                -Deep tissue massage
                            </a>
                        </div>
                        <div>
                            <a href='https://rmpq.ca/en/techniques-and-benefits-of-massage-therapy/recognized-massage-techniques/trigger-points/' className='services-link'>
                                -Releasing of trigger points
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

export default ServicesEn;