import React from 'react';
// import './App.css';
import Navbar from './Components/navbar/navbar.js';
import Header from './Components/header/header.js';
import Category from './Components/category/category.js';
import Product from './Components/product/product.js';
import Centerbox from './Components/centerbox/Centerbox.js';
import Circlebox from './Components/circle/circle.js';
import Brands from './Components/brand/brand.js';
import Blog from './Components/blog/blog.js';
import Footer from './Components/footer/footer.js';


function App() {
  return (

    <div className="main-container">
      <Navbar />
      <Header />
      <Category />
      <Product />
      <Centerbox />
      <Circlebox />
      <Brands />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
