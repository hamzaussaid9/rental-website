import React from 'react'
import { Link } from 'react-router-dom';
const Products = ({ discount, name, retail, offer,img }) => {
    return (
        <>
            <li key={ name}>
                      <div class="main">
                    <small class="discount">{discount}% OFF</small>
                    <Link to="/ProductDetails">
                    <figure>
                        <img src={img} />
                        </figure>
                        </Link>
                         <div class="figcaption">
                        <h3>{name}</h3>
                        <span>Retail Price: ${retail}.00</span>
                        <span>Offer Price:<small>${offer}.00</small></span>
                               <a href="#"><i class="icon-shopping-cart"></i>Add to cart</a>
                         </div>
                      </div>
                    </li>
        </>
    )
}

export default Products;
