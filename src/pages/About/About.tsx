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
                    <h1 className="p-3">But who are you really, Austin?</h1>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="text-center col-8">
                            <ul className="list-group">
                                <li className="list-group-item pt-2">
                                    My passion for as long as I can remember is making games.
                                </li>
                                <li className="list-group-item pt-2">
                                    Recently I've really been getting into 3D modeling. 
                                    I've made a lot of "creations" in Blender.
                                    This <i>totally</i> isn't an extension of my desire to make games.
                                </li>
                                <li className="list-group-item pt-2">
                                    Although neglected for a while, I'm resolving to get back into painting and drawing.
                                    Web Development has proven to be an excellent outlet for my creative inclinations.
                                </li>
                                <li className="list-group-item t-2">
                                    I quite like video games! My claims to fame are in Osu! and Siege.
                                </li>
                                <li className="list-group-item pt-2">
                                    Recently I've been trying to get more into robotics.
                                </li>
                            </ul>
                            <br/>
                            <p>🎵</p>
                            <p>I'm likely listening to electro swing, DnB, EDM, heavy metal, or something more obscure. </p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;