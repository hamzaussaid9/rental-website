import React from 'react';
import img from '../image/footer.png';
import logo from '../image/logo.png';
import './footer.css';
const Index = () => {
    return (
        <>
            <div className="footer">
  <div className="section1">
   <div className="container">
      <div className="main">

      <div className="address">
                <figure><img src={logo} /></figure>
         <div className="address-data">
           <ul>
             <li><i className="fas fa-map-marker-alt"></i> <a href="#">4771 Harper Street Madisonville, KY 42431</a></li>
              <li><i className="fas fa-map-marker-alt"></i><i className="fas fa-phone-alt"></i> <a href="#">(012) 345 - 6789</a></li>
               <li><i className="fas fa-envelope"></i><a href="#">info@gmail.com</a></li>
           </ul>
         </div>
        </div>  

      <div className="get-in-touch">
         <h3>Get To Know Us</h3>
         <div className="alternative">
           <ul>
             <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">About Us</a></li>
              <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Blog</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Newsletter</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i> <a href="#">Careers</a></li>
              <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Privacy Policy</a></li>
           </ul>
         </div>
        </div> 
 
          <div className="support">
         <h3>Support</h3>
         <div className="alternative">
           <ul>
             <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Rental Agreement</a></li>
              <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Help</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Our Process</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i> <a href="#">Contact Us</a></li>
           </ul>
         </div>
        </div>  

          <div className="services">
         <h3>Services</h3>
         <div className="alternative">
           <ul>
             <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Gift Certificates</a></li>
              <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Lensrentals HD</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Keeper</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i> <a href="#">Lenscap+</a></li>
              <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Refer a Friend</a></li>
               <li><i className="fas fa-long-arrow-alt-right"></i><a href="#">Affiliate</a></li>
           </ul>
         </div>
        </div>  

      </div>
   </div>
  </div>
  <div>
      <div className="section_two">
    <img src={img} />
    <div className="container">
     <div className="social_icon">
              <a href="#"><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a href="#"><i className="fab fa-invision"></i></a><a href="#"><i className="fab fa-google-plus-g"></i></a><a href="#"><i className="fab fa-instagram"></i></a>
     </div>
      <small>© 2021 copy right reserved.</small>

   </div>

 </div>
</div>
</div>    
        </>
    )
}

export default Index;
