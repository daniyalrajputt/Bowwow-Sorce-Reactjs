import React from 'react';
import './centerbox.css';

function Centerbox() {
    return (
        <div className="center-box">
            <div className="sale-box">
                <div className="left-side">
                    <h3>IT'S TIME TO SHOP</h3>
                    <h1>PET PRODUCTS</h1>
                    <div className="bottom-side">
                        <div>
                            <h1 className="sale-heading">SALE</h1>
                        </div>
                        <div className="round-box">
                            <h2>UP TO</h2>
                            <h2 className="roundbox-head">20%</h2>
                            <h2>off</h2>
                        </div>
                    </div>
                </div>


                <div className="right-side"><img src={require('./../../assets/images/dogs.png')} alt="" /></div>
            </div>
            <div className="apparel-box">
                <div>
                    <h1>PET <br /> APPAREL</h1>
                    <h2>OUT NOW <br /> FOR A LIMITED TIME</h2>
                    <h2 className="apparel-heading">FIND OUT MORE</h2>
                </div>
                <div><img src={require('./../../assets/images/dog2.png')} alt="" /></div>
            </div>
        </div>
    );
}

export default Centerbox;
