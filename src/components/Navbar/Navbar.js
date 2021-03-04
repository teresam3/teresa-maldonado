import React from "react";
import "./index.css"


function Navbar() {
    return (
        <div>
            <nav className="navbar justify-content-center">
                <div>
                    <h1>
                        <a className="navbar-brand name-logo" href="./index.html">teresa maldonado</a>
                    </h1>
                </div>
                {/* <ul className="navbar-nav" id="btn">
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutModal">about</button>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#contactModal">contact</button>
                        <span className="sr-only">(current)</span>
                    </li>
                </ul> */}
            </nav>
        </div>
    )
};

export default Navbar;