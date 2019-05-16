import React from 'react';
import './circle.css';

function Circlebox() {
    return (
        <div className="circle-box">
            <div className="margin-between-circles">
                <div className="circle">
                    <h1>Personalize Collar</h1>
                    <div><img src={require('./../../assets/images/dog3.png')} className="circle-img1" alt="" /></div>
                    <div className="circle-border"></div>
                </div>
            </div>
            <div  className="margin-between-circles">
                <div className="circle">
                    <h1>Personalize Bed</h1>
                    <div><img src={require('./../../assets/images/dog4.png')} className="circle-img2" alt="" /></div>
                    <div className="circle-border"></div>
                </div>
            </div>
        </div>
    );
}

export default Circlebox;
