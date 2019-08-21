import React from 'react';

export default function SteezFitCard(props) {
    return(
        <div className="grid-item">
            <p className="product-font">{props.post.name}</p>

            <img className="product-image" src={props.post.img_url} alt={props.post.name} />

            <p className="product-font" >Likes: {props.post.likes}</p>
        </div>
    )
}