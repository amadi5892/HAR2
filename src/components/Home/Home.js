import { render } from "@testing-library/react";

import React, {Component}  from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <h1 className="home-msg">Where Dream Homes<br></br>Do Come True</h1>
                </div>
            </div>
            
        );
    }
}

export default Home;