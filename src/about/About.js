import React from 'react';
import './about.css';
import Nedhappy from '../img/nedhappy.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import Reseau from '../img/reseau.jpg';

const About = () => {
    return (
        <main className='about-box'>
            <div className='about-subbox'>
                <div className='image-box'>
                    <img src={Nedhappy} alt='Nedelya' className='about-image'/>
                </div>
                <div className='about-text-box'>
                    <div className='about-title-box'>
                        <h1 className='about-name'>Nedelya Savcheva</h1>
                        <h2 className='about-title'>Masso-kinesitherapist</h2>
                    </div>
                    <p className='about-text'>
                        A graduate of the Academy of Scientific Massage, Nedelya is a massage therapist
                        practicing since 2018. Being a climbing enthusiast and wishing to better understand the needs of athletes,
                        Nedelya has specialized herself in sports oriented masso-kinesitherapy.
                    </p>
                    <p className='about-text'>
                        Her thirst for knowledge and her desire to provide optimal treatments to her clients have
                        pushed her to accumulate more than 300 hours of continuing education at the Kiné-Concept-Guijek massage therapy institute.
                        Today, Nedelya combines her two great passions by practicing in two climbing centers in the Montreal area,
                        namely Bloc Shop and Café Bloc.
                    </p>
                    <div className='image-box'>
                        <img src={Reseau} alt='Member of Masso Network' className='reseau-image'/>
                    </div>
                </div>
            </div>
            <div className='know-more-box'>
                <div className='know-more-sub-box'>
                    <h3 className='about-know-more-title'>Want to know more?</h3>
                    <h4 className='about-know-more-sub-title'>Do not hesitate to contact Nedelya!</h4>
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

export default About;