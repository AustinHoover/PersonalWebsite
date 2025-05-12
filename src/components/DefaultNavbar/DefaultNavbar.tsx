import * as React from "react";
import { Link } from "react-router-dom";
import MoonIcon from "!@svgr/webpack?modules!bootstrap-icons/icons/moon-fill.svg";
import SunIcon from "!@svgr/webpack?modules!bootstrap-icons/icons/sun-fill.svg";
import ReactSwitch from "react-switch";
import { defaultEntries } from "./naventry";
import { getThemeIsDarkMode, setThemeIsDarkMode } from "../../stores/themeStore";

/**
 * Props for the navbar component itself
 */
export interface DefaultNavbarProps {
    name? : string,
}

/**
 * The navbar component
 */
export const DefaultNavbar = (props : DefaultNavbarProps) => {

    //Theme control related
    const [theme, setTheme] = React.useState<boolean>(!getThemeIsDarkMode())
    const onToggleDarkMode = (checked: boolean) => {
        setThemeIsDarkMode(checked)
        setTheme(checked)
    }

    //theme control for navbar itself
    document.documentElement.setAttribute('data-bs-theme', theme ? "light" : "dark")
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
    defaultEntries.forEach((el)=>{
        if(el.external){
            if(el.isIcon){
                //an icon
                NavItems.push(
                    <div className="nav-item" key={el.name + "navitem"}>
                        <a href={el.link} className="nav-link"><i className={el.name} role="button" style={{
                            fontSize: "1.2rem",
                            color: "gray",
                        }}></i></a>
                    </div>
                )
            } else {
                //an external non-icon
                NavItems.push(
                    <div className="nav-item" key={el.name + "navitem"}>
                        <a href={el.link} className="nav-link">{el.name}</a>
                    </div>
                )
            }
        } else {
            //internal links
            NavItems.push(
                <div className={props?.name === el.name ? "nav-item active" : "nav-item"} key={el.name + "navitem"}>
                    <Link to={el.link} className="nav-link" >{el.name}</Link>
                </div>
            );
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