import { DefaultNavbar } from "../../components/DefaultNavbar/DefaultNavbar";
import * as StarImage from "./StarImage.jpg";

const Index = () => {
    return (
        <div
        style={{
            backgroundImage : `url(${StarImage})`,
            backgroundSize : "cover",
            height: "100vh",
        }}
        >
            <div
            style={{
                backgroundImage : `url(${StarImage})`,
                backgroundSize : "cover",
                height: "100vh",
            }}
            >
                <header>
                    <DefaultNavbar name={"Home"}/>
                </header>
                <main role="main">
                    <div className="container">
                        <div className="row"></div>
                        <div className="row text-center">
                            <div className="col">
                                <h1 className="p-3 text-light display-1">Hello</h1>
                                <p className="text-light display-4">
                                    This is the homepage of Austin Hoover.
                                </p>
                                {/* <img className="card-img-top text-light" src="" alt="There was supposed to be a picture of my face here"></img> */}
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Index;