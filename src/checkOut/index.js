import React from 'react';
import './checkOut.css';
import image from '../image/new-one.jpg';

const Index = () => {
    return (
        <>
            <div class="checkout-body">
  
       <div class="container">
         <span>Shopping Cart:</span>
         <div class="checkout">
           <div class="main">

            <div class="product">
             <div class="product-detail">
                <figure><img src={image} /><figcaption><p>Rent a Aputure LS 600d Pro Light Storm Daylight LED Light</p>
               </figcaption></figure>
               <div class="quantity">
                <form>
                  <label>QNT</label>
                  <input type="number"></input>
                </form>
              </div>
                <div class="price"><label>price</label><strong>$300</strong></div>  
             </div> 
           </div>


           </div>


          <div class="checkout-info">
        <form>    
            <div class="charges">
               <div class="price"><strong>$300</strong><span><small>1</small><h6>day</h6><h5>Rental</h5></span> </div>
              
               <div class="dates">

            <div class="search-icon"><input class="location" type="text" placeholder="start date" onfocus="(this.type='date')"  onblur="(this.type='text')" /><i class="far fa-calendar-minus" id="cancle"></i></div><div class="search-icon"><input class="location" type="text" placeholder="End date" onfocus="(this.type='date')"  onblur="(this.type='text')"></input><i class="far fa-calendar-minus" id="cancle"></i></div>
             </div>
              <div class="checkout-button">
                <button type="button">Proceed To Check Out</button>
                                    </div>
                                    </div>
        </form>
               </div>
                        </div>
            
            </div>
          </div>

            
        </>
    )
}

export default Index;
