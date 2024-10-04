
/**
 * Props
 */
export interface ProjectListingProps {

    /**
     * The title of the project
     */
    title : string,

    /**
     * The description inset in the card
     */
    description : string,

    /**
     * The path to the image file to display with the card
     */
    imgpath : string,

    /**
     * If provided, will populate a github button to link to the source code for the project
     */
    githublink? : string,
    
}

/**
 * A single card on the projects page
 */
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