import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./banner.scss";
import { Link } from "react-router-dom";

function Banner() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxo7v9b', 'template_43wyt1i', form.current, 'Bnnv9f62iUVqUGN7X')
      .then((result) => {
          console.log(result.text);
          alert("Thanks, Your message has been sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${"images/home-hero.webp"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container overlay">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 heading-colom">
            <div className="text-light">
              <div className="card-body">
                <h1 className="card-title mb-4 banner-title">
                  The Digital Marketing Agency <br /> You Wish You Hired First.
                </h1>
                <p className="card-text mb-4">
                  With our proven track record of rapidly increasing leads and
                  online sales,
                  <br /> your competitors will wish you never found us at all.
                  We’re the silver bullet <br /> you’ve been searching for.
                </p>
                <Link
                  to="/reviews"
                  className="btn btn-lg btn-outline-light me-3 review-btn"
                >
                  Reviews <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <a
                  href="https://results.power-funnels.com/"
                  className="btn btn-lg btn-outline-light review-btn"
                >
                  Results <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 form-colom">
            <div className="text-light form">
              <div className="card-body">
                <p className="card-text text-center">
                  See where you stand in the online marketing space. <br />{" "}
                  Enter your information below to receive a <br /> complimentary
                  video audit.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                      name="your_name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="emailaddress"
                      placeholder="Email Address"
                      name="your_email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="url"
                      className="form-control"
                      id="websiteurl"
                      placeholder="Website URL"
                      name="your_url"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="contact"
                      className="form-control"
                      id="phonenumber"
                      placeholder="Phone Number"
                      name="your_number"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-danger text-center form-btn"
                    value="Send"
                  >
                    Send Me The Audit
                    <i className="fa-solid fa-paper-plane ps-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
