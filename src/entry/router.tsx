import * as React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { JsxElement } from "typescript";
import About from "../pages/About/about";
import Anime from "../pages/Anime/anime";
import Employment from "../pages/EmploymentHistory/employmentHistory";
import FOSSList from "../pages/FOSSList/fossList";


import Home from '../pages/home/home';
import Professional from "../pages/Professional/professional";
import ProjectsAll from "../pages/ProjectsAll/projectsAll";
import ProjectsMajor from "../pages/ProjectsMajor/projectsMajor";
//import Projects from '../pages/projects/projects'
//import Contact from '../pages/contact/contact';


//import ProjectRenderer from '../pages/projects/renderer/renderer';


const NotFound = React.lazy(() =>import('../components/404/404'));


export interface AppRouterProps {
    theme : string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}


export const AppRouter : React.FC<AppRouterProps> = (props : AppRouterProps) => {
    if(props.theme==="dark"){
        document.body.classList.add('body-style-dark');
        if(document.body.classList.contains('body-style-light')){
            document.body.classList.remove('body-style-light');
        }
    } else if(props.theme==="light") {
        document.body.classList.add('body-style-light');
        if(document.body.classList.contains('body-style-dark')){
            document.body.classList.remove('body-style-dark');
        }
    }

    if(!document.body.classList.contains('body-style')){
        document.body.classList.add('body-style');
    }

    let onToggleThemeListener = (event : React.MouseEvent) => {
        if(props.theme === "dark"){
            props.setTheme("light");
        } else {
            props.setTheme("dark");
        }
    }
    
    let navbarMenuPairs = [
        {key : 0, path : "/", name : "Home"},
        {key : 1, path : "/about", name : "About"},
        {key : 2, path : "/projects", name : "Projects"},
        {key : 3, path : "/professional", name : "Contact"}
    ];

    let navbarItemElements = navbarMenuPairs.map(
        (input) => {
            let backgroundColor = "darkgray";
            let foregroundColor = "black";
            if(props.theme === "dark"){
                backgroundColor = "000000";
                foregroundColor = "white";
            } else if(props.theme === "light"){
                backgroundColor = "lightgrey";
                foregroundColor = "black";
            }
            let returnedElement = 
            <Link
                to={input.path} 
                className="NavbarMenuItem"
                style={{backgroundColor : backgroundColor, color : foregroundColor}}
                key={input.key}
            >
                {input.name}
            </Link>;
            return returnedElement;
        }
    );

    let appContainerTheme = "app-container-dark";
    if(props.theme === "dark"){
        appContainerTheme = "app-container-dark";
    } else if(props.theme === "light"){
        appContainerTheme = "app-container-light";
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className={appContainerTheme}>
                    <div className="NavbarMenu">
                        {navbarItemElements}
                    </div>
                    <button onClick={onToggleThemeListener}>Theme</button>
                    <div className="content">
                        <div className="content-centered">
                            <Switch>
                                <Route path="/about" exact component={About}/>
                                <Route path="/anime" exact component={Anime}/>
                                <Route path="/employment" exact component={Employment}/>
                                <Route path="/foss" exact component={FOSSList}/>
                                <Route path="/" exact component={Home}/>
                                <Route path="/professional" exact component={Professional}/>
                                <Route path="/projects/all" exact component={ProjectsAll}/>
                                <Route path="/projects" exact component={ProjectsMajor}/>
                                <Route component={NotFound} exact/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </React.Suspense>
    );
};
