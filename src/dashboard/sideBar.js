import React from 'react';
import './dashboard.css';
const SideBar = ({handleHide}) => {
    return (
        <>
            
            <a class="closebtn sidebar-btn"><i onClick={handleHide} class="fas fa-times" ></i></a>

           <div class="dashboard_buttons" id="change_active">
               <a class="btn" id="dashboard"><span>Dashboard</span></a>
               <a class="btn"><span>Message Window</span></a>
               <a class="btn"><span>All Product</span></a> 
           </div>
        </>
    )
}

export default SideBar;
