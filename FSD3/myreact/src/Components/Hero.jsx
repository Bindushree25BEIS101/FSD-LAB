import React from "react";

function Hero() {
  return (
    <section id="home" className="text-center py-5 bg-light">
      <div className="container">

        <span className="badge bg-primary mb-3">Portfolio</span>

        <h1 className="display-4 fw-bold">
          Creative Developer <br /> Building Scalable Apps
        </h1>

        <p className="lead">
          Specializing in modern JavaScript frameworks like React and Node.
        </p>

        <div className="mt-4">
          <button className="btn btn-primary me-3">
            View Projects
          </button>

          <button className="btn btn-outline-dark">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;