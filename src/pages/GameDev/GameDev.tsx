import { Link } from "react-router-dom";
import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";

/**
 * The index page for gamedev related pages
 */
const GameDev = () => {
    return (
        <div>
            <header>
                <DefaultNavbar/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Game Development Resources</h1>
                    <p className="text-muted">
                        This is a repository of information I reference for use in game development.
                    </p>
                    <Link to="/gamedev/mathfuncs">Math Functions</Link>
                </div>
            </main>
        </div>
    );
}

export default GameDev;