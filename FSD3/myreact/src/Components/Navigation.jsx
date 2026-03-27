import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand text-white">Dev Portfolio</a>

        <div className="d-flex gap-3">
          <a href="#home" className="text-white text-decoration-none">Home</a>
          <a href="#project" className="text-white text-decoration-none">Project</a>
          <a href="#contact" className="text-white text-decoration-none">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;