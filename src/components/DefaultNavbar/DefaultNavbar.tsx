import * as React from "react";
import { Link } from "react-router-dom";

interface NavEntry {
    name : string,
    link : string,
    external : boolean,
}

const entries : NavEntry[] = [
    {
        name: "Home",
        link: "/",
        external : false,
    },
    {
        name: "Projects",
        link: "/projects",
        external : false,
    },
    {
        name: "Technologies",
        link: "/technologies",
        external : false,
    },
    {
        name: "Contact",
        link: "/contact",
        external : false,
    },
    {
        name: "Resume",
        link: "/resume.pdf",
        external : true,
    },
    {
        name: "Github",
        link: "https://github.com/AustinHoover",
        external : true,
    },
    {
        name: "Sources",
        link: "/sources",
        external: false,
    }
];

export interface DefaultNavbarProps {
    name? : string,
}

const DefaultNavbar = (props : DefaultNavbarProps) => {
    let NavItems : JSX.Element[] = [];
    entries.forEach((el)=>{
        if(el.external){
            NavItems.push(
                <div className="nav-item" key={el.name + "navitem"}>
                    <a href={el.link} className="nav-link">{el.name}</a>
                </div>
            )
        } else {
            if(props.name){
                if(props.name === el.name){
                    NavItems.push(
                        <div className="nav-item active" key={el.name + "navitem"}>
                            <Link to={el.link} className="nav-link" >{el.name}</Link>
                        </div>
                    );
                } else {
                    NavItems.push(
                        <div className="nav-item" key={el.name + "navitem"}>
                            <Link to={el.link}  className="nav-link" >{el.name}</Link>
                        </div>
                    );
                }
            } else {
                NavItems.push(
                    <div className="nav-item" key={el.name + "navitem"}>
                        <Link to={el.link}  className="nav-link" >{el.name}</Link>
                    </div>
                );
            }
        }
    });
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarNav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button> */}
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav mr-auto">
                        {NavItems}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultNavbar;