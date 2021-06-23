import React from 'react';
import Products from './products';
import {products, latest,featured} from '../variables';

const Index = () => {
    return (
    <>
            {
                products.map(product => {
                    return (
                        <div className="our-latest-product" id="latest-product"> 
             <div className="container">
                                <h4>{product}</h4>
               <p>Check our latest arrivals and <br />start shopping</p>
               <div class="list">
                 <ul class="sliderTwo">
                                       { (product === 'Our Latest Products') ?
                                            latest.map((pro,index) => {
                                                
                                                return <Products
                                                    {...pro}
                                                    key={index}
                                                />
                                            })
                                        
                                        :
                                        
                                            featured.map((pro,index) => {
                                                
                                                return <Products
                                                    {...pro}
                                                    key={index}
                                                />
                                            })
                                        }
                 </ul>
               </div> 
             </div>
 
           </div >

                    );
                })
            }
            
        </>
    );
}

export default Index;
