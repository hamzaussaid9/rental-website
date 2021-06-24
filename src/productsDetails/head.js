import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

const Head = () => {
    return (
        <>
          <div class="product-details-head">
      <div class="product-details-search">
         <form>
          <input type="search" />
          <i class="fas fa-search"></i>
         </form>
       </div> 
       <div class="logo">
            <Link to="/"><img src={logo} /></Link>
      </div>
  <div class="product-details-nav-bar">          
          <a href="#"><i class="fas fa-shopping-cart"></i></a> 
          <a href="#"><i class="fas fa-bars"></i></a>
  </div>
</div>   
        </>
    )
}

export default Head;
