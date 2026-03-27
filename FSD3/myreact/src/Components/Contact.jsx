import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center mb-4">Get in Touch</h2>

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="card p-4 shadow">

              <form>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>

                <button className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;