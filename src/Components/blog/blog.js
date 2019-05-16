import React from 'react';
import './blog.css';

function Blog() {
    return (
        <div className="blog-box">
            <h2>latest news</h2>
            <h1 className="heading-style">From Our Blogs</h1>
            <div className="blog-items">
                <div className="blog-container">
                    <div><img src={require('./../../assets/images/image1.jpg')} alt="" /></div>
                    <h3>Train Your Dogs</h3>
                    <p>Is your dog easily distracted? Does he spend your entire walk lunging at...</p>
                    <span>Full Article ></span>
                </div>
                <div className="blog-container">
                    <div><img src={require('./../../assets/images/image2.jpg')} alt="" /></div>
                    <h3>Care For Your Dogs</h3>
                    <p>Is your dog easily distracted? Does he spend your entire walk lunging at...</p>
                    <span>Full Article ></span>
                </div>
                <div className="blog-container">
                    <div><img src={require('./../../assets/images/image3.jpg')} alt="" /></div>
                    <h3>Electric Fence For Dogs</h3>
                    <p>Is your dog easily distracted? Does he spend your entire walk lunging at...</p>
                    <span>Full Article ></span>
                </div>
            </div>
            <div className="bullets-icons">
                <div><i className="fas fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
                <div><i className="far fa-circle"></i></div>
            </div>
            <div className="order-box">
                <div className="order">
                    <div className="order-image"><img src={require('./../../assets/images/28.png')} alt="" /></div>
                    <h2 className="heading">Free Shipping</h2>
                    <p>Free shipping on all order</p>
                </div>
                <div className="order">
                    <div className="order-image"><img src={require('./../../assets/images/29.png')} alt="" /></div>
                    <h2 className="heading">Online Support</h2>
                    <p>Online support 24 hours a day</p>
                </div>
                <div className="order">
                    <div className="order-image"><img src={require('./../../assets/images/30.png')} alt="" /></div>
                    <h2 className="heading">Easy Return</h2>
                    <p>Back guarantee under 5 days</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
