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

function WebDevelopment() {
  document.title = "Web Development - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/web-development-01.webp"
        title={<> Websites That Convert</>}
        desc={
          <>
            <b>
              Generate Instant Credibility Convert More Customers Maximize
              Marketing Dollars
            </b>
            <div className="row">
              <div className="col-sm-4">
                <h2>
                  <b> 40% </b>
                </h2>
                <b>
                  Of users judge a business by how their website looks within 3
                  seconds.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 75% </b>
                </h2>
                <b>
                  Of users who have a bad experience with your website will go
                  to your competitors instead.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 73% </b>
                </h2>
                <b>
                  Of business executives said investing in their web design was
                  key to growth.
                </b>
              </div>
            </div>
          </>
        }
      />
      <ImageRight
        title="Websites Are The Key Asset In Your Digital Strategy"
        description={
          <>
            In today’s age, having just a website won’t work. Your website needs
            to have a brand, it needs to speak quickly to its target customer,
            and it needs to present offers that will be hard to deny. They are
            your home base, your selling machine, your online business card.
          </>
        }
        list1={
          <>
            <b> Key Benefits of Having A Conversion Focused Website:</b>
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Stand Apart From Competitors
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Spend Less Marketing Dollars – But Convert More Customers
          </>
        }
        list4={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Establish Your Brand Footprint
          </>
        }
        image="/images/web-development-02.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Your competitors will wish you never found us at all. We’re the silver bullet you’ve been looking for."
        description={
          <>
            It all starts with interest, then a conversation, then either a
            conversion or a drop-off. The whole point of Power Funnels web
            development packages is to increase more interest and more
            conversions. Guided by your brand style and personality, the Power
            Funnels web development team will create a beautiful and conversion
            focused website in sync with the behaviors and emotions of your
            target market. Our visual stamp, your global footprint. <br />
            We might draw like artists, but we design like architects; as much
            purposefully as creatively. No size fits all, so it becomes about
            crafting stand-out aesthetics in a way that fit exclusively into
            your brand. You can spend tens of thousands on ads campaigns that
            drive traffic to your site. But you have to be equally invested in
            what your end users see when they arrive if you really want to see
            results.
          </>
        }
        image="/images/web-development-03.webp"
      />
      <ImageRight
        title="What To Expect Working With Power Funnels"
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            A website design that captures your corporate image and influences
            brand awareness across all social media platforms. <br />
            <br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            The web development agency goes the extra mile to provide you with
            an adaptive, affordable, convenient, and professional or
            cool-looking design based on your specific needs and that is focused
            on generating you more customers. <br />
            <br />
          </>
        }
        list4={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            A company that follows trends in modern web design to help achieve a
            higher search rating and receive prestigious accolades.
          </>
        }
        image="/images/web-development-04.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Why is Web Development So Important?"
        description={
          <>
            Website development is important because it’s a way to make people
            aware of the services and or products you are offering, understand
            why your products are relevant and even necessary for them to buy or
            use, and see which of your company’s qualities set it apart from
            competitors.Displaying this information with high-quality images and
            thought-out presentation will have a large influence on customers,
            and it is important to strive towards making your product as
            relatable and appealing as possible. <br />
            In today’s age, having just a website won’t work. Your website needs
            to have a brand, it needs to speak quickly to its target customer,
            and it needs to present offers that will be hard to deny. They are
            your home base, your selling machine, your online business card.
          </>
        }
        image="/images/web-development-05.webp"
      />
      <ImageRight
        title="Additionally, with website development you can:"
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Interacting with your audience is vital when it comes to generating
            more business. It is viable to make a website that enables you to
            get in touch with your customers and prospects, and you can produce
            valuable content for the audience associated with the industry or
            business you’re in. <br />
            <br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            A website will facilitate things like expanding your reach and
            attracting more visitors to your business. Planning to make a
            responsive website design for your site will help make it accessible
            to an extensive range of users spanning several devices, such as
            tablets or smartphones. This will increase both your site’s exposure
            and organic traffic. <br />
            <br />
          </>
        }
        list4={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            A website offers a straightforward method of showing the credibility
            of a business, and the way a person represents his business online
            is vital for attracting more customers or visitors. Therefore, your
            website design should be handled in the best possible way, because a
            professional presentation speaks volumes as a testimony to your
            business. With the help of website development, you can add your
            skills, credentials, experience, expertise, and more in a single
            place. These details help you earn the trust and confidence of your
            visitors and serve as a reference point for customers interested in
            your business, making it easy for you to produce leads.
          </>
        }
        image="/images/Sales-Funnels-01.webp"
      />
      <PowerProcess
        style={{ backgroundColor: "#eeeeee" }}
        imgicon1="/images/graphicdesign.svg"
        icontitle1="Grow Your Business With Our Web Development Services"
        icondesc1={
          <>
            Power Funnels will research-driven design strategies that keep
            prospects tuned in to what you have to say, for longer.
            Concentrating on the user experience results in higher search
            rankings on Google, and leads to more casual browsers converting to
            committed followers. Everything we build, we build responsively to
            optimize function and performance. The way we see it, it’s less
            about web design being responsive to mobile devices, and more about
            end users being responsive to your brand, wherever and however they
            choose to do digital. What we offer is a full-circle digital
            partnership; guidance, collaboration, and execution from conception
            to completion. Because we recognize that web design is about so much
            more than color, design and function. It’s about sharing a story
            worth hearing, spreading a unique vision, and promoting the better
            choice to the right people.
          </>
        }
        mystyledisplay1={{ width: "100%" }}
        mystyledisplay2={{ display: "none" }}
        mystyledisplay3={{ display: "none" }}
        mystyledisplay4={{ display: "none" }}
      />
      <section className="faq-section" style={{ padding: "50px 0 70px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">
              Power Funnels Web Development Services <br />
              Consist Of:
            </h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- Custom Web Design</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  What does the word “custom” mean in custom websites? For us,
                  it’s about taking what’s unique about your brand and building
                  out from there. It’s not about moving the logo to an odd spot.
                  It’s about the feeling evoked when someone first arrives and
                  begins browsing around.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={<>2- User Experience (UX)</>}
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  We put user experience first. Anything you build, whether it’s
                  a car or a website, should be easy to use and reliable. By
                  creating basic prototypes, we can predict how users interact
                  with the interface and make design decisions that reward
                  common behaviors.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- UI Prototyping</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Building on a solid UX, we layer on imagery. Early designs may
                  be black and white or full color, but the idea for each is to
                  help you see how pages flow from one section to the next. This
                  is how we decide which elements are needed on each layout.
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={<>4- Mobile & Web Apps</>}
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  For most businesses, a mobile responsive website is the best
                  way to cater to users on all devices. However, there are
                  certain ideas and cases that are better serviced by a
                  dedicated mobile or tablet app experience. A good app solves a
                  problem.
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

export default WebDevelopment;
