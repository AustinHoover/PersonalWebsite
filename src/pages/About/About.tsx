import * as React from "react";
import DefaultNavbar from "../../components/DefaultNavbar/DefaultNavbar";


const About = () => {
    return (
        <>
            <header>
                <DefaultNavbar name={"About"}/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">But who are you, really?</h1>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="text-center col-6">
                            <ul>
                                <li className="pt-2">
                                    My passion for as long as I can remember is making games.
                                </li>
                                <li className="pt-2">
                                    Recently I've really been getting into 3D modeling. 
                                    I've made a lot of "creations" in Blender.
                                    This <i>totally</i> isn't an extension of my desire to make games.
                                </li>
                                <li className="pt-2">
                                    I quite like video games! My claims to fame are in Osu! and Rainbow Six.
                                </li>
                                <li className="pt-2">
                                    Recently I've been trying to get more into robotics.
                                </li>
                            </ul>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;