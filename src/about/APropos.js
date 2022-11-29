import React from 'react';
import './about.css';
import Nedhappy from '../img/nedhappy.jpg';

const APropos = () => {
    return (
        <div className='about-box'>
            <div className='overview-box'>
                <div className='image-box'>
                    <img src={Nedhappy} alt='Ned' className='home-image'/>
                </div>
                <div className='about-text-box'>
                    <div className='about-title-box'>
                        <h3 className='about-name'>Nedelya Savcheva</h3>
                        <h4 className='about-title'>Masso-kinesithérapeuthe</h4>
                    </div>
                    <p className='about-text'>
                        Diplômée de l’Académie de massage scientifique, Nedelya est une masso-kinésithérapeute  
                        pratiquant depuis 2018. Étant une passionnée d’escalade et désirant mieux comprendre les besoins des athlètes,
                        Nedelya s'est spécialisé en masso-kinesitherapie volet sportif.
                    </p>
                    <p className='about-text'>
                        Sa soif de connaissance et son désir d’apporter un traitement optimal à ses clients
                        l’ont poussé à cumuler plus de 200 heures de formation continue à l’institut de massothérapie Kiné-Concept - Guijek.
                        Aujourd’hui, Nedelya combine ses deux grandes passions en pratiquant dans deux centres d’escalade de la région de Montréal,
                        soit le Café Bloc et le Hook Bouldering.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default APropos;