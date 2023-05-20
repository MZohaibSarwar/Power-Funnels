import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import mystyle from "./seo.scss";
import ReviewItems from "../components/ReviewItems";

function SocialMedia() {
  document.title = "Social Media Marketing - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/social-media-marketing-01.webp"
        title={<>Put Your Brand On The Offense</>}
        desc={
          <>
            <b>
              Explode Your Reach Increase Customer Loyalty Increase Total Sales
            </b>
            <div className="row">
              <div className="col-sm-4">
                <h2>
                  <b> 74% </b>
                </h2>
                <b>
                  Consumers rely on social media to help them make decisions
                  about purchasing.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 43% </b>
                </h2>
                <b>
                  Consumers increased their social media use & added new
                  platforms to discover new products in 2021.
                </b>
              </div>
              <div className="col-sm-4">
                <h2>
                  <b> 80% </b>
                </h2>
                <b>
                  Business executives say it’s essential to invest additional
                  resources in social marketing.
                </b>
              </div>
            </div>
          </>
        }
      />
      <ImageRight
        title="Skyrocket Your Brand Through Social Media Marketing"
        description={
          <>
            Social media marketing (SMM), is a form of internet marketing that
            involves creating and sharing content on social media networks
            (Facebook, Instagram, Twitter) in order to achieve marketing and
            branding goals, such as attracting more customers.
          </>
        }
        list1={
          <>
            <b> Key Benefits of Social Media Marketing:</b>
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
            Improve Customer Trust
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
        image="/images/social-media-marketing-02.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Welcome To The Big Leagues."
        description={
          <>
            Managing your online presence is a full-time job. Let our team of
            social media management experts take the charge, increase user
            engagement, and foster relationships that will fill your sales
            funnel and add measurable value to your bottom line. <br />
            <br />
            Social media platforms like Instagram, Facebook, and Twitter offer
            unparalleled marketing advantages to businesses of all sizes.
            However, many businesses have a hard time translating their
            marketing efforts into real, tangible ROI for three primary reasons:
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            They lack the experience, insight, and skills required for effective
            social media management. <br />
            <br />
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            They simply do not have time to consistently publish quality content
            and engage with their audiences. <br />
            <br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            They do not have a proper analytics tracking setup to be able to
            make quick decisions to capitalize on market and sales
            opportunities.
          </>
        }
        image="/images/social-media-marketing-03.webp"
      />
      <PowerProcess
        heading={<>Power Funnels Social Media Marketing!</>}
        imgicon1="/images/2r.svg"
        icontitle1="Why Businesses Need Social Media Management"
        icondesc1={
          <>
            Business owners and marketers know that social media is an important
            part of any digital strategy. As such, social media is often tackled
            at the launch of a business or brand. But when you dive into social
            media marketing, it immediately becomes apparent there are several
            elements to navigate and implement if you hope to succeed across
            social platforms. Consider how social media management for
            businesses requires you to create an overarching strategy, post and
            schedule high-quality content, respond to customer comments, engage
            with users and set up paid advertising campaigns.It begs for its own
            budget, tools and even a team of strategists and specialists!
          </>
        }
        imgicon2="/images/bonus-r.svg"
        icontitle2="Enjoying the Benefits – Minus the Burden"
        icondesc2={
          <>
            While it’s crucial for business owners and marketers to understand
            the true effort and cost involved in social media marketing, they
            should also be aware of the incredible benefits a well-rounded
            strategy can bring. If you want these benefits at a fraction of the
            cost, consider how a social media management agency is uniquely
            positioned to support you. According to David Sypniewski, Power
            Funnels' senior social media manager, when social media management
            is brought in-house, it rarely gets the attention it deserves and
            the strategic input it needs to be successful. Why waste your chance
            to raise brand awareness, generate leads and garner sales by trying
            to do it alone and falling short?
          </>
        }
        imgicon3="/images/remotel-r.svg"
        icontitle3="BALANCING ALL THESE MOVING PARTS IS WHAT SOCIAL MEDIA MANAGEMENT IS ABOUT."
        icondesc3={
          <>
            For many businesses, giving up the resources required to carry out
            fullscope Facebook or LinkedIn management services in-house is a
            tall ask. The additional costs of, for instance, YouTube management
            or Pinterest management services are likely not even a
            consideration. Social media management of each of these platforms
            requires bandwidth many businesses simply don’t have. <br /><br /><br />
          </>
        }
        imgicon4="/images/3r.svg"
        icontitle4="How the Best Social Media Marketers Achieve Their Clients’ Goals:"
        icondesc4={
          <>
            1. ​​Your content is tailored to the needs and preferences of your
            target audience. 2. You never miss an opportunity to respond to
            questions or continue conversations initiated by customers or fans.
            3. Your social media management budget is well-appropriated and
            prudently managed. 4. Your social media management service package
            can be divided into organic and paid social, depending on your
            priorities. 5. Nuances can be applied while keeping multi-channel
            efforts unified. <br />
            <br />
          </>
        }
      />
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

export default SocialMedia;
