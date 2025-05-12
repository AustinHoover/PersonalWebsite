import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";
import ProjectListing, { ProjectListingProps } from "../../components/ProjectListing/ProjectListing";
import * as projectListings from '../../assets/projects/projectDefns.json';
import { getAssetUrl } from "../../utils/staticAssetMap";

/**
 * Interface for the assets json file
 */
interface ProjectListingFile {
    /**
     * The list of projects
     */
    projects: ProjectListingProps[]
}

/**
 * The listing of all projects
 */
const Projects = () => {

    //load project listings file
    const projectsFile = JSON.parse(projectListings as any as string) as ProjectListingFile
    const projectEls: JSX.Element[] = projectsFile.projects.map((listing, i) => {
        const imgPath: string = getAssetUrl(listing.imgpath)
        return <div className="col" key={'listing' + i}>
                    <ProjectListing 
                        title={listing.title}
                        description={listing.description}
                        imgpath={imgPath}
                        githublink={listing.githublink}
                    />
                </div>
    })


    return (
        <div>
            <header>
                <DefaultNavbar/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Project Showcase</h1>
                    <p className="text-muted">
                        These include any projects I have worked on outside of work and ones I am not under NDA for.
                    </p>
                    <p className="text-muted">
                        Someday maybe these boxes will be clickable.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {projectEls}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;