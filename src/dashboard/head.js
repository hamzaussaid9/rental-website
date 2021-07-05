import React from 'react';
import './dashboard.css';
import SideBar from './sideBar';
import { Link } from 'react-router-dom';
import image from '../image/logo.png';
const DashHead = ({type}) => {
    const [show, setShow] = React.useState(false);
    const handleShow = () => {
        if (!show)
            setShow(true);
    }
    const handleHide=()=>{
        setShow(false);
    }
    return (
        <>
            <div class="dash-header-bar">
    
     <div class="dash-sidebar-btn">
                    <i class="fas fa-bars" onClick={handleShow}></i>
      </div>

                <div class="logo">
                <Link to="/">
                <img src={image} />
                </Link>
      </div>

            </div>
            
            <SideBar show={show} type={type} handleHide={handleHide} />
        </>
    )
}

export default DashHead;
