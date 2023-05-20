import React, { useRef } from "react";
import "./model.scss";
import emailjs from '@emailjs/browser';


function Model() {
    const refClose = useRef(null);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      refClose.current.click();
  
    emailjs.sendForm('service_zxo7v9b', 'template_80yfatn', form.current, 'Bnnv9f62iUVqUGN7X')
        .then((result) => {
            console.log(result.text);
            alert("Thanks, Your message has been sent successfully!");
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-danger btn-lg mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Submit a Review <i className="fa-solid fa-arrow-right"></i>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Write a Review
              </h1>
              <button
              ref={refClose}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="modal-body">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control text-dark"
                      id="name"
                      name="your_name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control text-dark"
                      id="email"
                      name="your_email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="yourcompany" className="form-label">
                    Your Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control text-dark"
                    id="yourcompany"
                    name="your_company"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="yourrating" className="form-label">
                    Your Rating
                  </label>
                  {/* <input type="number" className="form-control text-dark" id="yourrating"/> */}
                  <select
                    id="yourrating"
                    className="form-select py-3"
                    aria-label="Default select example"
                    name="your_rating"
                  >
                    <option value="DEFAULT" disabled>
                      Select Rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="yourtestimonial" className="form-label">
                    Your Testimonial / Feedback
                  </label>
                  <textarea
                    className="form-control text-dark"
                    id="yourtestimonial"
                    rows="3"
                    name="your_message"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg btn-submit"
                    value="Send"
                  >
                    Submit Review
                    <i className="fa-solid fa-paper-plane ps-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
