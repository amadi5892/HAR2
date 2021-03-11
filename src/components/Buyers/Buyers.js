import React, {Component} from 'react';

import './Buyers.css';
import greyHouse from '../../images/grey_house.jpg';

class Buyers extends Component {
    render() {
        return (
            <div className="buyers-container">
                <div className="buyers-section">
                    <h3 className="buyers-heading">Buyers</h3>
                    <p className="buyers-para">We take pride in being apart of your exciting journey to find your dream home. Home Affordable Realty gives you the best experience possible. Our agents work day and night to find you the best place for new beginnings.<br></br><br></br> Here at Home Affordable Realty we like to sit down with you first and understand your needs as a future Home Owner. Together we'll have an understanding about what exactly you're aiming for. Once we present you our plan for you the fun part begins. Before no time, you're unlocking the doors to you new dream home.</p>
                </div>
                <img className="buyers-img" src={greyHouse} alt="Grey House" />
            </div>
        );
    }
}

export default Buyers;