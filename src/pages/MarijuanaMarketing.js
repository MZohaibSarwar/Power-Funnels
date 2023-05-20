import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import PowerProcess from "../components/PowerProcess";
import { Link } from "react-router-dom";
import DaveDeMare from "../components/DaveDeMare";
import ReviewItems from "../components/ReviewItems";
import ImageLeft from "../components/ImageLeft";
import FaqSection from "../components/FaqSection";

function MarijuanaMarketing() {
  document.title = "Marijuana Marketing and Advertising - Power Funnels";
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
        image="/images/Marijuana-Marketing-and-Advertising1.webp"
        title={<>An Award-winning Marijuana Marketing Agency</>}
        desc={
          <>
            <b>
              We are a full-service creative marijuana marketing agency that
              creates powerful strategies and advertising solutions for your
              marijuana business.
            </b>
          </>
        }
      />
      <ImageRight
        title="We Deliver Results"
        description={
          <>
            Power Funnels is an award-winning Marijuana Marketing Agency
            dedicated to helping businesses gain the digital edge and grow their
            brand name online. Our professionals will help you reach your target
            audience and improve sales through performance-based Marijuana
            Marketing campaigns. Gaining a positive reputation within the
            marijuana industry is the top priority for our clients. <br />
            <br />
            From the ground up, we will help you build your marijuana business
            around your goals and bring your vision to life! Shine your brand
            with us! SEO, social media management, content creation, website
            development and graphic design are just a few of the marketing
            services we offer.
          </>
        }
        image="/images/cannabis2.webp"
      />
      <PowerProcess
        imgicon1="/images/cannabis.svg"
        icontitle1="1.Dedicated Creative Marijuana Marketing Agency"
        icondesc1={
          <>
            Where traditional marijuana advertising techniques have failed
            marijuana business owners, digital marketing has opened a whole new
            world of possibilities for your marijuana brand to grow and be
            discovered. At Power Funnels, we combine high-end digital marketing
            with marijuana industry expertise to deliver our client's real
            growth.
          </>
        }
        imgicon2="/images/graphicdesign.svg"
        icontitle2="2.Result-oriented Marijuana Advertising Solutions"
        icondesc2={
          <>
            Our Creative Marijuana Marketing team can design and develop a
            customized website for your marijuana business, implement an
            effective SEO and keyword strategy, and will create and develop the
            best marijuana advertising solutions for your marijuana business.
            Grow your marijuana business with us! <br />
            <br />
          </>
        }
        mystyledisplay3={{ display: "none" }}
        mystyledisplay4={{ display: "none" }}
      />
      {/* nav-section */}
      <section className="">
        <div className="text-center pt-5 pb-4">
          <h2 className="rev-title pb-3">
            Let us Light Your Way with Our Powerful <br />
            Marijuana Advertising Solutions
          </h2>
        </div>
        <div className="row tab">
          <button
          style={{width: "225px"}}
            id="advertisingbtn"
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212904")}
          >
            Brand Identity Design
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212905")}
          >
            Online Presence
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212906")}
          >
           Increase Website Traffic
          </button>
          <button
          style={{width: "225px"}}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212907")}
          >
            Tailored Solutions
          </button>
        </div>
        <section id="section-212904">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Branding is important to succeeding in the marijuana industry.
                At Power Funnels, we offer the best branding solutions for your
                marijuana startup or rebranding for existing marijuana business.
              </>
            }
            image="/images/seo-contentstragety.svg"
          />
        </section>
        <section id="section-212905">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Our highly trained team helps create powerful campaigns that can
                drive traffic to your stores, or enhance awareness of your
                marijuana brand’s online presence.
              </>
            }
            image="/images/onpagefixed.svg"
          />
        </section>
        <section id="section-212906">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                As a leading Creative Marijuana Marketing Agency, Power Funnel’s
                marijuana SEO strategies will give you exceptional traction in
                Google search, resulting in a dramatic increase of traffic to
                your website.
              </>
            }
            image="/images/seo-contentstragety.svg"
          />
        </section>
        <section id="section-212907">
          <ImageLeft
            style={{ backgroundColor: "white" }}
            description={
              <>
                Start, grow and organize your marijuana business with our
                effective marijuana advertising solutions.
              </>
            }
            image="/images/seo-linkbuildingicon.svg"
          />
        </section>
      </section>

      {/* FAQs-section */}
      <section className="faq-section" style={{ padding: "50px 0 70px" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">
              Creative Marijuana Marketing Services
            </h2>
          </div>
          <div>
            <FaqSection
              target="#collapseSeven"
              aria="false"
              control="collapseSeven"
              faqtitle={<>1- Branding</>}
              id="collapseSeven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Branding is the creation of a unique design, distinctive name,
                  and particular image to promote a business or product. A solid
                  brand will be easily recognizable and attract and retain loyal
                  customers. Let us help you make a mark in the marijuana
                  industry with our professional branding services. Make your
                  brand powerful with our creative marijuana marketing firm.
                </>
              }
            />
            <FaqSection
              target="#collapseEight"
              aria="false"
              control="collapseEight"
              faqtitle={<>2- Engaging Website Design​</>}
              id="collapseEight"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  At Power Funnels, we believe your website is the foundation of
                  your business’ online presence. Your business’ online presence
                  must be optimized for your valuable customers first, then
                  equally for search engines. Our professionals will get you
                  found with quality web design services and boost your online
                  revenue! Develop a brand new website for your marijuana
                  business with us! Our team of highly trained graphic designers
                  will work with you to design and develop a custom marijuana
                  dispensary website, or refresh your existing website, to fit
                  your business needs. Our professionals are highly skilled and
                  well-equipped in the marijuana industry to help your brand
                  name grow.
                </>
              }
            />

            <FaqSection
              target="#collapseNine"
              aria="false"
              control="collapseNine"
              faqtitle={<>3- Marijuana SEO</>}
              id="collapseNine"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Effective SEO for marijuana advertising must be implemented
                  strategically and focused on relevant keyword search phrases
                  that are directly related to your top quality marijuana
                  products and services. Get your marijuana dispensary found
                  online with our proven marijuana advertising strategy. We are
                  marijuana marketing professionals, customer acquisition
                  specialists, and dispensary SEO experts. Our experience with
                  SEO in the medical and recreational marijuana industry has
                  shown us that organic SEO is the powerful way to create
                  awareness for your quality marijuana products and services.
                  Strategic organic SEO tactics for your medical dispensary or
                  recreational marijuana website is also a superb technique to
                  use to enhance brand awareness and fill all levels of your
                  conversion funnel. Ready to get started? Contact us today for
                  exceptional marijuana advertising solutions.
                </>
              }
            />
            <FaqSection
              target="#collapseTen"
              aria="false"
              control="collapseTen"
              faqtitle={<>4- Email Marketing</>}
              id="collapseTen"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Email marketing for marijuana dispensaries can be a highly
                  profitable digital marketing tactic for your marijuana store
                  and one of the most effective ways for you to stay in touch
                  with your valuable customers to offer discounts and special
                  deals. Choose us as your trusted Marijuana Marketing Agency.
                </>
              }
            />
            <FaqSection
              target="#collapseEleven"
              aria="false"
              control="collapseEleven"
              faqtitle={<>5- Social Media Management</>}
              id="collapseEleven"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Your quality marijuana product, service or your marijuana
                  dispensary marketing must have a solid social media presence
                  and strong social following in order to be relevant today.
                  Today, people spend more time on social media platforms than
                  anywhere else online. The more engaging and relevant content
                  you are creating and sharing online, the more often you will
                  pop up in their feeds. <br />
                  Therefore, it is quite important for your marijuana business
                  to be active on social media platform and keep your brand name
                  in front of your existing customers and potential clients
                  every day. Feel free to contact us today for practical
                  marijuana marketing solutions.
                </>
              }
            />
            <FaqSection
              target="#collapseEleve"
              aria="false"
              control="collapseEleve"
              faqtitle={
                <>
                  6- Attract High Quality Customers to Your Marijuana Brand with
                  us!
                </>
              }
              id="collapseEleve"
              clsname="accordion-collapse collapse"
              faqdesc={
                <>
                  Whether you are an entrepreneur in the initial stages or an
                  established brand in the marijuana industry, we can help grow
                  your brand online and reach your target market. We are a
                  data-driven, forward-thinking marijuana marketing agency
                  specifically serving the marijuana industry with best in class
                  marijuana marketing solutions that grow, engage and nurture
                  your customer base. <br />
                  Marijuana advertising today makes use of modern technology. It
                  is data-driven and highly targeted. Just putting an ad out
                  there and hoping that your potential client will see it isn’t
                  a practical strategy. Today, there is no guess work. <br />
                  At Power Funnels, we focus on getting results in the digital
                  world and deliver a measurable return on investment (ROI). Our
                  professionals work with your business to evaluate your needs
                  and build an effective strategy to get you where you want to
                  be. Contact us today for powerful Marijuana Marketing
                  strategies!
                </>
              }
            />
          </div>
        </div>
      </section>
      <ImageRight
        title="Performance Based Marijuana Marketing Solutions"
        description={
          <>
            Marijuana is making high waves, and it seems to be on everyone’s
            mind these days. Marijuana industry is set to grow at a remarkable
            rate. At Power Funnels, we support and deliver every imaginable
            service for our clients. Our experienced team seamlessly integrates
            with your marijuana brand, offering exceptional marijuana
            advertising services at a fraction of the cost. Our clients know
            that we’ll provide relevant, professional services that can meet
            their needs. Choose us as your creative Marijuana Marketing Firm.
          </>
        }
        list1={
          <>
            <b>
              <i
                class="fa-solid fa-pen-to-square pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>{" "}
              Relevant Keyword Research
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
              Building Links
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
              On Page Seo
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
              PPC Marketing
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
              Content Marketing
            </b>
          </>
        }
        list6={
          <>
            <b>
              <i
                class="fa-brands fa-readme pe-2 pb-2"
                style={{ color: "#ff0000" }}
              ></i>Influencer Outreach
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

export default MarijuanaMarketing;
