import * as React from "react"; 
import { Routes, BrowserRouter, Route } from "react-router-dom";
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

export const App = (): JSX.Element => {
    let [theme, setTheme] = React.useState(true)
    let themeValue: ThemeContextData = {
        getTheme: () => theme,
        setTheme: setTheme,
    }
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeContext.Provider value={themeValue}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/sources" element={<Sources/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </React.Suspense>
    );
}