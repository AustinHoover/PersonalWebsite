import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { App } from "./App";

/**
 * Wraps the app so hooks don't complain
 */
const AppWrapper = () => {
    return (
        <App/>
    );
}

export default AppWrapper;