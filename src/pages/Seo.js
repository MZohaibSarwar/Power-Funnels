import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";
import DaveDeMare from "../components/DaveDeMare";
import mystyle from "./seo.scss";
import ReviewItems from "../components/ReviewItems";

function Seo() {
  document.title = "SEO - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/seo-developer-2.webp"
        title={<> Explode Top Line Revenue</>}
        desc={
          <>
            <b>
              Explode Monthly Traffic Increase Total Sales Maximize Your Funnel
            </b>
            <div className="row">
              <div className="col-sm-4">
                <h2>
                  <b> 90% </b>
                </h2>
                <b>
                  Of online experiences begin with a search engine such as
                  Google & Bing.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 57% </b>
                </h2>
                <b>
                  Marketing Executives say on-page content development was the
                  most effective SEO tactic.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 70% </b>
                </h2>
                <b>Marketers see SEO as more effective than PPC.</b>
              </div>
            </div>
          </>
        }
      />
      <ImageRight
        title="Dominate The Rankings & Dominate Your Industry"
        description={
          <>
            Search Engine Optimization is at the core of what we do at Power
            Funnels. Owning a website without performing SEO is like having a
            car with no gas. It can sit there, simply existing, but it won’t get
            anywhere.
          </>
        }
        list1={
          <>
            <b> Key Benefits of Search Engine Optimization:</b>
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Increase Website Traffic
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Increase Top Line Revenue
          </>
        }
        list4={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Generate Instant Credibility
          </>
        }
        image="/images/seo-02.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Driving Organic Performance & Sales"
        description={
          <>
            SEO is art. We believe in starting with a blank canvas with each new
            project. Our team of experts at Power Funnels obsesses over finding
            the right mix of items that will drive the most impactful results
            for each brand. Our job ultimately is to ensure your brand stands
            the test of time. <br />
            We are an agency consisting of passionate experts with over 50 years
            of combined SEO experience. Our resources and network extend to some
            of the most brilliant and capable experts in the field today. <br />
            With our experience and obsession with customer results, we
            guarantee that you will achieve your targets through our SEO
            programs.
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Our SEO service is designed to ensure you reach your customers
            through the proper strategy and to lock in on your audience with our
            bullseye targeting approach. <br />
            <br />
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Our SEO team is obsessed with client satisfaction and results – so
            we’ll utilize our team experience and resources to generate you real
            results. <br />
            <br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            We’ll approach your SEO strategy with a turn-key approach, from
            website optimization, competitor review, keyword research, and
            creating a healthy backlink profile, guaranteed to explode your
            business and its top-line revenue.
          </>
        }
        image="/images/seo-01.webp"
      />
      <PowerProcess
        imgicon1="/images/bonus-r.svg"
        icontitle1="What is Search Engine Optimization?"
        icondesc1={
          <>
            SEO is the process of getting your website to rank on search engines
            like Google, Yahoo, Bing. Search engines rank your site, but SEO is
            the result of making your website valuable for visitors, who could
            turn into potential customers or clients. At Power Funnels, we
            specialize in Search Engine Optimization, and we’re not successful
            unless our clients are successful. We’re ecstatic each time one of
            our clients reaches the first page of a Google search, and take
            pride in implementing digital marketing methods that will keep our
            clients’ website rankings high. We couple our on-site optimization
            techniques with off-site marketing methods to come up with
            customized strategies that are effective and have long-term
            benefits. Through keyword research, content editing and website
            audits, we have the ability to understand the online spaces that
            your customers visit most often.
          </>
        }
        imgicon2="/images/remotel-r.svg"
        icontitle2="Why is SEO So Important?"
        icondesc2="In the past, businesses relied on traditional advertising platforms to promote their product or service. For decades this, when done correctly, worked very well. It was a costly exercise and required a lot of exposure across multiple media channels to reach as many people as possible. Things have changed dramatically, and old school advertising is becoming increasingly less effective. These days, if someone is looking to purchase something, the vast majority of people will turn to Google and do a quick search for what they are looking for. If you are not there, near the top of the search engine results page (SERP), you stand to lose an enormous amount of business. This trend is only going to grow and continue as technology advances, and more people and devices are connected to the internet. The sooner you get your SEO in order, the better your chances of future business success."
        imgicon3="/images/3r.svg"
        icontitle3="Grow Your Business With Our SEO Services"
        icondesc3={
          <>
            A top SEO agency like Power Funnels can help drive more traffic,
            create more business leads, and increase your sales. Because
            consumers are turning to the internet for advice on where to shop or
            what company to contact, optimal placement on Google’s search
            results will inherently generate more brand awareness and website
            traffic. People naturally believe that the companies at the top of
            the Google search results are the best, and customers are more
            likely to purchase from these top-ranking companies. The higher you
            show up on Google, the more brand recognition and recall your
            company will have when ready to make a purchase.
          </>
        }
        mystyledisplay4={{ display: "none" }}
      />
      <section className="faq-section" style={{ padding: "50px 0 70px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">
              Power Funnels SEO Services Consist Of:
            </h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- Local SEO Marketing</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Our marketing team will make your company especially
                  attractive to potential customers who live in your area. When
                  your business is seen as both qualified and convenient, you’re
                  likely to increase your customer base.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={<>2- Organic SEO Marketing</>}
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  We’ll promote your company online by focusing on the quality
                  items you offer. This allows you to attract clients from all
                  over the world.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- SEO Audits</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  We’ll review the website against a checklist and come up with
                  suggestions of what needs to be fixed.
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={<>4- Research & Analysis</>}
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  As SEO experts we will do an audit of your current situation
                  and develop a plan of action to improve your SEO and get you
                  the results you are looking for. The great thing about SEO and
                  search engine marketing (SEM) is it is highly measurable.
                </>
              }
            />
            <FaqSection
              target="#collapseEleven"
              aria="false"
              control="collapseEleven"
              faqtitle={<>5- Keyword Research</>}
              id="collapseEleven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Good SEO and SEO marketing will give your site and your
                  company credibility, exposure, and a cost effective way of
                  reaching out to your customers and potential customers.
                </>
              }
            />
            <FaqSection
              target="#collapseTwelve"
              aria="false"
              control="collapseTwelve"
              faqtitle={<>6- On Site Coding & Implementation</>}
              id="collapseTwelve"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  We can show you proof of the improvements in your page
                  ranking, and you will be able to measure your return on
                  investment. Numerous techniques are used to get your business
                  on the first page of major search engines.
                </>
              }
            />
            <FaqSection
              target="#collapseTwelv"
              aria="false"
              control="collapseTwelv"
              faqtitle={<>7- Rankings Report & Tracking</>}
              id="collapseTwelv"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Power Funnels is here to make sure your site appears on that
                  first page so that you can acquire and retain new customers on
                  a regular basis. Our SEO services are based on years of
                  extensive research, and we continue to learn new strategies to
                  improve our techniques to make sure we remain the leader in
                  SEO services.
                </>
              }
            />
          </div>
        </div>
      </section>
      <PageBanner
        image="/images/bg-transform.webp"
        padding="80px 0"
        mystyle={{ color: "black" }}
        title={<> Are You Ready To Explode Your Revenue?</>}
        desc={
          <>
            <Link to="/get-started" className="btn btn-danger btn-lg mx-2 my-2">
              Get Started <i className="fa-solid fa-arrow-right ps-2"></i>
            </Link>
            <Link
              to="/reviews"
              className="btn btn-outline-dark btn-lg mx-2 my-2"
            >
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

export default Seo;
