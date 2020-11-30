import React from 'react';
import { Link } from "react-router-dom";


import './descriptionbox.css';


const DescriptionBox = ({content=""}) => {
    return (
        <div className="DescriptionBoxBorder">
            <div className="DescriptionBox">
                <div className="DescriptionBoxTitle">
                    DESCRIPTION
                </div>
                <div className="descriptionBoxContent">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBox;