import React, {useState, useEffect} from 'react';

export default function ProductShow(props){

    const [product, setProduct] = useState({})

    
    async function fetchProduct(){
        const res = await fetch(`http://localhost:5000/products/${props.match.params.id}`);
        res
            .json()
            .then(res => setProduct(res.data.products))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchProduct();
    })

    return(
        <div className="product-show">
            <h1>{product.name}</h1>
            <br/>
            <img className="show-img" src={product.img_url} alt=""/>
            <p className="show-desc">{product.description}</p>
        </div>
    )
}