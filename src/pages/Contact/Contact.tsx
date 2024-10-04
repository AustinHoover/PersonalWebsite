import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";

/**
 * The contact page
 */
const Contact = () => {
    return (
        <div>
            <header>
                <DefaultNavbar name={"Contact"}/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Contacts</h1>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="text-center col-6">
                            <p>
                                <a href="mailto:austin@austinhoover.net">austin@austinhoover.net</a>
                            </p>
                            <p>
                                <a href="https://github.com/AustinHoover">Github</a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/austin-hoover-b4a30b182/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="https://twitter.com/railgunsr">Twitter</a>
                            </p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;