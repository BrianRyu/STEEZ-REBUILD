import React from 'react';

import { Link } from 'react-router-dom';

import SteezList from '../components/SteezList'

export default function MySteez() {
    return(
        <div>
            <h1 className="product-header"> My Fits</h1>
            <Link to="/add-post">
            <button className="product-add-button">+</button>
            </Link>
            <SteezList />
        </div>
    )
}