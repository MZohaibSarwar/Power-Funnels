import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";
import ImageLeft from "../components/ImageLeft";
import FaqSection from "../components/FaqSection";

function Dispensary() {
  document.title = "Dispensary Marketing - Power Funnels";
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
        image="/images/Dispensary-01.webp"
        title={
          <>
            Result-driven Dispensary <br />
            Marketing Agency
          </>
        }
        desc={
          <>
            <b>
              We are a creative cannabis dispensary digital marketing agency
              that offers a comprehensive <br />
              range of dispensary marketing solutions for your cannabis
              business.
            </b>
          </>
        }
      />
      <ImageRight
        title="We Drive Sales to Your Dispensary"
        description={
          <>
            Is your dispensary struggling to stand out in the cannabis market?
            At Power Funnels, we combine cannabis industry expertise and
            powerful digital marketing techniques to improve growth for your
            cannabis dispensary. We help cannabis dispensaries with innovative
            Dispensary Local Marketing that helps you rise to the top of search
            result pages and helps customers find you first. Cannabis market
            research, branding, SEO, social media management, content creation,
            and website development are just few of the marketing services we
            offer. <br />
            <br />
            Our years of dedication and drive to constantly evolve, grow, expand
            our work and how we do it is the right fit for clients in the
            cannabis industry. Let us help your dispensary get more customers so
            you can make more money with our proven dispensary local marketing
            solutions. Grow your brand with us!
          </>
        }
        image="/images/Dispensary-02.webp"
      />
      <PowerProcess
        heading={
          <>
            Healthcare Web Development By Power Funnels A <br />
            Complete Solution For Your Dispensary Marketing
          </>
        }
        imgicon1="/images/bonus-r.svg"
        icontitle1="High-end Dispensary Marketing Agency"
        icondesc1={
          <>
            At Power Funnels, we design and develop websites, create unique
            branding, and launch successful digital marketing campaigns for our
            cannabis clients. Dedicated to growing your cannabis brand
            effectively- we are committed to supporting your vision with our
            advance Dispensary Marketing Plans. Add value to your cannabis brand
            with our Dispensary Marketing Agency.
          </>
        }
        imgicon2="/images/remotel-r.svg"
        icontitle2="Custom Dispensary Advertising Solutions"
        icondesc2={
          <>
            We offer innovative dispensary advertising solutions to scale your
            cannabis business. Our dispensary marketing services are custom
            tailored to your business to help you win. Our Dispensary Marketing
            Plans provide a complete solution for your Dispensary Advertising
            needs. Launch your dispensary with us today!
          </>
        }
        mystyledisplay3={{ display: "none" }}
        mystyledisplay4={{ display: "none" }}
      />
      {/* nav-section */}
      <section className="">
        <div className="text-center pt-5 pb-4">
          <h2 className="rev-title pb-3">
            Cannabis Dispensary Digital Marketing Agency Revolutionizing <br />
            the Way You Promote Cannabis Products
          </h2>
        </div>
        <div className="row tab">
          <button
          style={{width: "225px"}}
            id="advertisingbtn"
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212904")}
          >
            Branding
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212905")}
          >
          Increase Website Traffic
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212906")}
          >
            Strategic Services
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212907")}
          >
            Customized Plans
          </button>
        </div>
        <section id="section-212904">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                We are the cannabis dispensary branding experts. Let our
                Cannabis Dispensary Digital Marketing Agency help build the
                brand name you have always dreamed of. You just need to sit back
                and have all your brand assets created and delivered on time.
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
                Begin ranking organically and drive more traffic to your website
                with our effective digital advertising solutions. Start, grow
                and organize your dispensary with our smart Dispensary Local
                Marketing solutions.
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
                We are here to work with you at any point in your dispensary
                marketing activities. We also assist in creating highly
                effective organic dispensary marketing strategies, including
                email, SEO, and social media management.
              </>
            }
            image="/images/Dispensary-03.webp"
          />
        </section>
        <section id="section-212907">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                At Power Funnels, we offer customized digital marketing plans
                for all of your dispensary marketing needs. As a leading
                Dispensary Marketing Agency, we help cannabis businesses to
                manage their dispensary marketing to optimize their business
                while also attracting new customers.
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
            <h2 className="faq-heading">
              Move Your Cannabis Dispensary Forward with <br />
              Result-oriented Dispensary Marketing Plans
            </h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- Search Engine Optimization</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  You know your cannabis dispensary website has to be built with
                  SEO as a top priority. But with Google changing its
                  algorithms, it can be hard to devote the attention it needs.
                  If you want a solid online presence, an effective SEO strategy
                  is important to your overall success. Our highly experienced
                  professionals will help you filter through the marketing
                  clutter, and build a custom plan that not only delivers
                  exceptional results but fits your marketing budget. Our
                  powerful SEO techniques will move you up in the organic
                  rankings. Choose us as your creative Dispensary Marketing
                  Agency.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={<>2- Website Design and Development​</>}
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  An engaging website design is key to an effective dispensary
                  advertising strategy. Capitalizing on best practices will set
                  you above your competition, making your marketing strategy
                  successful. At Power Funnels, our marketers analyze your
                  dispensary website, your competition, to ensure that your
                  website design aligns to what you need for your dispensary,
                  driving traffic that leads to new customers.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- Brand Identity</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Creating your brand that best defines your business takes
                  time. As your trusted Cannabis Dispensary Digital Marketing
                  Agency, we create a brand identity in line with the goals and
                  values of your dispensary. Choose our effective digital
                  marketing plans and create a brand identity that’s
                  representative of your business.
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={<>4- Content Creation</>}
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Engaging cannabis content is a superb way to create online
                  buzz about your business. Informative cannabis content is the
                  right way to improve your search engine rankings. We create
                  blogs, articles, social media posts, videos, and more to help
                  improve your brand awareness.
                </>
              }
            />
            <FaqSection
              target="#collapseEleven"
              aria="false"
              control="collapseEleven"
              faqtitle={<>5- Social Media Marketing</>}
              id="collapseEleven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Connecting with your existing customers and target market
                  through social media platforms is the key component to your
                  cannabis marketing strategy. A solid social media strategy not
                  only enhances your online reach but gives you the opportunity
                  to gain trust with your target audience and generate new
                  leads. Our professionals understand that consistency is the
                  key, and we can work with you to develop a social media
                  marketing strategy that works for your
                </>
              }
            />
            <FaqSection
              target="#collapseEleve"
              aria="false"
              control="collapseEleve"
              faqtitle={<>6- Email Marketing​</>}
              id="collapseEleve"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Email marketing is an exceptional tool for improving your
                  reach and connecting with your target audience. Using your
                  email list is one key way of improving your brand’s reach. At
                  Power Funnels, we work with you to confirm that you are
                  getting the most out of your e-mail subscribers, using
                  eye-catchy messages, with the right frequency, and a strong
                  call-to-action.
                </>
              }
            />
          </div>
        </div>
      </section>
      <ImageRight
        title="Powerful Dispensary Advertising Solutions"
        description={
          <>
            At Power Funnels, we are committed to providing a wide range of
            dispensary advertising solutions to help marijuana/cannabis
            businesses grow and succeed. With our result-oriented dispensary
            advertising solutions, we can help you build a strong online
            presence and enhance your position as an authority and highly
            sought-after name in the cannabis industry. Our professionals start
            the journey with a conversation around your dispensary and need to
            determine the perfect combination of dispensary advertising services
            for your business. Ensure the success of your dispensary with our
            exceptional Dispensary Marketing Plans.
          </>
        }
        list1={
          <>
            <b>
              <i
                class="fa-solid fa-pen-to-square pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              Keyword Research
            </b>
          </>
        }
        list2={
          <>
            <b>
              <i
                class="fa-solid fa-link pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              Link Building
            </b>
          </>
        }
        list3={
          <>
            <b>
              <i
                class="fa-solid fa-desktop pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              OnPage Seo
            </b>
          </>
        }
        list4={
          <>
            <b>
              <i
                class="fa-solid fa-store pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              PPC Advertising
            </b>
          </>
        }
        list5={
          <>
            <b>
              <i
                class="fa-brands fa-readme pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              Content Strategy
            </b>
          </>
        }
        list6={
          <>
            <b>
              <i
                class="fa-solid fa-person pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              Influencer Outreach
            </b>
          </>
        }
        image="/images/SEO-for-Lawyers-04.webp"
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

export default Dispensary;
