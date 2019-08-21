import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return(
        <div className="grid-item">
            <p className="product-font">{props.product.name}</p>
            <br/>
            <Link to={{pathname: `/product/${props.product.id}`, state: {product: props.product}}}>
                <img id={props.product.id} className="product-image" src={props.product.img_url} alt={props.product.name}/>
            </Link>
            <br/>
        </div>
    )
}