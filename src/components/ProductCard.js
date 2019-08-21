import React from 'react';


export default function ProductCard(props) {

    function handleClick(e){
        console.log(e.target.id)
        
    }

    
    return(
        <div className="grid-item">
            <p className="product-font">{props.product.name}</p>
            <br/>
            <img onClick={handleClick} id={props.product.id} className="product-image" src={props.product.img_url} alt={props.product.name}/>
            <br/>
        </div>
    )
}