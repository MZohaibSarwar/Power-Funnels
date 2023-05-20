import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import mystyle from "./seo.scss";
import ReviewItems from "../components/ReviewItems";
import './salesfunnels.scss'

function Salesfunnels() {
  document.title = "Sales Funnels - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/bg3-img.webp"
        title={<> Explode Your Revenue By 25%</>}
        desc={
          <>
            <p>
              <b>Save Marketing Dollars Maximize ROI Transform Your Business</b>
            </p>
            <div className="row">
              <div className="col-sm-3">
                <h2>
                  <b> 25% </b>
                </h2>
                <p>
                  <b>
                    Revenue Growth <br />
                    Boost
                  </b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 38% </b>
                </h2>
                <p>
                  <b>Sales Productivity improvement</b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 21% </b>
                </h2>
                <p>
                  <b>Cycle-Time Improvement</b>
                </p>
              </div>
              <div className="col-sm-3">
                <h2>
                  <b> 32% </b>
                </h2>
                <p>
                  <b>Revenue Growth Improvement</b>
                </p>
              </div>
            </div>
          </>
        }
      />
      <ImageRight
        title="Convert Many More Website Visitors At a Fraction Of The Cost!"
        description={
          <>
            Your website has a ton of great information but your visitors are
            bound to get lost clicking through links and checking out your
            offerings. Wouldn’t it be great if you could gently guide them where
            you want them to go? Think of a sales funnel as an expert salesman;
            sending site visitors on a direct path to your objective, whether
            it’s capturing an email address or selling your products or
            services.
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
            Automate your business and convert more visitors into recurring
            revenue.
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Save on marketing dollars and get your time back so you can enjoy
            life.
          </>
        }
        image="/images/Sales-Funnels.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Do you have a “traditional” website? Most businesses do."
        description={
          <>
            You spend a few thousand dollars (some a lot more) and get yourself
            a “presence” online. This is going to enhance your brand, and even
            bring in a lot more sales every month. <br />
            <br />
            Maybe your business is primarily an online business, in which your
            website is even more critical to your success? <br />
            <br />
            The sad truth is, however, that over 90% of all websites make the
            business little to no MONEY. <br />
            <br />
            You may justify it by saying your site is bringing “brand awareness”
            and lots of people are finding you every month because of it. <br />
            <br />
            Or maybe you’ve got something that’s working pretty well to drive
            new clients into your business already so you just haven’t had the
            time to mess with it. <br />
            <br />
            Regardless of your situation, what I’m about to introduce you to in
            the next few minutes could dramatically change your business
            FOREVER. It’s very exciting and the team here at Power Funnels can’t
            wait to share it with you.
          </>
        }
        image="/images/Sales-Funnels-01.webp"
      />
      <PowerProcess
        heading={
          <>
            But first, let’s talk about the truth behind a typical <br />
            website.
          </>
        }
        desc={
          <>
            We’re not just your ad manager, but your strategic marketing
            partner. We supercharge <br />
            your in-house capabilities with expertise, collaboration, and
            superior execution. Let’s <br />
            Power Up Your Funnels!
          </>
        }
        imgicon1="/images/bonus-r.svg"
        icontitle1="A Website Is Expensive"
        icondesc1={
          <>
            For a quality UIX with catchy designs, a mobile-friendly build etc,
            you can easily spend $5k – $25k. <br />
            <br />
            <br />{" "}
          </>
        }
        imgicon2="/images/remotel-r.svg"
        icontitle2="You Need A Programmer To Do Everything"
        icondesc2="99% of business owners have no clue how to make changes to their website and thus if something needs to be changed or fixed it requires a programmer to be paid. This not only costs continuous money, but it takes a fair amount of time to complete often simple projects."
        imgicon3="/images/3r.svg"
        icontitle3="It Takes A Long Time To Build"
        icondesc3={
          <>
            A website can take 60-90 days to build, and that’s IF you are lucky
            to hire a company/person that meets deadlines and delivers top
            quality on the first try. You’ll almost definitely encounter
            roadblocks (missed deadlines, quality problems, site not functioning
            correctly, etc) and it can easily average 6 months to complete.{" "}
            <br />
            <br />{" "}
          </>
        }
        imgicon4="/images/SEOsearch-r.svg"
        icontitle4="You Can’t Easily Test Your Design/Approach"
        icondesc4="The typical website is built with pretty much ONE strategy, and if you discover down the line this isn’t resulting in a high amount of leads and sales, well guess what? Your SOL… now you have to pay someone else to build a completely new site to hopefully fix the problem, of which is anything but guaranteed to work the 2nd time. And when you do want to use testing, it’s not only expensive but once again time-consuming to complete these rather simple tasks."
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
      {/* encountered section */}
      <section className="encountered-section">
        <div className="container text-center">
          <h2>Have you encountered this already?</h2>
          <p>
            Not only can the experience of building a website take forever, cost
            you a fortune and be frustrating to make changes to… but your
            website may not even be bringing in new leads or sales at all.
            That’s why you need something better. A tool that’s designed to give
            you the power to rapidly test, tweak and optimize the way your
            business generates LEADS and makes SALES. The most important aspects
            of any business. Because without them, you’d go broke.
          </p>
          <div className="row">
            <h2>Are You A Victim Of This?</h2>
            <p>
              On average, over 80% of businesses build a website and then that’s
              it. <br />
              They don’t do any kind of testing to determine IF this website is
              even doing it’s primary #1 job, which is to sell your products or
              services.
            </p>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="review-item-title">Path A</h3>
                  <p className="review-item-desc">
                    Emily hires a web development company to design a website
                    for $5k. She uses deal sites and other forms of ads to drum
                    up new business, and everything includes her website. Lots
                    of people go to Emily’s website before deciding if they
                    should book an appointment or not. However, her site isn’t
                    designed very well to generate these leads. Instead, the
                    site is more info driven which consists of talking about
                    Emily’s practice and the office, staff etc. There’s a button
                    to schedule a free consultation along with phone number and
                    email too… but what Emily doesn’t know is out of every 100
                    visitors to her site only 1-2 people are calling or booking
                    a consultation. It costs Emily money in advertising to get
                    these people to her site in the first place, which is
                    important to remember. <br /><br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="review-item-title">Path B</h3>
                  <p className="review-item-desc">
                    Emily has lunch with a marketing agency that recommends
                    building her a “sales funnel” style website. She pays the
                    same $5k for this, however, it not only includes the build
                    but also management and optimization for a period of 30-60
                    days after, to ensure this thing is actually working.
                    There’s a home page, much like a traditional website,
                    however instead of being designed to talk about the
                    practice, staff and Emily it’s designed to generate
                    consultations and phone calls. This is done via multiple
                    call to action buttons on the page, along with secondary
                    strategies like a promo offer graphic on the right sidebar
                    or in the header. The marketing agency tests lots of
                    different pages to send traffic to, and finds that one in
                    particular is getting 20% conversions… so for every 100
                    visitors to the page 20/100 are booking a consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            The cost of sending these 100 visitors to the page does not change
            from path A, it’s the same amount in advertising spend. <br />
            However, Emily is now getting 10-20x more customers into her
            practice thanks to her sales funnel style website.
          </p>
          <p>
            <b>
              Many people are a victim of path A, and the most serious problem
              is THEY DON’T EVEN KNOW PATH B EXISTS. They have <br />
              no clue the potential they are missing out on, and what could be
              possible if they only knew a better way.
            </b>
          </p>
          <Link to="/get-started" className="btn btn-danger btn-lg">
            Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
          </Link>
        </div>
      </section>
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

export default Salesfunnels;
