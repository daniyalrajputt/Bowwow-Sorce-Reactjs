import React from 'react';
import './category.css';

function Category() {
    return (
        <div className="shop">
            <h2>shop by</h2>
            <h1 className="heading-style">Category</h1>
            <div className="shop-box">
                <div className="Categories"><img src={require('./../../assets/images/3.png')} alt="" />
                    <h2>Pet</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/1.png')} alt="" />
                    <h2>Food</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/2.png')} alt="" />
                    <h2>Collors</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/4.png')} alt="" />
                    <h2>Bowl</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/5.png')} alt="" />
                    <h2>Toys</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/6.png')} alt="" />
                    <h2>Grooming</h2>
                </div>
                <div className="Categories"><img src={require('./../../assets/images/7.png')} alt="" />
                    <h2>Bed</h2>
                </div>
            </div>
            <div className="arrow-icons">
                <i className="fas fa-caret-left"></i>
                <div className="vl"></div>
                <i className="fas fa-caret-right"></i>
            </div>
        </div>
    );
}

export default Category;
