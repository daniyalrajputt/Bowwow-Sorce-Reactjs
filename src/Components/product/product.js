import React from 'react';
import './product.css';

function Product() {
    return (
        <div className="featured-product-box">
            <h2>Most popular</h2>
            <h1 className="heading-style">Featured Product</h1>
            <div className="product-box">
                <div>
                    <div className="product-items"><img src={require('./../../assets/images/12.png')} alt="" /></div>
                    <h2>Dog Food</h2>
                    <p><img src={require('./../../assets/images/price-tag.png')} alt="" /><br />$305</p>
                </div>
                <div>
                    <div className="product-items"><img src={require('./../../assets/images/13.png')} alt="" /></div>
                    <h2>Dog Breath Drops</h2>
                    <p><img src={require('./../../assets/images/price-tag.png')} alt="" /><br />$200</p>
                </div>
                <div>
                    <div className="product-items"><img src={require('./../../assets/images/14.png')} alt="" /></div>
                    <h2>Dog T-Shirt</h2>
                    <p><img src={require('./../../assets/images/price-tag.png')} alt="" /><br />$405</p>
                </div>
                <div>
                    <div className="product-items"><img src={require('./../../assets/images/15.png')} alt="" /></div>
                    <h2>Dog Collar</h2>
                    <p><img src={require('./../../assets/images/price-tag.png')} alt="" /><br />$500</p>
                </div>
            </div>
            <div className="arrow-icons2">
                <i className="fas fa-caret-left"></i>
                <div className="vl2"></div>
                <i className="fas fa-caret-right"></i>
            </div>
        </div>
    );
}

export default Product;
