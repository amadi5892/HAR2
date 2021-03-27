import React, {Component} from 'react';

import './Sellers.css';
import marbleK from '../../images/marble_kitchen.jpg';

class Sellers extends Component {
    render() {
        return(
            <div className="sellers-container">
                <div className="sellers-main">
                    <div className="sellers-section">
                        <h3 className="sellers-heading">Sellers</h3>
                        <p className="sellers-para">
                            Our team with over 30 years of experience is ready to guide you through the home-selling process and answer all of your questions. At Home Affordable Realty we get our clients top dollar on all of their properties.<br></br><br></br> You can expect to recieve guidance through our strategy for selling your particularly special home. Expect to be updated through every step of the way. Being aware of all marketing decisions and every offer that comes through the door is your right. We achieve everything expected of us and more everytime because this process is about our clients acheive their financial goals for selling thier home. 
                        </p>
                    </div>
                    <img className="sellers-img" src={marbleK} />
                </div>
            </div>
        );
    }
}

export default Sellers;