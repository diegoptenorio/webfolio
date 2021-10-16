import React from 'react';

import IconGithub from '../../assets/img/github.svg';
import IconLinkedIn from '../../assets/img/linkedin.svg';
import IconFigma from '../../assets/img/figma.svg';

import './style.scss';

const Footer = () => (
    <div className="footer-container">
        <h1>Vamos conversar?</h1>
        <div className="footer">
            <ul className="no-padding no-margin">
                <li>
                    <a
                        className="icon-github"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/diegoptenorio"
                    >
                        <img src={IconGithub} alt="Github" />
                    </a>
                </li>
                <li>
                    <a
                        className="icon-linkedin"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/diegotenorio"
                    >
                        <img src={IconLinkedIn} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a
                        className="icon-figma"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.figma.com/@diegotenorio"
                    >
                        <img src={IconFigma} alt="Figma" />
                    </a>
                </li>
            </ul>
        </div>
        <div className="address">
            diegotenorio.com.br
        </div>
    </div>
);

export default Footer;