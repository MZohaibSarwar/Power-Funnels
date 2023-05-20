import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";
import ImageLeft from "../components/ImageLeft";
import FaqSection from "../components/FaqSection";

function Healthcare() {
  document.title = "HealthCare SEO - Power Funnels";
  async function openCategory(evt, categoryName) {
    let tablinks;
    document.getElementById("section-212904").style.display = "none";
    document.getElementById("section-212905").style.display = "none";
    document.getElementById("section-212906").style.display = "none";
    document.getElementById("section-212907").style.display = "none";
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  setTimeout(function () {
    document.getElementById("section-212904").style.display = "block";
    document.getElementById("section-212905").style.display = "none";
    document.getElementById("section-212906").style.display = "none";
    document.getElementById("section-212907").style.display = "none";

    document.getElementById("advertisingbtn").className =
      "col-sm-12 col-md-12 col-lg-2 tablinks active";
  }, 1);

  return (
    <div className="service-page">
      <PageBanner
        image="/images/web-development-01.webp"
        title={
          <>
            Increase Visibility on Google with <br />
            Healthcare SEO Strategies that <br />
            Work
          </>
        }
      />
      <PowerProcess
        heading={
          <>
            Rise Above the Competition in the Healthcare <br />
            Industry With Our Healthcare SEO Services
          </>
        }
        desc={
          <>
            Today’s Problem: Every effort to improve your digital presence
            hasn’t made a difference. You have tried healthcare search engine
            optimization <br />
            on your own or you have hired a healthcare SEO agency to do it, but
            your website still isn’t ranking in Google search. Patients are
            choosing <br />
            other facilities because they’re ranking higher online.
          </>
        }
        imgicon1="/images/bonus-r.svg"
        icontitle1="Want to Outrank Your Competition in Search Results?"
        icondesc1={
          <>
            Perhaps you have even gone a step further trying A/B testing web
            pages, creating custom landing pages, using long-tail keywords and
            backlinking as well as conducting social media campaigns – all to
            attempt to drive your rankings higher. But despite trying all these
            strategies, you are still not ranking strongly on Google Page 1 and
            you continue to see your competitors ranking ahead of you. At Power
            Funnels, we use specific SEO tactics to meet your unique challenges.
            Optimize your healthcare marketing strategies with us!
          </>
        }
        imgicon2="/images/remotel-r.svg"
        icontitle2="Is Your SEO Strategy is Failing?"
        icondesc2={
          <>
            Perhaps you have even gone a step further trying A/B testing web
            pages, creating custom landing pages, using long-tail keywords and
            backlinking as well as conducting social media campaigns – all to
            attempt to drive your rankings higher. But despite trying all these
            strategies, you are still not ranking strongly on Google Page 1 and
            you continue to see your competitors ranking ahead of you. At Power
            Funnels, we use specific SEO tactics to meet your unique challenges.
            Optimize your healthcare marketing strategies with us!
          </>
        }
        mystyledisplay3={{ display: "none" }}
        mystyledisplay4={{ display: "none" }}
      />
      {/* nav-section */}
      <section className="">
        <div className="text-center pt-5 pb-4">
          <h2 className="rev-title pb-3">
            Thrive Your Healthcare Business with Custom <br />
            SEO Solutions
          </h2>
        </div>
        <div className="row tab">
          <button
          style={{width: "225px"}}
            id="advertisingbtn"
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212904")}
          >
          Increase Website Traffic
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212905")}
          >
           Unique Content
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212906")}
          >
            Boost Online Presence
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212907")}
          >
            Consistent Results
          </button>
        </div>
        <section id="section-212904">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                As a top healthcare SEO company, Power Funnel’s SEO for
                healthcare services will give you amazing traction in Google
                search, resulting in a dramatic increase of traffic to your
                website. More traffic means more leads for your healthcare
                organization! Our experienced SEO team has a proven track record
                of helping our clients rank much higher in the various search
                engines. This is due to both our SEO expertise and extensive
                knowledge of the healthcare industry.
              </>
            }
            image="/images/web-development-02.webp"
          />
        </section>
        <section id="section-212905">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Our medical SEO marketing is built on a deep understanding of
                both the fundamentals of SEO and medical content creation.
                Strong, engaging medical content is important because it creates
                a better user experience making it more likely that leads will
                convert to patients. Our experienced SEO team has a proven track
                record of helping our clients rank much higher in the various
                search engines. This is due to both our SEO expertise and
                extensive knowledge of the healthcare industry.
              </>
            }
            image="/images/cannabis-02.webp"
          />
        </section>
        <section id="section-212906">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Having our professional team as your partner, gives you the best
                opportunity for ranking higher, so more potential patients find
                you online. Having vast experience in healthcare, gives our team
                the ability to dig deep below the SEO surface. There are many
                SEO agencies out there that can do the standard SEO that
                normally works for any business, however doing healthcare SEO is
                another story.
              </>
            }
            image="/images/cannabis-01.webp"
          />
        </section>
        <section id="section-212907">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Our team has insights into what patients are looking for, what
                keywords they’ll use, what questions they’ll ask google and what
                medical content they’ll find compelling. Our healthcare
                expertise and SEO best practices together will lead to excellent
                measurable results which can be seen in our dynamic SEO reports.
              </>
            }
            image="/images/ppcAdvertising-02.webp"
          />
        </section>
      </section>
      {/* FAQs-section */}
      <section className="faq-section" style={{ padding: "50px 0 70px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- What is Medical SEO?</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Medical SEO is a term used to describe search engine
                  optimization (SEO) services provided to healthcare businesses,
                  such as medical practices and clinics. Also called healthcare
                  SEO, medical SEO is used to help people find healthcare
                  businesses on Google and other search engines. As a top
                  healthcare SEO agency, our team will help you create your SEO
                  strategy with a clear action plan.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={
                <>2- Why do Doctors need SEO services for healthcare?</>
              }
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Doctors can benefit greatly from medical SEO. Medical SEO
                  makes it easy for doctors to appear on the front page of
                  Google. When people search for a specific type of doctor, such
                  as “bariatric surgeon in texas”, medical SEO can help a doctor
                  appear for those searches.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- How do you pick a SEO agency?</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  First, look at the results they’ve provided to clients. Power
                  Funnels has a long list of satisfied customers for our medical
                  SEO. We’ve been able to boost rankings for doctors all over
                  the USA, and we can do the same for you. Call us to learn
                  more!
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={
                <>4- How can medical SEO improve the visibility of a website?</>
              }
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Medical SEO makes it easy for people to find your healthcare
                  business on the search engines. There are a lot of people
                  searching various medical related terms, and several people
                  who are actively searching for a medical practitioner that
                  offers specific services. Medical SEO can help you reach those
                  people. SEO for healthcare industry can be a complicated
                  project, but our team of experts are battle tested and proven.
                </>
              }
            />
            <FaqSection
              target="#collapseEleven"
              aria="false"
              control="collapseEleven"
              faqtitle={
                <>
                  5- What’s the best strategy to recover your website after
                  Google’s Medic update?
                </>
              }
              id="collapseEleven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  The Medic update happened in 2018, affecting many medical and
                  health related websites. To improve search rankings after the
                  update, continue to focus on core SEO principles and good
                  content. Learn more about the Medic update here. Contact one
                  of our experts to discuss your project for healthcare SEO
                  services.
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
        image="/images/Dave-Transparent.webp"
        title={<>I’M CONSTANTLY BLOWN AWAY!</>}
        desc={
          <>
            It’s been a joy working with Lee and his Power Funnels team. After
            working together for several months now, I’m constantly blown away
            by their level of expertise in the industry as well as superior
            customer service. They truly are an agency that can take you where
            you need to be. Highly recommended!
          </>
        }
        name={
          <>
            -Dave De Meyer <br />
            Founder of Million Dollar Club
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

export default Healthcare;
