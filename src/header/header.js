import React from 'react'
import logo from '../image/logo.png';
import Change from './change';
import { Link } from 'react-router-dom';
const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const handleClick = () => {
    setToggle(toggle => !toggle);
  }
    return (
      <div className="header-bar" id="no-scroll">
        {
          toggle ? <Change toggle={toggle} handleClick={handleClick} /> : ''
        }
  <div className="ul">
      <div className="search hide">
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
                <li><a><i style={{cursor:'pointer'}}
                  onClick={handleClick}
                  class="fas fa-bars"></i></a></li>
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
