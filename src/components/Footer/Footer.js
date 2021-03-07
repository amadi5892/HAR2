import React from 'react';

import './Footer.css';

const footer = (props) => (
    <div className="footer-container">
        <div className="contact-info">
            <h3 className="contact-heading">Contact Us</h3>
            <ul className="contact-section">
                <li className="contact-list">129-05 Merrick Blvd.<br></br>Jamaica, NY 11434</li>
                <li className="contact-list">(718) 276-9600</li>
                <li className="contact-list">homeaffordablerealty@gmail.com</li>
            </ul>
        </div>
        <div className="message-info">
            <h3 className="contact-heading">Leave Us A Message</h3>
            <div className="contact-form">
                <form id="contact-form" method="post" action="">
                    <input name="name" type="text" className="form-control" placeholder="Name" required></input>
                    <input name="phone" type="number" className="form-control" placeholder="Phone" required></input>
                    <input name="email" type="email" className="form-control" placeholder="Email" required></input>
                    <textarea name="message" className="form-control" placeholder="How Can We Help?" row="4" required></textarea>
                    <input type="submit" className="submit" value="SEND MESSAGE"></input>
                </form>
            </div>
            
        </div>
    </div>
);

export default footer;