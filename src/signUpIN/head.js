import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
const Head = () => {
    return (
        <>
         <div class="head-bar">
       <div class="logo">
            <Link to ="/"> <img src={logo} /></Link>
      </div>
  <div class="head-nav-bar">
          
          <a href="#"><i class="fas fa-shopping-cart"></i></a> 
          <a href="#"><i class="fas fa-bars"></i></a>
  </div>
</div>
   
        </>
    )
}

export default Head;
