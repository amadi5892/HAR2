import React from 'react';

import './Commitment.css';
import modernSunset from '../../../images/modern.jpg';

const commitment = (props) => (
    <div className="commit">
        <h3 className="commit-heading">Commitment, Experience & Passion</h3>
        <div className="commit-para">
            <p className="commit-para1">
                With over 30 years of experience, serving Queens, Brooklyn, Manhattan, Long Island and the Bronx, Home Affordable Realty has been right here in the neighborhood <strong>Selling</strong> and <strong>Buying</strong> homes for our clients.
            </p>
            <p className="commit-para2">

            </p>
        </div>
        <img src={modernSunset} alt="Modern Home in the Sunset" className="commit-img" ></img>
    </div>
);

export default commitment;