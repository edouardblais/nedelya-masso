import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './contact.css';
import markersInfo from './MarkersInfo';
import expandIcon from '../img/expand-icon.svg';
import closeIcon from '../img/close-icon.svg';
import blocshoplogo from '../img/blocshoplogo.jpeg';
import cafebloclogo from '../img/cafebloclogo.jpeg';

const ContactEn = () => {

    const [displaySidebar, setDisplaySidebar] = useState(true);

    const mapContainer = useRef();
    const map = useRef(null);

    const maplibre_key = process.env.MAPLIBRE_KEY;

    useEffect(() => {
        if (map.current && maplibre_key) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/dataviz/style.json?key=${maplibre_key}`,
            center: [-73.5674, 45.5019],
            zoom:10,
            attributionControl:false
        })
        map.current.on('load', () => {
            markersInfo.features.forEach((marker) => {
                const el = document.createElement('div');
                el.classList.add('marker');
                if (marker.properties.message === 'Bloc Shop') {
                    el.style.backgroundImage =
                    `url(${blocshoplogo})`
                } else if (marker.properties.message === 'Cafe Bloc') {
                    el.style.backgroundImage =
                    `url(${cafebloclogo})`
                }
                el.style.width = marker.properties.iconSize[0] + 'px';
                el.style.height = marker.properties.iconSize[1] + 'px';
                new maplibregl.Marker(el)
                    .setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]])
                    .addTo(map.current);
            })
        })
    }, [maplibre_key])

    const toggleSidebar = () => {
        if (displaySidebar) {
            setDisplaySidebar(false)
        } else {
            setDisplaySidebar(true)
        }
    }

    const goToBS  = () => {
        map.current.flyTo({
            center:[-73.65753, 45.53209],
            essential:true,
            zoom:18
        })
    }

    const goToCB = () => {
        map.current.flyTo({
            center:[-73.56294, 45.50973],
            essential:true,
            zoom:18
        })
    }

    return (
        <main className='contact-box'>
            <div ref={mapContainer} style={{width:'100%', height:'100%'}}/>
            <button  style={{display:!displaySidebar?'flex':'none'}} onClick={toggleSidebar} type='button' className='contact-expand-btn'><img src={expandIcon} alt='' className='contact-expand-icon'/></button>
            <div className='contact-sidebar-box' style={{display:displaySidebar?'flex':'none'}}>
                <div className='contact-close-box'>
                    <button onClick={toggleSidebar} type='button' className='contact-close-btn'><img src={closeIcon} alt='' className='contact-close-icon'/></button>
                </div>
                <h1 className='contact-title'>Book your massage session!</h1>
                <div className='contact-text-box'>
                    <h2 className='reserv-title'>Bloc Shop Chabanel</h2>
                    <p className='contact-text'>1370 Chabanel W St, Montreal, Quebec H4N 1H4</p>
                    <p className='contact-text'>(514) 384-1234</p>
                    <div className='contact-btn-box'> 
                        <button className='home-btn' onClick={goToBS} type='button'>Go to Bloc Shop!</button>
                        <a className='home-btn' href='https://www.gorendezvous.com/nedelyamassokine'>Book Now!</a>
                    </div>
                </div>
                <div className='contact-text-box'>
                    <h2 className='reserv-title'>Cafe Bloc</h2>
                    <p className='contact-text'>1209-1211 St Laurent Blvd, Montreal, Quebec H2X 2S6</p>
                    <p className='contact-text'>(438) 794-3874</p>
                    <div className='contact-btn-box'> 
                        <button className='home-btn' onClick={goToCB} type='button'>Go to Cafe Bloc!</button>
                        <a className='home-btn' href='https://www.gorendezvous.com/fr/cafebloc/'>Book Now!</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactEn;