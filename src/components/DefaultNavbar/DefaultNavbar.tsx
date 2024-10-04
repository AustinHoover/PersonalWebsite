import * as React from "react";
import { Link } from "react-router-dom";
import MoonIcon from "!@svgr/webpack?modules!bootstrap-icons/icons/moon-fill.svg";
import SunIcon from "!@svgr/webpack?modules!bootstrap-icons/icons/sun-fill.svg";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../entry/App";

interface NavEntry {
    name : string,
    link : string,
    external : boolean,
    isIcon : boolean,
}

const entries : NavEntry[] = [
    {
        name: "Home",
        link: "/",
        external : false,
        isIcon : false,
    },
    {
        name: "Projects",
        link: "/projects",
        external : false,
        isIcon : false,
    },
    {
        name: "Contact",
        link: "/contact",
        external : false,
        isIcon : false,
    },
    {
        name: "Resume",
        link: "/AustinHooverResume.pdf",
        external : true,
        isIcon : false,
    },
    {
        name: "Sources",
        link: "/sources",
        external: false,
        isIcon : false,
    },
    {
        name: "bi bi-github",
        link: "https://github.com/AustinHoover/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-linkedin",
        link: "https://www.linkedin.com/in/austin-hoover-b4a30b182/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-twitter",
        link: "https://twitter.com/railgunsr/",
        external: true,
        isIcon: true,
    },
    {
        name: "bi bi-envelope-fill",
        link: "mailto:austinwhoover@gmail.com",
        external: true,
        isIcon: true,
    }
];

export interface DefaultNavbarProps {
    name? : string,
}

export const DefaultNavbar = (props : DefaultNavbarProps) => {

    //Theme control related
    let context = React.useContext(ThemeContext)
    const onToggleDarkMode = (checked: boolean) => {
        context.setTheme(checked)
        document.documentElement.setAttribute('data-bs-theme', checked ? "light" : "dark")
    }
    const theme = context.getTheme()

    //narbar itself
    const navbarColors: string = "navbar navbar-expand-lg " + (theme ? "navbar-light bg-light" : "navbar-dark bg-dark")
    const collapsingProps = {
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": false,
        "aria-label": "Toggle navigation",
    }

    //links inside the navbar
    let NavItems : JSX.Element[] = [];
    entries.forEach((el)=>{
        if(el.external){
            if(el.isIcon){
                NavItems.push(
                    <div className="nav-item" key={el.name + "navitem"}>
                        <a href={el.link} className="nav-link"><i className={el.name} role="button" style={{
                            fontSize: "1.2rem",
                            color: "gray",
                        }}></i></a>
                    </div>
                )
            } else {
                NavItems.push(
                    <div className="nav-item" key={el.name + "navitem"}>
                        <a href={el.link} className="nav-link">{el.name}</a>
                    </div>
                )
            }
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
        <div className={navbarColors}>
            <button className="navbar-toggler" type="button" {...collapsingProps}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <div className="navbar-nav mr-auto">
                    {NavItems}
                </div>
                <ReactSwitch
                    className="m-2"
                    checked={theme}
                    onChange={onToggleDarkMode}
                    checkedIcon={false}
                    checkedHandleIcon={<SunIcon
                        style={{
                            width: "80%",
                            height: "80%",
                            marginTop: "10%",
                            marginLeft: "10%",
                            verticalAlign: "baseline",
                            color: "black",
                        }}
                        width={undefined}
                        height={undefined}
                        viewBox="0 0 16 16"
                    />}
                    onColor={"#ffd036"}
                    uncheckedIcon={false}
                    uncheckedHandleIcon={<MoonIcon
                        style={{
                            width: "80%",
                            height: "80%",
                            marginTop: "10%",
                            marginLeft: "10%",
                            verticalAlign: "baseline",
                            color: "black",
                        }}
                        width={undefined}
                        height={undefined}
                        viewBox="0 0 16 16"
                    />}
                    offColor={"#2251bf"}
                />
            </div>
        </div>
    );
}