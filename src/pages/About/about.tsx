import React from 'react';
import { Link } from "react-router-dom";

import "./about.css";



interface AboutBlurbProps {
    title : string | JSX.Element,
    subText : string | JSX.Element,
};

const AboutBlurb : React.FC<AboutBlurbProps> = (props : AboutBlurbProps) => {
    let borderColor = "black";
    return (
        <div
            style={{
                paddingLeft: 30,
                paddingBottom: 50,
            }}
        >
            <div
                style={{
                    borderColor : borderColor,
                    borderWidth: 0,
                    borderBottomWidth : 1,
                    borderStyle : "solid",
                    maxWidth: 200,
                }}
            >{props.title}</div>
            <div
                style={{
                    paddingLeft: 15,
                }}
            >
                {props.subText}
            </div>
        </div>
    );
}

const About = () => {

    let blurbContents = [
        {key : 0, title : <div><a href="http://www.clemson.edu/cecas/departments/ece/">Computer Engineering</a> student</div>, subText : <>at <a href="https://www.clemson.edu/">Clemson University</a>.</>},
        {key : 1, title : "Software Engineer", subText : <>at <a href="https://www.swampfoxinc.com">Swampfox</a>.</>},
        {key : 2, title : "Programmer", subText : <>with <Link to="/projects">lots of projects.</Link></>},
        {key : 3, title : "Anime Enthusiast", subText : <><Link to="/anime">some text here</Link></>},
        {key : 4, title : "Outdoorsman", subText : <>{String.fromCodePoint(0x1F332)}</>},
    ];

    let blurbElements : JSX.Element[] = blurbContents.map((item) => {
        return <AboutBlurb title={item.title} subText={item.subText} key={item.key}/>;
    });

    return (
        <div className="AboutPage">
            <div className="AboutWindowBorder">
                <div className="AboutWindow">
                    <p>As of writing (11/25/2020) I am a(n) ...</p>
                    {blurbElements}
                    <p>Connect with me <Link to="/professional">here.</Link></p>
                    <p>View my employment history <Link to="/employment">here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default About;