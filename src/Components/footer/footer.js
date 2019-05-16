import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
        <div className="bottom-box">
          <div className="bottom-item flex-two">
            <ul>
              <li>
                <div className="icon"><img src={require('./../../assets/images/icon.png')} alt="" /></div>
              </li>
              <li>Bowwow.com is India's first and largest online pet store catering from 2002 to dogs ,cats
                            ,birds, fishes and all your small companions.</li>
              <li>Get weekly dose of exciting news & products</li>
              <li><input type="text" id="email" placeholder="Enter Your Email Address" /></li>
            </ul>
          </div>
          <div className="bottom-item flex-onehalf">
            <ul>
              <li className="list-head">Legal</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
            </ul>
          </div>
          <div className="bottom-item flex-one">
            <ul>
              <li className="list-head">Usefull links</li>
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
          <div className="bottom-item flex-two">
            <ul>
              <li className="list-head">Contact</li>
              <li>Lorem ipsum dolor sit amet, co adipisi elit, sed eiusmod tempor incididunt ut labore et
                            dolore</li>
              <li>+91-1234567890</li>
              <li>info@bowwow.com</li>
            </ul>
          </div>
        </div>
        <p className="bottom-text">© 2019 bowWow. All Rights Reserved </p>
      </div>
    );
}

export default Footer;
