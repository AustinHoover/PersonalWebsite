import * as React from "react"; 
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Index from "../pages/Index/Index";
import NotFound from "../pages/NotFound/NotFound";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Sources from "../pages/Sources/Sources";
import GameDev from "../pages/GameDev/GameDev";
import MathFuncs from "../pages/GameDev/MathFuncs/MathFuncs";
import { MathJaxContext } from "better-react-mathjax";

/**
 * The app itself
 */
export const App = (): JSX.Element => {

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <MathJaxContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/sources" element={<Sources/>} />
                        <Route path="/gamedev" element={<GameDev/>} />
                        <Route path="/gamedev/mathfuncs" element={<MathFuncs/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </BrowserRouter>
            </MathJaxContext>
        </React.Suspense>
    );
}