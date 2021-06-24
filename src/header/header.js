import React from 'react'
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
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
        <Link to= "/">
              <img src={logo} />
              </Link>
      </div>
  <div className="nav-bar">
      <div className="list">
        <ul>
          <li><a href="#"><i class="fas fa-bars"></i></a></li>
          <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li> 
         
         <li><Link to = "/SignIn">Login</Link></li>
         <li><Link to = "/SignUp">sign up</Link></li>
          
        </ul>
      </div>
     
</div>
  </div>
</div>
    );
}

export default Header;
