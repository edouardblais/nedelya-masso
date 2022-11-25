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
                    <p className='about-text'>Nedelya est une masso-kinésithérapeute diplômée de l’Académie de massage scientifique. 
                                                 Elle cumule 4 années d’expérience et pratique depuis 2018. Étant une passionnée d’escalade,
                                                 et après avoir obtenu son diplôme de praticienne en massothérapie, 
                                                 elle a décidé de se spécialiser en masso-kinesitherapie volet sportif afin de mieux comprendre 
                                                 et cerner les besoins des athlètes.
                    </p>
                    <p className='about-text'>Sa soif de connaissance et son désir d’apporter un traitement optimal à ses clients,
                                                l’ont poussée à cumuler plus de 200h de formation continue à l’institut de massothérapie Kiné-Concept - Guijek.
                                                Aujourd’hui, Nedelya combine ses deux passions et pratique dans deux centres d’escalade dans la région de Montréal,
                                                soit Café Bloc et Hook Bouldering.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default APropos;