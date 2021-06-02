import * as React from "react";
import DefaultNavbar from "../../components/DefaultNavbar/DefaultNavbar";
import ProjectListing from "../../components/ProjectListing/ProjectListing";
//@ts-ignore
import * as chocobo from './chocobo.png';
//@ts-ignore
import * as computer from './computer.png';
//@ts-ignore
import * as hierarchy from './hierarchy.png';
//@ts-ignore
import * as raytracer from './raytracer.gif';
//@ts-ignore
import * as rts from './rts.png';
//@ts-ignore
import * as stocks from './stocks.png';
//@ts-ignore
import * as terrain from './terrain.gif';


const Projects = () => {
    return (
        <>
            <header>
                <DefaultNavbar name={"Projects"}/>
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
                    <div className="card-columns">
                        <ProjectListing 
                            title={"Terrain Generation Library"}
                            description={"A library I designed for generating terrain. Above is a video of it in action. It simulates plate tectonics to create semi-realistic landmasses."}
                            imgpath={terrain}
                        />
                        <ProjectListing 
                            title={"IT Management Software"}
                            description={"While working in IT, I wrote software that performed various tasks and was managable from a central reporting server."}
                            imgpath={hierarchy}
                        />
                        <ProjectListing 
                            title={"Digital Processor"}
                            description={"After feeling very inspired in class I designed the circuit logic for a rudimentary processor."}
                            imgpath={computer}
                        />
                        <ProjectListing 
                            title={"Rendering Engine"}
                            description={"A fully functional game engine. It supports dynamic terrain LOD, model loading, networking, an audio engine, and hooks into my terrain generation library."}
                            imgpath={chocobo}
                        />
                        <ProjectListing 
                            title={"Ray Tracer"}
                            description={"I wrote this ray tracer in highschool. The code is gross but hey it's a pretty gif."}
                            imgpath={raytracer}
                        />
                        <ProjectListing 
                            title={"RTS Engine"}
                            description={"Written many moons ago, this is a complex real time strategy game engine. It supports a bunch of stuff and is generally too complicated to summarize in a little box."}
                            imgpath={rts}
                        />
                        <ProjectListing 
                            title={"Cryptocurrency Research Framework"}
                            description={"I attempted to construct a framework for cryptocurrency analysis. I designed very robust and complicated software. I was ultimately unsuccessful in my pursuit. Turns out predicting the future is a hard problem."}
                            imgpath={stocks}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Projects;