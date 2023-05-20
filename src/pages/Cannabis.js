import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";
import ImageLeft from "../components/ImageLeft";

function Cannabis() {
  document.title = "Cannabis Marketing - Power Funnels";
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
        image="/images/medical-cannabis.webp"
        title={<>THE Marketing Agency for the Cannabis Industry</>}
        desc={
          <>
            <b>
              A data-driven, forward-thinking cannabis marketing agency
              specifically serving the cannabis industry with best in class
              marketing solutions that grow, engage and nurture your customer
              base.
            </b>
          </>
        }
      />
      <PowerProcess
        heading="We Help Grow Cannabis Companies"
        imgicon1="/images/cannabis.svg"
        icontitle1="Cannabis Focused Digital Marketing Company"
        icondesc1={
          <>
            Regulated industries can be difficult. However, our deep
            understanding and knowledge of the cannabis industry, combined with
            our expertise in digital marketing allows us to create Cannabis
            Marketing campaigns for your cannabis company. Our Cannabis SEO
            professionals create result-oriented marketing techniques that help
            brands connect with their target audience. <br />
            <br />
            <br />
          </>
        }
        imgicon2="/images/measurement-r.svg"
        icontitle2="Performance Based Cannabis Marketing Solutions"
        icondesc2={
          <>
            Power Funnels is an award winning Cannabis Marketing company
            dedicated to helping cannabis companies gain the digital edge and
            improve their brand name online. We help you reach your target
            market and improve sales through performance-based Cannabis
            Marketing campaigns with quality services including branding,
            strategy, SEO, PPC, social media, and email marketing. Generate an
            ongoing flow of relevant traffic to your cannabis website and ensure
            your brand at the top of search results with SEO for Cannabis
            Website.
          </>
        }
        mystyledisplay3={{ display: "none" }}
        mystyledisplay4={{ display: "none" }}
      />
      {/* nav-section */}
      <section className="">
        <div className="text-center pt-5 pb-4">
          <h2 className="rev-title pb-3">
            Propel Your Cannabis Sales Into Orbit With Our <br />
            Proven SEO & PPC Campaign Approach
          </h2>
        </div>
        <div className="row tab">
          <button
          style={{width: "225px"}}
            id="advertisingbtn"
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212904")}
          >
            Proven Strategies
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212905")}
          >
            Relevant Traffic
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212906")}
          >
            PPC Campaigns
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212907")}
          >
            Tracked Results
          </button>
        </div>
        <section id="section-212904">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Cannabis SEO begins with your business website. We create and
                design SEO-friendly websites and develop customized plans that
                enhance website development, content creation, metadata, links
                and sales conversions.
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
                We can help you with all your Cannabis SEO Marketing needs.
                Whether you are looking for branding or techniques to improve
                your online and in-store traffic, we work with you to enhance
                your revenue and improve your investment. Begin ranking
                organically and drive relevant traffic for a very cheap cost.
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
                Create performance-based campaigns across platforms and
                marketplaces that drive brand awareness, and relevant traffic,
                and turn clicks into sales. Help more customers find you online
                with us!
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
                Want to know if what you are paying for is really working? We
                provide measurable results and important stats about your
                cannabis website’s optimization. Kick off an effective SEO for
                Cannabis Website today!
              </>
            }
            image="/images/ppcAdvertising-02.webp"
          />
        </section>
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
      <PowerProcess
        heading="Key Elements of Cannabis Marketing Services"
        imgicon1="/images/SEOsearch-r.svg"
        icontitle1="Brand Identity"
        icondesc1={
          <>
            Your brand keeps your target customers falling in love at first.
            Your brand name becomes much more powerful when you can prove your
            brand’s position. Your business logo, graphics and content can help
            in this. Let us help you make a mark in the cannabis industry with
            our professional brand development services.
          </>
        }
        imgicon2="/images/cannabis.svg"
        icontitle2="Cannabis SEO"
        icondesc2={
          <>
            With countless websites competing for the top position in search
            results, it can be hard to drive traffic to your website from search
            engines. At Power Funnels, our professionals approach SEO from every
            perspective: from metadata links and responsive website design to
            website speed, link-building techniques, review incentive campaigns,
            and much more.
          </>
        }
        imgicon3="/images/team-r.svg"
        icontitle3="Social Media Marketing"
        icondesc3={
          <>
            Cannabis brands require a consistent social media presence that
            battles the day-to-day challenges of social media platform updates
            and algorithms. Our Cannabis SEO Marketing professionals grow your
            cannabis brand’s following, engagement and lead generation through
            our cannabis network of influencers. <br /><br /><br />
          </>
        }
        imgicon4="/images/graphicdesign.svg"
        icontitle4="Content Marketing"
        icondesc4={
          <>
            Content marketing is one of the most effective way of promotion on
            the social media platforms. Content marketing means you create
            quality content surrounding your product and service and thereby
            creating a following that is interested in the subjects around your
            CBD products. This kind of marketing works well if the posted
            content is not trying to sell its audience anything but rather
            focusses on informing. The purpose is to put the links to your
            cannabis products into the content in a smart way.
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

export default Cannabis;
