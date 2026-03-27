import React from "react";

function Projects() {
  return (
    <section id="projects" className="container py-5">

      <h2 className="text-center mb-5">My Recent Work</h2>

      <div className="row">

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow">
            <img src="ecom.jpg" alt="images" width="500"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">E-Commerce Platform</h5>
              <p className="card-text">
                Online shopping website built using React.
              </p>
              <a className="btn btn-link">View Project Details</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow">
            <img
              src="task.jpg" alt="images"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Task Management Tool</h5>
              <p className="card-text">
                Organize and manage tasks efficiently.
              </p>
              <a className="btn btn-link">View Project Details</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow">
            <img
              src="weather.jpg" alt="images"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Real-time weather forecast application.
              </p>
              <a className="btn btn-link">View Project Details</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;