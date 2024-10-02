import * as React from "react";
import { Link } from "react-router-dom";


export interface ProjectListingProps {
    title : string,
    description : string,
    imgpath : string,
    githublink? : string,
}

const ProjectListing = (props : ProjectListingProps) => {
    
    return (
        <div className="card m-2 shadow">
            <img className="card-img-top p-2" src={props.imgpath} alt="Card image"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                {
                    props.githublink ? <a href={props.githublink} className="btn btn-primary">Github</a> : <div/>
                }
            </div>
        </div>
    );
}

export default ProjectListing;