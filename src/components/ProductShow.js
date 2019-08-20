import React, {useState, useEffect} from 'react';

export default function ProductShow(){

    const [product, setProduct] = useState({})

    async function fetchProduct(id){
        const res = fetch(`http://localhost:5000/products/${id}`);
        res
            .json()
            .then(res => setProduct(res))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchProduct();
    })

    return(
        <div>
            {console.log(product)}
        </div>
    )
}