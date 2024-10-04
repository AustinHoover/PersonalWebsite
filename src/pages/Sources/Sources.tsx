import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";


const Sources = () => {
    return (
        <div>
            <header>
                <DefaultNavbar name={"Sources"}/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Sources</h1>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="text-left col-6">
                            <p>
                                The image used on the landing page is from <a href="https://images.nasa.gov/details-PIA10182">NASA</a>.
                                They do cool photography.
                            </p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Sources;