import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return(
        <div className="grid-item">
            <p className="product-font">{props.product.name}</p>
            <br/>
            <Link to={`/product/${props.product.id}`}>
                <img className="product-image" src={props.product.img_url} alt={props.product.name}/>
            </Link>
            <br/>
        </div>
    )
}