import React, {useState, useEffect} from 'react';
import SteezProducts from './SteezProducts';

export default function SteezShow(props) {

    const [post, setPost] = useState({})

    
    async function fetchPost(){
        const res = await fetch(`http://localhost:5000/posts/${props.match.params.id}`);
        res
            .json()
            .then(res => setPost(res.data.posts))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchPost();
    })

    return(
        <div>
            <div className="product-show">
                <h1>{post.title}</h1>
                <br/>
                <img className="show-img" src={post.img_url} alt={post.title}/>
                <br/>
                <button className="button">Likes: {post.likes}</button>
            </div>
            <div>
                <p className="product-header">Outfit Pieces</p>
                <SteezProducts post={post}/>
            </div>
        </div>
    )
}