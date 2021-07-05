import React from 'react';
import './head.css';
import Change from '../header/change';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
const Head = () => {
    const [toggle, setToggle] = React.useState(false);
    const handleClick = () => {
    setToggle(toggle => !toggle);
    }
    return (
        <>
        <div class="head-bar">
            {
          toggle ? <Change toggle={toggle} handleClick={handleClick} /> : ''
        }        
       <div class="logo">
            <Link to ="/"> <img src={logo} /></Link>
      </div>
  <div class="head-nav-bar">
          
          <a href="#"><i class="fas fa-shopping-cart"></i></a> 
                    <a style={{cursor:"pointer"}} onClick={handleClick}><i class="fas fa-bars"></i></a>
  </div>
</div>
   
        </>
    )
}

export default Head;
