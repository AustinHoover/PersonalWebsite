import * as React from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/Index/Index";
import NotFound from "../pages/NotFound/NotFound";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Sources from "../pages/Sources/Sources";

const App = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/sources" component={Sources}/>
                    <Route component={NotFound} exact/>
                </Switch>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default App;