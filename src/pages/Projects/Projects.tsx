import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";
import ProjectListing, { ProjectListingProps } from "../../components/ProjectListing/ProjectListing";
import * as treePic from '../../assets/GameEngineTree.png';
import * as hierarchy from '../../assets/hierarchy.png';
import * as raytracer from '../../assets/raytracer.gif';
import * as terrain from '../../assets/terrain.gif';
import * as telephoneIcon from '../../assets/Telephone-icon.png';
import * as hoi4ide from '../../assets/hoi4ide.png';
import * as projectListings from '../../assets/projectDefns.json';
import { getImageUrl } from "../../utils/staticImageMap";

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
    const projectEls: JSX.Element[] = projectsFile.projects.map(listing => {
        const imgPath: string = getImageUrl(listing.imgpath)
        return <div className="col">
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