import * as React from "react";
import DefaultNavbar from "../../components/DefaultNavbar/DefaultNavbar";
import "./Technologies.css";

const Technologies = () => {
    return (
        <>
            <header>
                <DefaultNavbar name={"Technologies"}/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Technologies</h1>
                    <p className="text-muted">Some of the technologies I am more familiar with.</p>
                    <div className="accordion" id="accordionExample">
                        {/* Languages */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingLanguages">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseLanguages" aria-expanded="true" aria-controls="collapseLanguages">
                                    Languages
                                </button>
                            </h2>
                            <div id="collapseLanguages" className="accordion-collapse collapse" aria-labelledby="headingLanguages" data-parent="#accordionExample">
                                <div className="accordion-body">
                                <h5>Very familiar languages:</h5>
                                    <ul className="text-left">
                                        <li>Javascript/Typescript</li>
                                        <li>Java</li>
                                        <li>C</li>
                                        <li>Python</li>
                                    </ul>
                                    <h5>Somewhat familiar languages:</h5>
                                    <ul className="text-left">
                                        <li>Elixir</li>
                                        <li>Bash</li>
                                        <li>PostgresQL</li>
                                        <li>x86 Assembly</li>
                                    </ul>
                                    <h5>Working to learn:</h5>
                                    <ul className="text-left">
                                        <li>Rust</li>
                                        <li>R</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Front end techs */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Frontend
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5>Most familiar:</h5>
                                    <ul className="text-left">
                                        <li>React / React Router / React Hooks</li>
                                        <li>Typescript</li>
                                        <li>Bootstrap</li>
                                        <li>D3</li>
                                        <li>Webpack</li>
                                        <li>SCSS</li>
                                    </ul>
                                    <p>
                                        I have experience developing production facing webapps.
                                        I have acquired significant exposure to various technologies through pursuit of personal projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* backend techs */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Backend
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5>Backend Frameworks I am familiar with:</h5>
                                    <ul className="text-left">
                                        <li>Express</li>
                                        <li>Node</li>
                                        <li>Spring / Boot / Security (with Tomcat)</li>
                                        <li>Flask</li>
                                        <li>Phoenix</li>
                                    </ul>
                                    <h5>Misc related techs I am familiar with:</h5>
                                    <ul className="text-left">
                                        <li>GraphQL</li>
                                        <li>Swagger</li>
                                        <li>Tomcat</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* data science techs */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Data Science / Machine Learning
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5>Experience</h5>
                                    <p>
                                        My machine learning experience comes primarily from school work.
                                        While in school I worked under a machine learning focused research group.
                                        We worked on a wide variety of problems.
                                        It was particularly helpful in my understanding of how to apply the tools involved to various problems.
                                        I learned a lot about how to determine if it would be a good idea to apply a neural network to different types of problems.
                                    </p>
                                    <h5>Toolset</h5>
                                    <ul className="text-left">
                                        <li>Tensorflow</li>
                                        <li>Pandas</li>
                                        <li>Numpy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* graphics techs */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Graphics
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        My primary graphics experience is with Opengl via LWJGL.
                                        This has exposed me to GLSL, OpenAL, and Assimp.
                                    </p>
                                    <p>
                                        That said, I have experience writing cpu-only software renderers.
                                        I have written both a ray tracer as well as a polygon renderer that run cpu-only.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* embedded techs */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Embedded
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h4>Brands of microcontrollers I have worked with:</h4>
                                    <ul className="text-left">
                                        <li>PIC32 & PIC18</li>
                                        <li>ESP32</li>
                                        <li>Arduino</li>
                                    </ul>
                                    <p>I have significant experience working with C and x86 Assembly as well as in Linux-based systems programming.</p>
                                    <p>I have also worked extensively with Raspberry PIs.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default Technologies;