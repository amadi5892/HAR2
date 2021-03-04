import { render } from "@testing-library/react";

import React, {Component}  from 'react';

import './Home.css';
import Commitment from './Commitment/Commitment';
import Services from './Services/Services';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <h1 className="home-msg">Where Dream Homes<br></br>Do Come True</h1>
                </div>
                <Commitment />
                <Services />
            </div>
            
        );
    }
}

export default Home;