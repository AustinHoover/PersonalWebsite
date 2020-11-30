import React from 'react';
import { Link } from "react-router-dom";



const ProjectsMajor = () => {
    return (
        <div className="page">
            <div className="ProjectsMajorWindowBorder">
                <div className="ProjectsMajorWindow">
                    <div>Project 1</div>
                    <div>Project 2</div>
                    <div>Project 3</div>
                    <Link to="/projects/all">See all projects here</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsMajor;