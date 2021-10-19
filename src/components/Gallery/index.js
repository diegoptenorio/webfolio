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
                <figure>
                    <figcaption>FoodStalker</figcaption>
                    <img src={FoodStalker} alt="FoodStalker" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <figure>
                    <figcaption>Mangue3</figcaption>
                    <img src={Mangue3} alt="Mangue3" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <figure>
                    <figcaption>Abudhabi</figcaption>
                    <img src={Abudhabi} alt="Abudhabi" />
                </figure>
            </a>
        </div>
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/5K9qtSdrwQrcjH8LY1Bw9d/Health-Track?node-id=112%3A320"
            >
                <figure>
                    <figcaption>HealthTrack</figcaption>
                    <img src={HealthTrack} alt="HealthTrack" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/52429831/BVR"
            >
                <figure>
                    <figcaption>BVR</figcaption>
                    <img src={BVR} alt="BVR" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/23476419/Illustration"
            >
                <figure>
                    <figcaption>Ken Masters</figcaption>
                    <img src={KenMasters} alt="KenMasters" />
                </figure>
            </a>
        </div>
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/95780169/Logofolio"
            >
                <figure>
                    <figcaption>Digital Storm</figcaption>
                    <img src={DigitalStorm} alt="Digital Storm" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/51436913/InterApp"
            >
                <figure>
                    <figcaption>InterApp</figcaption>
                    <img src={InterApp} alt="InterApp" />
                </figure>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/gallery/51438627/3D"
            >
                <figure>
                    <figcaption>Chess 3D</figcaption>
                    <img src={Chess3D} alt="Chess 3D" />
                </figure>
            </a>
        </div>
    </div>
);

export default Gallery;