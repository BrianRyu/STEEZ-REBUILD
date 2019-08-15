import React from 'react';
import { Link } from 'react-router-dom'


export default function Home () {
    return (
        <div className="home-wrapper">
            <Link to="/mysteez">
                <img src={require("../Photos/mysteez.jpg")} alt="MY.STEEZ" className="home-banner" />
            </Link>
            
            <Link to="/steezhub" >
                <img src={require("../Photos/steezhub.jpg")} alt="STEEZ.HUB" className="home-banner" />
            </Link>
        </div>
    )
}