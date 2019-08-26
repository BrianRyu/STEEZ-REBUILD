import React from 'react';
import ProductCard from './ProductCard';

export default function SteezProducts(props){
    console.log(props)
    return(
        <div>
            <ul className="grid-container">
                {props.post.products ? props.post.products.map(product => <ProductCard product={product}/>) : null}
            </ul>
        </div>
    )
}