import React from "react";

import IconGithub from '../../assets/img/github.svg';

import './style.scss';

const Presentation = () => (
    <div className="container no-padding">
        <div className="description text-center">
            <h1>Sou <strong>designer de produto</strong> e <strong>programador front-end</strong>
            <br />
            Planejo e desenvolvo <strong>interfaces</strong></h1>
        </div>
        <div className="resume text-center">
            <a 
                target="_blank"
                rel="noreferrer"
                href="https://github.com/diegoptenorio"
            >
                <img src={IconGithub} alt="Github" />
                Github
            </a>
        </div>
    </div>
);

export default Presentation;