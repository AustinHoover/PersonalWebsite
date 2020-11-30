import React from 'react';
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="page">
            <div className="HomeWindowBorder">
                <div className="HomeWindow">
                    <h1 className="hello-world-text">Salutations!</h1>
                    <div>
                        <p className="bio-text">My name is Austin Hoover and this is my website.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;