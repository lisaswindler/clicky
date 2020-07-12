import React from "react";
import "./style.css";

function NavTabs() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">Wild & Clicky</a>
        <h4 className="navbar-text">
          Score: {this.props.score} | Top Score: {this.props.topScore}
        </h4>
      </div>
    </nav>
  </>
  );
}

export default NavTabs;
