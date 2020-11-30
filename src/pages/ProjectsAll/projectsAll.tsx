import React from 'react';
import { Link } from "react-router-dom";



const ProjectsAll = () => {
    return (
        <div className="page">
            <div className="ProjectsAllWindowBorder">
                <div className="ProjectsAllWindow">
                    <div>Project 1</div>
                    <div>Project 2</div>
                    <div>Project 3</div>
                    <div>Project 4</div>
                    <div>Project 5</div>
                    <div>Project 6</div>
                    <Link to="/projects">Just the highlights here</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsAll;