import React from 'react';
import './brand.css';

function Brands() {
    return (
        <div className="Brands-box">
            <h2>Brands</h2>
            <h1 className="heading-style">You Love</h1>
            <div className="random-box">
                <div className="sponser-box">
                    <div className="sponser-items"><img src={require('./../../assets/images/18.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/19.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/20.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/21.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/22.png')} alt="" className="sponser-custom-img" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/23.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/24.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/25.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/26.png')} alt="" /></div>
                    <div className="sponser-items"><img src={require('./../../assets/images/27.png')} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
