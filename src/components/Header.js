import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <React.Fragment>
      <header className="top-container">
        <div className="container-row">
          <h1 className="block">Serina Mohammed</h1>
            <NavBar/>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;