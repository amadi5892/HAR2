import React, {Component} from 'react';

import './Buyers.css';
import greyHouse from '../../images/grey_house.jpg';

class Buyers extends Component {
    render() {
        return (
            <div className="buyers-container">
                <div className="buyers-main">
                    <div className="buyers-section">
                        <h3 className="buyers-heading">Buyers</h3>
                        <p className="buyers-para">We take pride in being apart of your exciting journey to find your dream home. Home Affordable Realty gives you the best experience possible. Our agents work day and night to find you the best place for new beginnings.<br></br><br></br> Here at Home Affordable Realty we like to sit down with you first and understand your needs as a future Home Owner. Together we'll have an understanding about what exactly you're aiming for. Once we present you our plan for you the fun part begins. Before no time, you're unlocking the doors to you new dream home.</p>
                        <div>
                            <div>
                            
                            </div>
                        </div>
                    </div>
                    <img className="buyers-img" src={greyHouse} alt="Grey House" />
                </div>
                <div className="buyers-needs">
                    <div>
                        <h3 className="buyers-heading">Real Listings</h3>
                        <p className="buyers-para">Unfortunately, many buyers are mislead by websites like Trulia, Zillow and more. They're wonderful when it comes to learning the neighborhoods you may be interested in. At times you will find true listings on those sites that are actually availabe and providing accurate features. However, Home Affordable Realty has access to the most up-to-date and comprehensive listings throughout NYC and Long Island.</p>
                    </div>
                    <div className="buyers-right">
                        <h3 className="buyers-heading">Dedicated Agents</h3>
                        <p className="buyers-para">Our team of agents will work day and night (literally at times) to make sure we meet well above our clients satisfaction. The buying process is not easy, but with Home Affordable Realty it can really seem like its 1-2-3.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buyers;