import React from "react";
import { Player } from 'video-react';
import FootageMp4 from '../../assets/footage/bg-footage.mp4';
import FootageWebm from '../../assets/footage/bg-footage.webm';

import './style.scss'

const Motion = () => (
    <div className="motion-container">
        <Player
            autoPlay
            loop
            muted
        >
            <source src={FootageMp4} type="video/mp4" />
            <source src={FootageWebm} type="video/webm" />
        </Player>
        <div className="bg">
            <div className="logo">
            </div>
            <div className="background-img"></div>
        </div>
    </div>
);

export default Motion;