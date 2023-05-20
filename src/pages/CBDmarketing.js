import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";

function CBDmarketing() {
  document.title = "CBD Marketing - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/cbd.webp"
        title={
          <>
            {" "}
            CBD Brand Marketing for 7 Figure <br />
            CBD Brands
          </>
        }
      />
      <ImageRight
        title="We combine social media and influencer marketing with CBD website marketing:"
        description={
          <>
            We combine social media and influencer marketing with CBD website
            marketing, branding, search engine optimization and email marketing
            to create the perfect promotional mix to get your CBD products seen
            and in the hands of customers. This allows us to get you the best
            return for marketing CBD on Google.Are you looking for a proven CBD
            marketing company to help you achieve your high revenue targets?
            Stop looking. You’ve come to the right place! Our CBD marketing
            agency provides top-notch CBD marketing services and other digital
            marketing tactics with the only goal to grow your cannabis,
            marijuana, or hemp business. Need to talk to a CBD marketing
            specialist who truly understands your business? Look no further.
            Contact us today!
          </>
        }
        image="/images/cbd-01.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="CBD Social Media Marketing​"
        description={
          <>
            Marijuana and CBD brands require a consistent and balanced social
            media presence that battles the day to day challenges of social
            media channel updates and algorithms. Power Funnels will grow your
            dispensary or medical marijuana brand’s following, engagement and
            lead generation through our cannabis social network of influencers
            and well researched marijuana hashtags. Managing your online
            presence is a full-time job. Let our team of social media management
            experts take the charge, increase user engagement, and foster
            relationships that will fill your sales funnel and add measurable
            value to your bottom line.
          </>
        }
        image="/images/seo-01.webp"
      />
      <PowerProcess
        heading={<>CBD Website Marketing By Power Funnels</>}
        imgicon1="/images/cannabis.svg"
        icontitle1="CBD Website Marketing, Design & Development"
        icondesc1={
          <>
            Your marijuana website is your digital storefront and a direct
            reflection of your brand. A user- friendly, engaging and responsive
            website can and will generate revenue for your cannabis brand. Our
            web team handles marijuana-specific website development, e-commerce,
            technical support and ongoing WordPress maintenance. Additionally,
            our reporting system lets you know how your website ranks within the
            marijuana and CBD industry and where you have room to grow.
          </>
        }
        imgicon2="/images/SEOsearch-r.svg"
        icontitle2="CBD SEO (Search Engine Optimization)​"
        icondesc2={
          <>
            With millions of websites competing for the top spot in search
            results, it can be difficult to drive traffic to your site from
            search engines. At Power Funnels we approach SEO from an all-
            encompassing perspective: from meta data and mobile optimization to
            site speed, link-building strategies, review incentive campaigns and
            much more. Our SEO program generates an ongoing flow of traffic to
            your website and ensures you are at the top of your audience’s
            search results.
          </>
        }
        imgicon3="/images/remotel-r.svg"
        icontitle3="CBD Video Production​"
        icondesc3={
          <>
            Your team of videographers are happy to document your event or
            dispensary storefront on location! Using 4k video cameras and drones
            we will give a unique perspective to anything put in front of us.
            Want to take your website or advertisement to the next level? Let’s
            animate your designs to distinguish your brand in a competitive
            market!
          </>
        }
        imgicon4="/images/sickdays-r.svg"
        icontitle4="Marketing CBD on Google & Targeted Digital Advertising"
        icondesc4={
          <>
            Bring your entire cannabis marketing platform together through a
            digital advertising program. Whether it’s Pay Per Click (PPC),
            Social Media or Display Advertisements, we’ll find a solution that
            works for you and your B2B or B2C organization.
          </>
        }
      />
      <section className="faq-section" style={{ padding: "50px 0 70px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">
            CBD Website Marketing By Power Funnels
            </h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- Photography & Content Creation​</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  We offer high resolution and high definition content creation
                  that’s curated and strategic. From lifestyle and product
                  photography to videography, promotional video production and
                  blogging, we will give your marijuana brand a consistent and
                  positive visual representation. Blogging, social media and
                  promotional pieces are just a few places our cutting edge
                  content can be put to use.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={<>2- CBD Brand Marketing & Logo Design</>}
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Branding is a key ingredient to your marketing platform. You
                  want your logo, tagline, color scheme and overall voice to be
                  as consistent as possible and to communicate your cannabis
                  brand’s true identity. Whether you are a dispensary, farm or
                  anything in between, let us help you make a mark in the MMJ or
                  CBD market with our logo design and branding development.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- CBD Email Marketing​</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  At Power Funnels we design, build, send and track your email
                  campaigns. Creating opt-in strategies and defining your
                  segmented audiences, we deliver scheduled emails optimized for
                  any browser. We then analyze your click-through rates and
                  delegate leads to your appropriate departments.
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={<>4- CBD Graphic Design</>}
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  You’ve spent a lot of time and money developing your marijuana
                  brand and reputation. It’s critical we support your public
                  image with top of the line digital and print cannabis ads. We
                  understand the creative steps from concept to delivery,
                  utilizing an engaging and refreshing processes to effectively
                  communicate your brand’s message. It’s about having a vision,
                  engaging with your client’s imagination and delivering beyond
                  the expected.
                </>
              }
            />
            <FaqSection
              target="#collapseEleven"
              aria="false"
              control="collapseEleven"
              faqtitle={<>5- CBD Packaging & Print Design​ </>}
              id="collapseEleven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Capture your customer at the point of sale. Our cannabis
                  packaging design team will work together to create packaging,
                  labels and POP displays that stand out. Whether it’s a complex
                  artsy vibe or a clean and sharp look, we’ll give your
                  marijuana or dispensary packaging a competitive edge.
                </>
              }
            />
            <FaqSection
              target="#collapseTwelve"
              aria="false"
              control="collapseTwelve"
              faqtitle={
                <>6- CBD Sales Support, Consulting & Business Development​</>
              }
              id="collapseTwelve"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Have you created an alignment between your sales and
                  advertising? Does your sales team represent your brand
                  properly? Are your marketing strategies producing results? At
                  Power Funnels, we connect the dots and bring everything
                  together. Our sales and marketing experience will grow your
                  cannabis brand. Start, grow, organize and legitimize your
                  cannabis, hemp or CBD business with our custom consulting,
                  project management and business development packages.
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

export default CBDmarketing;
