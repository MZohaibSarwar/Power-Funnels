import React from "react";
import PageBanner from "../components/PageBanner";
import { InlineWidget } from "react-calendly";
import { Widget } from "@typeform/embed-react";
import AnimatedIcon from "../components/AnimatedIcon";
import "./getstarted.scss";

function GetStarted() {
  document.title = "Get Started - Power Funnels";
  return (
    <div>
      <PageBanner
        image="/images/leadership-team.jpg"
        title={<> FREE Strategy Session</>}
        desc={<>We're Growing And We Need Talent!</>}
      />
      <section className="power-process" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="heading text-center">
            <h2>
              Schedule a Call With a Power Funnels Business <br />
              Development Specialist
            </h2>
            <p>
              Welcome to the Power Funnels scheduling system. Choose a day and
              time that works best <br />
              for your schedule. Please be fully prepared and ready to discuss
              your project. If you are <br />
              going to be late, please email: Hello@Power-Funnels.com
            </p>
          </div>
          <div className="clandly-form">
            {/* <!-- Calendly inline widget begin --> */}
            <InlineWidget url="https://calendly.com/powerfunnels/30mins" />
            {/* <!-- Calendly inline widget end --> */}
          </div>
        </div>
      </section>
      <section
        className="power-process"
        style={{ padding: "70px 0", backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="heading text-center">
            <h2>OR</h2>
            <p>
              Fill out the form below and somebody will be in touch with you
              soon.
            </p>
          </div>
        </div>
      </section>
      <section className="power-process" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="heading text-center">
            <h2>Book a FREE Strategy Session</h2>
          </div>
          <div className="typeform typeform-desktop">
            {/* <!-- typeform --> */}
            <Widget
              id="a1WGeZo4"
              style={{ height: "550px", width: "800px" }}
              className="my-form text-center mx-auto"
            />
            {/* <!-- typeform --> */}
          </div>
          <div className="typeform typeform-mobile">
            {/* <!-- typeform --> */}

            <Widget
              id="a1WGeZo4"
              style={{ height: "550px" }}
              className="my-form text-center mx-auto"
            />

            {/* <!-- typeform --> */}
          </div>
        </div>
      </section>
      <AnimatedIcon
        style={{ backgroundColor: "black", color: "white" }}
        title="Power Funnels Portfolio!"
        description="When you partner with Power Funnels, we take care of the heavy lifting so you can enjoy more leads, revenue and time to spend on what you actually want to do."
        list1={
          <a
            href="https://results.power-funnels.com/case-studies/"
            className="btn btn-lg btn-outline-light mt-3"
            type="button"
          >
            View Case Studies <i className="fa-solid fa-arrow-right ps-2"></i>
          </a>
        }
      />
    </div>
  );
}

export default GetStarted;
