import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ImageLeft from "../components/ImageLeft";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";

function HealthWeb() {
  document.title = "HealthCare Web Development - Power Funnels";
  return (
    <div className="service-page">
      <PageBanner
        image="/images/healthcare-and-technology1.webp"
        title={
          <>
            {" "}
            Award Winning Healthcare Web Development for Hospitals & Healthcare
          </>
        }
      />
      <ImageRight
        title="We Are The Driving Success Of Our Clients Online Presence"
        description={
          <>
            Since 2013 Power Funnels has been creating a successful website
            design for healthcare organizations around the world. Building on
            this experience our team of web designers and web developers have
            crafted a solid understanding of the best web design style to help
            healthcare organizations communicate with their audience
            effectively. <br />
            <br />
            Web design for healthcare organizations must offer a clear and
            professional format that is responsive and accessible for all.
            Information found on healthcare websites may at times be sensitive,
            so security is often paramount as well. For a visual explanation and
            better understanding we apply these techniques to create the best
            web design for hospitals and healthcare organizations.
          </>
        }
        image="/images/web-development-04.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Power Solutions That Bring Powerful Results​"
        description={
          <>
            Our team works with clients ranging from medium to large-size
            practices and industry top practitioners. We are a leading medical
            and healthcare web development company for Surgeons, Doctors,
            Private Practices, Clinics and Hospitals. We specialize in medical
            website design and medical marketing for professional practices such
            as plastic surgery website design and plastic surgery marketing etc.{" "}
            <br />
            <br />
            We provide end-to-end marketing and web design services to our
            clients. Our services include but are not limited to: getting more
            patient consultations, medical practice SEO, social media, lead
            generation, website design, Google Ads etc.
          </>
        }
        image="/images/web-development-05.webp"
      />
      <PowerProcess
        heading={
          <>
            Healthcare Web Development By Power Funnels <br />A Complete
            Solution For Your Hospitals & <br />
            Healthcare
          </>
        }
        imgicon1="/images/responsive.svg"
        icontitle1="Plastic Surgery Web Design"
        icondesc1={
          <>
            Plastic Surgery Web Design service is not only about making the
            website beautiful. The objective is to position you accurately and
            get more patients to contact you. We have delivered it time and
            again. See our results. We give attention to detail to each and
            every procedure that you do. Every Surgeon we have delivered a new
            website to, first went “wow” by seeing the design & then went “wow”
            again by seeing the growth in new patient bookings. We often hear
            from Surgeons: “Can’t believe I was missing so much business
            opportunity.”
          </>
        }
        imgicon2="/images/SEOsearch-r.svg"
        icontitle2="Cardiologist or Cardiothoracic Surgeon Healthcare Web Development​"
        icondesc2={
          <>
            Cardiac Surgeon Web Design needs a slightly different approach
            compared to elective surgery practices. Heart problems are usually
            considered a serious issue and people often want to search for the
            best surgeons available. A lot of times patients contact to get 2nd
            opinions and want to read in detail about surgeons. We do understand
            the intricacies. As a surgeon, if you focus on a certain niche, we
            will highlight your accomplishments and experience regarding that
            niche.
          </>
        }
        imgicon3="/images/remotel-r.svg"
        icontitle3="Brand Marketing & Logo Design​"
        icondesc3={
          <>
            Branding is a key ingredient to your marketing platform. You want
            your logo, tagline, color scheme and overall voice to be as
            consistent as possible and to communicate your cannabis brand’s true
            identity. Whether you are a dispensary, farm or anything in between,
            let us help you make a mark in the MMJ or CBD market with our logo
            design and branding development.
          </>
        }
        imgicon4="/images/sickdays-r.svg"
        icontitle4="Orthopedics Web Design"
        icondesc4={
          <>
            Orthopedic Web Design will achieve two objectives: a- Make the
            website visitor feel comfortable and trust the Surgeon. b- Ensure
            the potential patients contact the Surgeon office to book an
            appointment. Our years of experience in delivering Surgeon websites
            helps us to quickly understand your vision and deliver conversion
            driven and appointment generating websites.
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

export default HealthWeb;
