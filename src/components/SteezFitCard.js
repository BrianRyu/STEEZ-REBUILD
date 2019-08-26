import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function SteezFitCard(props) {


    return(
        <div className="grid-item">
            <p className="product-font">{props.post.title}</p>
            <Link to={{pathname: `/posts/${props.post.id}`, state: {post: props.post}}}>
            <img className="product-image" src={props.post.img_url} alt={props.post.name} />
            </Link>
            <p className="product-font" >Likes: {props.post.likes}</p>
        </div>
    )
}