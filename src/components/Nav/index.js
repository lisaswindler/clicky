import React from "react";
import "./style.css";

function NavTabs() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <p className="navbar-text">
                    Click away! But don't click on the same animal twice...
                        {/* Score: {this.props.score} | Top Score: {this.props.topScore} */}
                    </p>
                </div>
            </nav>
        </>
    );
}

export default NavTabs;
