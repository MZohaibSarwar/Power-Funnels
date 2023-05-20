import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import mystyle from "./seo.scss";
import ReviewItems from "../components/ReviewItems";
import "./salesfunnels.scss";

function PpcAdvertising() {
  document.title = "PPC Advertising - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/ppcAdvertising-01.webp"
        title={<> Accelerate Your Online Growth</>}
        desc={
          <>
            <p>
              <b>
                Save Generate Sales InstantlyScale With ConfidenceDominate Your
                Competitors
              </b>
            </p>
            <div className="row">
              <div className="col-sm-3">
                <h2>
                  <b> 200% </b>
                </h2>
                <p>
                  <b>Avg. Return-On-Investment for Paid Ads</b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 76% </b>
                </h2>
                <p>
                  <b>Of Search Engine Market Belongs To Google</b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 90% </b>
                </h2>
                <p>
                  <b>Of Desktop Searches Happen On Google</b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 35% </b>
                </h2>
                <p>
                  <b>Of users purchase a product within 5 days of searching</b>
                </p>
              </div>
            </div>
          </>
        }
      />
      <ImageRight
        title="Generate Instant Sales With An Insanely High ROI"
        description={
          <>
            The Power Funnels story started with pay-per-click advertising. For
            almost a decade, we’ve been driving high returns and conversions
            with an award-winning strategy: maximizing budget allocation through
            granular optimizations and leveraging data to deliver relevant
            customer experiences. Our expertise expands your reach to customers
            at all stages of their journey through a tailored plan utilizing a
            number of delivery methods to ensure every dollar makes its largest
            impact.
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Accelerate your brand’s year-over-year growth and increase your
            overall revenue.
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Scale your business with confidence and ease with our
            return-on-ad-spend model.
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Generate recurring revenue and stability.
          </>
        }
        image="/images/ppcAdvertising-02.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="We’ll Make Your Media Budget Pay You Back (And Then Some!)"
        description={
          <>
            You work hard for your money. Make sure it works hard for you. Our
            media buying experts here at Power Funnels know how to target
            qualified buyers, drive real opportunities, and generate real
            revenue (and lots of it!)Knowing who is kicking the tires and who’s
            ready to hit the road can make the difference between a so-so and a
            stellar media campaign. Let the experts at Power Funnels help you
            get where you’re going – but much quicker.
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            We’ll craft a custom PPC strategy according to your business and
            your targets. <br /><br />
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Our team will manage your PPC initiatives with a turn-key and ROI
            driven approach. <br /><br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Once we’ve accomplished our agreed upon target return-on-ad-spend,
            we’ll then begin scaling!
          </>
        }
        image="/images/Sales-Funnels-01.webp"
      />

      <PageBanner
        image="/images/bg-transform.webp"
        padding="80px 0"
        mystyle={{ color: "black" }}
        title={<> Are You Ready To Explode Your Revenue?</>}
        desc={
          <>
            <Link to="/get-started" className="btn btn-danger btn-lg me-3">
              Get Started <i className="fa-solid fa-arrow-right ps-2"></i>
            </Link>
            <Link to="/reviews" className="btn btn-outline-dark btn-lg">
              Our Reviews <i className="fa-solid fa-arrow-right ps-2"></i>
            </Link>
          </>
        }
      />
      <DaveDeMare
        mystyle={mystyle}
        image="/images/Barb2-New-768x777.png"
        title={<>WE INCREASED OUR SALES DESPITE THE PANDEMIC!</>}
        desc={
          <>
            The decision to work with Power Funnels was a key factor in the
            growth of our success. We have increased sales despite the global
            pandemic with key marketing strategies and decisive planning to help
            guide how our ads are hitting our buying demographic. <br />
            <br />
            Lee and his entire team are extremely professional. We have worked
            with many local companies and often they were not available to
            answer our questions and just did a poor job in general. I was a bit
            nervous about going with a marketing firm not based in the same city
            as our head office. <br />
            <br />
            I have to say that Lee and his team have exceeded our expectations.
            As a business owner we all know that advertising and a strong lead
            generation system that delivers qualified leads is the engine of our
            business. <br />
            <br />
            Would I recommend Power Funnels, 100% I would! You won’t regret
            it!!!
          </>
        }
        name={
          <>
            Barbara McBean <br />
            President & Founder <br />
            Eternal Beauty Institute & Plasma Lift
          </>
        }
      />
      <section className="power-process" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="heading text-center pb-4">
            <h2>Why Work with Power Funnels?</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ReviewItems
                image="/images/remotel-r.svg"
                imgalt="remotel-r"
                title="We’re Experts"
                desc={
                  <>
                    We’re leaders and experts in our own disciplines, and we’re
                    passionate about making our clients money (and lots of it!)
                  </>
                }
              />
            </div>
            <div className="col-md-4 ">
              <ReviewItems
                image="/images/bonus-r.svg"
                imgalt="bonus-r"
                title="We’re Obsessed With Results"
                desc={
                  <>
                    Obsession for client results, superior customer service and
                    digital innovation is what we live and breathe.
                  </>
                }
              />
            </div>
            <div className="col-md-4 ">
              <ReviewItems
                image="/images/responsive.svg"
                imgalt="responsive"
                title="We’re The Silver Bullet You’ve Been Searching For"
                desc={
                  <>
                    With our proven track record of rapidly increasing leads and
                    online sales, your competitors will wish you never found us
                    at all.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
      <ImageRight
        style={{ backgroundColor: "black", color: "white" }}
        title="Ready To Grow?"
        description="Take the next step in growing your business using digital marketing. Fill in the form below and one of our marketing experts will connect with you to learn more about your business and your targets. We’ll then send you a service proposal free of charge."
        list1={
          <Link
            to="/get-started"
            className="btn btn-lg btn-outline-light mt-3"
            type="button"
          >
            Get Started <i className="fa-solid fa-arrow-right ps-2"></i>
          </Link>
        }
        image="/images/Mac-Mockup-01.webp"
      />
      <section className="power-process" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="heading text-center pb-4">
            <h2>Reviews</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ReviewItems
                image="/images/timaly-medical-logo.webp"
                imgalt="timaly-medical-logo"
                title="CHRISTIAN J.R. BAKER"
                company="FOUNDER"
                desc={
                  <>
                    Lee and his whole team are a joy to work with. They are
                    extremely responsive to all e-mails and are great at
                    explaining how the entire process worked. On top of that,
                    they improved our online presence immensely, and we are very
                    grateful for that. We wouldn’t hesitate to recommend them to
                    anyone requiring SEO or PPC work!
                  </>
                }
              />
            </div>
            <div className="col-md-4 ">
              <ReviewItems
                image="/images/yak-grills-logo.webp"
                imgalt="yak-grills-logo"
                title="DAVID SYPNIEWSKI"
                company="FOUNDER AT YAK GRILLS™"
                desc={
                  <>
                    Lee helped us exceed our crowdfunding goals by more than
                    300% and exceed our ROAS expectations all within a very
                    compressed 6-week schedule while providing exceptional
                    customer service and genuine care for our business. Couldn’t
                    recommend Lee and his team more! <br />
                    <br />
                  </>
                }
              />
            </div>
            <div className="col-md-4 ">
              <ReviewItems
                image="/images/mx-yeild-bin-logo.webp"
                imgalt="mx-yeild-bin-logo"
                title="ROB"
                company="MAX YIELD BINS"
                desc={
                  <>
                    Lee and his team at Power Funnels have delivered as
                    promised. As a start up with a lean in-house team, being
                    able to focus on your strengths while the Power Funnels team
                    focuses on theirs has been dollars well spent. We look
                    forward to expanding services and building our business with
                    their support. Highly recommend this team!
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PpcAdvertising;
