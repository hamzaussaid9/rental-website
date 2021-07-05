import React from 'react';
import './productsDetail.css';
import Head from './head'
import Product from './product';
import ProductExtra from './productExtra';
import RelatedWork from './relatedWork';

const Index = () => {
    React.useEffect(() => {
    window.scroll(0, 0);
},[])
    return (
        <>
            <Head />
            <Product />
            <ProductExtra />
            <RelatedWork />
        </>
    )
}

export default Index;
