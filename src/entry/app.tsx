import * as React from "react"; 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/Index/Index";
import NotFound from "../pages/NotFound/NotFound";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Sources from "../pages/Sources/Sources";
import { ThemeContextData } from "./theme";

export const ThemeContext = React.createContext<ThemeContextData>({
    getTheme: () => true,
    setTheme: (value: boolean) => {console.log(value)},
})

export const App = () => {
    let [theme, setTheme] = React.useState(true)
    let themeValue: ThemeContextData = {
        getTheme: () => theme,
        setTheme: setTheme,
    }
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeContext.Provider value={themeValue}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Index}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/sources" component={Sources}/>
                        <Route component={NotFound} exact/>
                    </Switch>
                </BrowserRouter>
            </ThemeContext.Provider>
        </React.Suspense>
    );
}