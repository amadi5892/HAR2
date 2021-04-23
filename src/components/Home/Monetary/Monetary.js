import React from 'react';

import './Monetary.css';
import sunBuilding from '../../../images/sun_hits_building.jpg';
import paperwork from '../../../images/paperwork.jpg';

const monetary = (props) => (
    <div className="monetary-container">
        <div className="invest-info">
            <div className="invest-card">
                <h3 className="invest-heading">Investors</h3>
                <p className="invest-para">
                Home Affordable Realty doesn't let any opportunities go to waste when it comes to your investments. Your investments means everything to us and we make sure you're ROI will be worth all of your time and energy. Your wish is our command.
                </p>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdyGnjpu8gQ-huOChIc6VgbQD5bqIoL_ujko8l04Zlonm7-Kg/viewform?usp=sf_link"><button className="invest-btn">Learn More</button></a>
            </div>
            <div className="invest-img">
                <img src={sunBuilding} alt="Sunset Hitting Building" className="invest-img" />
            </div>
        </div>
        <div className="loan-info">
            <div className="invest-card">
                <h3 className="invest-heading">Loan Modification</h3>
                <p className="invest-para">
                Home Affordable Realty doesn't let any opportunities go to waste when it comes to your investments. Your investments means everything to us and we make sure you're ROI will be worth all of your time and energy. Your wish is our command.
                </p>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdyGnjpu8gQ-huOChIc6VgbQD5bqIoL_ujko8l04Zlonm7-Kg/viewform?usp=sf_link"><button className="invest-btn">Learn More</button></a>
            </div>
            <div className="invest-img">
                <img src={paperwork} alt="Sunset Hitting Building" className="invest-img" />
            </div>
        </div>
    </div>
);

export default monetary;