import { MathJax } from "better-react-mathjax";
import { DefaultNavbar } from "../../../components/DefaultNavbar/DefaultNavbar";
import FuncItem from "./FuncItem";

/**
 * The giant page of math functions
 */
const MathFuncs = () => {
    return (
        <div>
            <header>
                <DefaultNavbar/>
            </header>
            <main role="main">
                <div className="container text-center">
                    <h1 className="p-3">Math Functions List</h1>
                    <p className="text-muted">
                        This is a long list of math functions. It's intended to be used as a reference during shader development.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Basic</h3>
                                <div className="">
                                    <FuncItem latex="y = x"/>
                                    <FuncItem latex="y = a + x"/>
                                    <FuncItem latex="y = a - x"/>
                                    <FuncItem latex="y = a \cdot x"/>
                                    <FuncItem latex="y = \frac{1}{x}"/>
                                    <FuncItem latex="y = x \bmod a"/>
                                    <FuncItem latex="y = x^{a}"/>
                                    <FuncItem latex="y = x^{\frac{1}{a}}"/>
                                    <FuncItem latex="y = \log(x)"/>
                                    <FuncItem latex="y = \sqrt{x}"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Logical</h3>
                                <div className="">
                                    <FuncItem latex="y = \mathrm{abs}(x)"/>
                                    <FuncItem latex="y = \min(x)"/>
                                    <FuncItem latex="y = \max(x)"/>
                                    <FuncItem latex="y = \mathrm{clamp}(x)"/>
                                    <FuncItem latex="y = \mathrm{inverse}(x)"/>
                                    <FuncItem latex="y = \mathrm{sign}(x)"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Trigonometry</h3>
                                <div className="">
                                    <FuncItem latex="y = \sin(x)"/>
                                    <FuncItem latex="y = \cos(x)"/>
                                    <FuncItem latex="y = \tan(x)"/>
                                    <FuncItem latex="y = \arcsin(x)"/>
                                    <FuncItem latex="y = \arccos(x)"/>
                                    <FuncItem latex="y = \arctan(x)"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Geometric</h3>
                                <div className="">
                                    <FuncItem latex="y = \mathrm{length}(x)"/>
                                    <FuncItem latex="y = \mathrm{dot}(x)"/>
                                    <FuncItem latex="y = \mathrm{cross}(x)"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Noise</h3>
                                <div className="">
                                    <FuncItem latex="y = \mathrm{simplex}(x,z)"/>
                                    <FuncItem latex="y = \mathrm{voronoi}(x,z)"/>
                                    <FuncItem latex="y = \mathrm{smoothVoronoi}(x,z)" size="large"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow m-2 p-3">
                                <h3>Signals</h3>
                                <div className="">
                                    <FuncItem latex="y = \delta(x)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MathFuncs;