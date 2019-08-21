import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';

export default function AllProducts(){

    const [products, setProducts] = useState([]);

    async function fetchProducts(){
        const res = await fetch('http://localhost:5000/products');
        res
            .json()
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchProducts();
    })

    return (
        <div>
            <ul className='grid-container'>
                {products.map(product => <ProductCard product={product} />)}
            </ul>
        </div>
    )
}