import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";
import ProjectListing from "../../components/ProjectListing/ProjectListing";
//@ts-ignore
import * as treePic from './GameEngineTree.png';
//@ts-ignore
import * as hierarchy from './hierarchy.png';
//@ts-ignore
import * as raytracer from './raytracer.gif';
//@ts-ignore
import * as terrain from './terrain.gif';
//@ts-ignore
import * as telephoneIcon from './Telephone-icon.png';
//@ts-ignore
import * as hoi4ide from './hoi4ide.png';


const Projects = () => {
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
                        <div className="col h-100 flex-grow-1">
                            <ProjectListing 
                                title={"3D Game Engine"}
                                description={"A fully functional game engine. It supports synchronized networking, scripting, physics, order-independent transparency, clustered lighting, and hooks into my terrain generation library."}
                                imgpath={treePic}
                            />
                        </div>
                        <div className="col">
                            <ProjectListing 
                                title={"HOI4 IDE"}
                                description={"A partially complete IDE for building mods for the video game Hearts of Iron 4."}
                                imgpath={hoi4ide}
                                githublink={"https://github.com/AustinHoover/hoi4ide"}
                            />
                        </div>
                        <div className="col">
                        <ProjectListing 
                                title={"Telephone"}
                                description={"A games netcode parser generator written in Java."}
                                imgpath={telephoneIcon}
                                githublink={"https://github.com/AustinHoover/Telephone"}
                            />
                        </div>
                        <div className="col">
                            <ProjectListing 
                                title={"Ray Tracer"}
                                description={"I wrote this ray tracer in highschool. The code is gross but hey it's a pretty gif."}
                                imgpath={raytracer}
                            />
                        </div>
                        <div className="col">
                            <ProjectListing 
                                title={"IT Management Software"}
                                description={"While working in IT, I wrote software that performed various tasks and was managable from a central reporting server."}
                                imgpath={hierarchy}
                            />
                        </div>
                        <div className="col">
                            <ProjectListing 
                                title={"Terrain Generation Library"}
                                description={"A library I designed for generating terrain. Above is a video of it in action. It simulates plate tectonics to create semi-realistic landmasses."}
                                imgpath={terrain}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;