import React from "react";
import PageBanner from "../components/PageBanner";

import ReviewItems from "../components/ReviewItems";
import { Link } from "react-router-dom";

function Services() {
  document.title = "Services - Power Funnels";
  return (
    <div>
      <PageBanner
        image="/images/Banner-Services.webp"
        title={<> Our Services</>}
        desc={<>One Agency. Multiple Awards Won. Let's Get Started.</>}
      />

      <section className="power-process" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="heading text-center pb-4">
            <h2>Welcome To The Big Leagues.</h2>
            <p>
              We will dominate your competition through a full spectrum of
              Digital Marketing services <br />
              from PPC Advertising to SEO and Custom Web Development. Where
              shall we get started?
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Link style={{ textDecoration: "none" }} to="/sales-funnels">
                <ReviewItems
                  image="/images/remotel-r.svg"
                  imgalt="remotel-r"
                  title="Sales Funnels"
                  desc={
                    <>
                      Lead and sales generation sales funnels built for one
                      purpose: To convert traffic into buying customers with an
                      explosive ROI. <br />
                      <br />
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/ppc-advertising">
                <ReviewItems
                  image="/images/bonus-r.svg"
                  imgalt="bonus-r"
                  title="PPC Advertising"
                  desc={
                    <>
                      Lead and sales generation advertising campaigns developed
                      across strategic platforms and marketplaces that drive
                      awareness, traffic, and turn clicks into sales.
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/web-development">
                <ReviewItems
                  image="/images/responsive.svg"
                  imgalt="responsive"
                  title="Web Development"
                  desc={
                    <>
                      Responsive web development tailored to your goals so your
                      website can grow with your business and deliver a better
                      customer experience.
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/seo">
                <ReviewItems
                  image="/images/SEOsearch-r.svg"
                  imgalt="SEOsearch-r"
                  title="SEO"
                  desc={
                    <>
                      Smart data analysis and optimization can help you improve
                      your ranking, attract new potential customers, and grow
                      your business.
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link
                style={{ textDecoration: "none" }}
                to="/social-media-marketing"
              >
                <ReviewItems
                  image="/images/sickdays-r.svg"
                  imgalt="sickdays-r"
                  title="Social Media Marketing"
                  desc={
                    <>
                      Strategic Social Media Marketing to elicit a high level of
                      engagement throughout every stage of your customer’s
                      journey.{" "}
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/cannabis-marketing">
                <ReviewItems
                  image="/images/campaign-r.svg"
                  imgalt="campaign-r"
                  title="Cannabis Marketing"
                  desc={
                    <>
                      We’re specialists that know how to navigate & produce
                      results in this fast growing market. <br />
                      <br />
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/cbd-marketing">
                <ReviewItems
                  image="/images/stragety-r.svg"
                  imgalt="stragety-r"
                  title="CBD Marketing"
                  desc={
                    <>
                      We combine social media and influencer marketing with CBD
                      website marketing
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/seo-for-lawyers">
                <ReviewItems
                  image="/images/remotel-r.svg"
                  imgalt="remotel-r"
                  title="SEO For Lawyers"
                  desc={
                    <>
                      SEO for Lawyers Helping individual attorneys and law firms
                      dominate search engine rankings!
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link
                style={{ textDecoration: "none" }}
                to="/healthcare-web-development"
              >
                <ReviewItems
                  image="/images/bonus-r.svg"
                  imgalt="bonus-r"
                  title="Healthcare Web Development"
                  desc={
                    <>
                      Award Winning Healthcare Web Development for Hospitals &
                      Healthcare.
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link style={{ textDecoration: "none" }} to="/healthcare-seo">
                <ReviewItems
                  image="/images/responsive.svg"
                  imgalt="responsive"
                  title="HealthCare SEO"
                  desc={
                    <>
                      Increase Visibility on Google with Healthcare SEO
                      Strategies that Work.
                      <br />
                      <br />
                      <br />
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link
                style={{ textDecoration: "none" }}
                to="/dispensary-marketing"
              >
                <ReviewItems
                  image="/images/SEOsearch-r.svg"
                  imgalt="SEOsearch-r"
                  title="Dispensary Marketing"
                  desc={
                    <>
                      We are a creative cannabis dispensary digital marketing
                      agency that offers a comprehensive range of dispensary
                      marketing solutions for your cannabis business.
                    </>
                  }
                />
              </Link>
            </div>
            <div className="col-md-4 ">
              <Link
                style={{ textDecoration: "none" }}
                to="/marijuana-marketing-and-advertising"
              >
                <ReviewItems
                  image="/images/sickdays-r.svg"
                  imgalt="sickdays-r"
                  title="Marijuana Marketing and Advertising"
                  desc={
                    <>
                      We are a full-service creative marijuana marketing agency
                      that creates powerful strategies and advertising solutions
                      for your marijuana business.
                    </>
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
