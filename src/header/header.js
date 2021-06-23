import React from 'react'
import logo from '../image/logo.png';
const Header = () => {
    return (
        <div className="header-bar">
  <div className="ul">
      <div className="search">
         <form>
          <input type="search" />
          <i className="fas fa-search"></i>
         </form>
       </div> 
       <div className="logo">
        <a href="index.html"><img src={ logo} /></a>
      </div>
  <div className="nav-bar">
      <div className="list">
        <ul>
          <li><a href="#"><i class="fas fa-bars"></i></a></li>
          <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li> 
         
         <li><a href="login-form.html">Login</a></li>
         <li><a href="signup-form.html">sign up</a></li>
          
        </ul>
      </div>
     
</div>
  </div>
</div>
    );
}

export default Header;
