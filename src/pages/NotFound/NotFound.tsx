import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";

/**
 * The 404 page
 */
const NotFound = () => {
    return (
        <div>
            <header>
                <DefaultNavbar/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1>404</h1>
                    <p className="text-muted">
                        Couldn't find that page.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default NotFound;