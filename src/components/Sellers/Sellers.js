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
                <div className="sellers-needs">
                    <div>
                        <h3 className="sellers-heading">The Committment</h3>
                        <p className="sellers-para">
                            We're not here to have your house sitting pretty on our site and other platforms. The job gets done, and more importantly the job gets done in the time frame of your request. We have many different strategies for getting your home sold. At Home Affordable we make sure our agents are equipped with the necessary tools to reach buyers before the competition. Meet with us and find out how we're ready to compete for you. 
                        </p>
                    </div>
                    <div className="sellers-right">
                        <h3 className="sellers-heading">Adapting to Change</h3>
                        <p className="sellers-para">Unlike so many companies in the real estate industry, we make sure we're keeping up with the advances in the world to utilize all forms of selling. Home Affordable adapts to every market change as well as all of the marketing resources that expand year after year. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sellers;