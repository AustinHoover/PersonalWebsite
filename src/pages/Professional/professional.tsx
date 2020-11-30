import React from 'react';
import { Link } from "react-router-dom";



const Professional = () => {
    return (
        <div className="page">
            <div className="ProfessionalWindowBorder">
                <div className="ProfessionalWindow">
                    <div>
                        <div>Contact me</div>
                        <div>Email</div>
                    </div>
                    <div>
                        <div>Professional Information</div>
                        <Link to="/employment">Employment History</Link>
                        <div>Work Github</div>
                    </div>
                    <div>
                        <div>Connect with me</div>
                        <div>LinkedIn</div>
                        <div>Personal Github</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professional;