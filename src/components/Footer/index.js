import React from 'react';

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
                    ></a>
                </li>
                <li>
                    <a
                        className="icon-linkedin"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/diegotenorio"
                    ></a>
                </li>
                <li>
                    <a
                        className="icon-figma"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.figma.com/@diegotenorio"
                    ></a>
                </li>
            </ul>
        </div>
        <div className="address">
            diegotenorio.com
        </div>
    </div>
);

export default Footer;