import React, {useState, useEffect} from 'react';

import SteezFitCard from './SteezFitCard';

export default function AllFits(){

    const [fits, setFits] = useState([])

    async function fetchFits(){
        const res = await fetch('http://localhost:5000/posts');
        res
            .json()
            .then(res => setFits(res.data.posts))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchFits();
    })

    return(
        <div>
            <ul className="grid-container">
                {fits ? fits.map(post => <SteezFitCard post={post}/>) : null}
            </ul>
        </div>
    )
}