import React from "react";

import Abudhabi from '../../assets/img/portfolio/abudhabi2.jpg';
import MMA from '../../assets/img/portfolio/mmamericas.jpg';
import BVR from '../../assets/img/portfolio/bvr.jpg';
import Mangue3 from '../../assets/img/portfolio/mangue3.jpg';
import SSCE from '../../assets/img/portfolio/ssce.jpg';
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
                href=""
            >
                <img src={BVR} alt="BVR" />
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
                href=""
            >
                <img src={MMA} alt="MMA" />
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
                href="https://www.behance.net/gallery/23476419/Illustration"
            >
                <img src={KenMasters} alt="KenMasters" />
            </a>
        </div>
        <div className="gallery-column">
            <a
                target="_blank"
                rel="noreferrer"
                href=""
            >
                <img src={SSCE} alt="SSCE" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href=""
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