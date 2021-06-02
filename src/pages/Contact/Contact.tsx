import * as React from "react";
import DefaultNavbar from "../../components/DefaultNavbar/DefaultNavbar";


const Contact = () => {
    return (
        <>
            <header>
                <DefaultNavbar name={"Contact"}/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Contacts</h1>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="text-left col-6">
                            <p>
                                <a href="mailto:austinwhoover@gmail.com">austinwhoover@gmail.com</a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/austin-hoover-b4a30b182/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="https://github.com/AustinHoover">Github</a>
                            </p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contact;