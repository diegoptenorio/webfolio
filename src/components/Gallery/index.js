import React from "react";

import Abudhabi from '../../assets/img/portfolio/abudhabi2.jpg';
import HealthTrack from '../../assets/img/portfolio/healthtrack.jpg';
import BVR from '../../assets/img/portfolio/bvr.jpg';
import Mangue3 from '../../assets/img/portfolio/mangue3.jpg';
import DigitalStorm from '../../assets/img/portfolio/digital-storm.jpg';
import KenMasters from '../../assets/img/portfolio/ken.jpg';
import FoodStalker from '../../assets/img/portfolio/foodstalker.png';
import InterApp from '../../assets/img/portfolio/interapp.png';
import Chess3D from '../../assets/img/portfolio/chess.jpg';

import './style.scss';

const Gallery = () => (
    <div className="gallery">
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/diegoptenorio/foodstalker"
            >
                <img src={FoodStalker} alt="FoodStalker" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <img src={Mangue3} alt="Mangue3" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <img src={Abudhabi} alt="Abudhabi" />
            </a>
        </div>
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/5K9qtSdrwQrcjH8LY1Bw9d/Health-Track?node-id=112%3A320"
            >
                <img src={HealthTrack} alt="HealthTrack" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/52429831/BVR"
            >
                <img src={BVR} alt="BVR" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/23476419/Illustration"
            >
                <img src={KenMasters} alt="KenMasters" />
            </a>
        </div>
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <img src={DigitalStorm} alt="Digital Storm" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/51436913/InterApp"
            >
                <img src={InterApp} alt="InterApp" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/51438627/3D"
            >
                <img src={Chess3D} alt="Chess 3D" />
            </a>
        </div>
    </div>
);

export default Gallery;