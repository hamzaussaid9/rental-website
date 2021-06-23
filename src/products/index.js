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
                                            latest.map(pro => {
                                                console.log(pro);
                                                return <Products
                                                    {...pro}
                                                />
                                            })
                                        
                                        :
                                        
                                            featured.map(pro => {
                                                console.log(pro);
                                                return <Products
                                                    {...pro}
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
