import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import { Link } from "react-router-dom";
import ImageLeft from "../components/ImageLeft";
import "./websitemaintenence.scss";

function WebsiteMaintainence() {
  document.title = "Monthly Website Maintenance - Power Funnels";
  async function openCategory(evt, categoryName) {
    let tablinks;
    document.getElementById("section-212904").style.display = "none";
    document.getElementById("section-212905").style.display = "none";
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

    document.getElementById("advertisingbtn").className =
      "col-sm-12 col-md-12 col-lg-2 tablinks active";
  }, 1);

  return (
    <div className="service-page">
      <PageBanner
        image="/images/female-technician-using-laptop-with-powerfunnels-logo-1-scaled.webp"
        title={<>Website Hosting & Maintenance Packages</>}
        desc={
          <b>
            <p>
              You and your team are busy growing your business. Updating website
              plugins and worrying about website security is probably the last
              thing on your list of priorities. In the past, you probably have
              wanted to complete a "simple" web-related task, such as creating a
              new page on your website - but to your dismay it took forever to
              complete and the design turned out simple, leading to you feeling
              annoyed and frustrated. Sound familiar?
            </p>
            <p>
              Don't worry! We'll make your life easy by dealing with the
              back-end website technology and ongoing maintenance for your:
              Domain, hosting, design updates, security & plug-in updates, site
              backups & more.
            </p>
          </b>
        }
      />
      <ImageRight
        title="If You Sell With Your Website, You Need More Than Just Hosting!"
        description={
          <>
            Website hosting and maintenance is absolutely critical for any
            business owner who sells using their website. <br />
            Website hosting and maintenance may not seem like it has much to do
            with conversion rates, SEO, your overall marketing results – and
            whether your online business is successful or not, but it is, in
            fact, a vital component.
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Your website’s results (and the results of your business) are
            absolutely correlated with hosting, web design, and ongoing
            maintenance. This includes things like page speeds, cache updates,
            conversion-friendly pages, mobile responsiveness and many other
            criteria points. <br />
            <br />
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            No matter the size of your online business, having a well
            maintained, attractive and conversion friendly website is critical
            to provide a positive user experience, engage and retain leads, and
            to finally convert them into paying customers. <br />
            <br />
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Have you ever closed a website that loaded longer than 3 seconds?
            Without quick hosting and ongoing maintenance, your site will begin
            to operate less effectively, your conversions will drop, and issues
            may arise such as pages and forms breaking – which could lead to
            tens of thousands of dollars of leads lost.
          </>
        }
        image="/images/bearded-developer-working-with-laptop-with-seo-ico-2022-02-06-06-31-52-utc-768x1151.webp"
      />
      <ImageLeft
        style={{ backgroundColor: "white" }}
        title="Benefits of Monthly Website Maintenance"
        description={
          <>
            Have you spent countless hours trying to maintain, update or even
            add simple sections, pages or even apps to your website? What about
            trying to add an opt-in form or pop-up? If you answered ‘yes’ to any
            one of those questions, or you just simply understand the power of
            focusing on growing your business while we do what we do best, then
            Power Funnels website maintenance plans are going to be great for
            you and your business!
          </>
        }
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Lightning-quick hosting on our private server
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Hours allocated towards monthly website updates
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            SSL Certificate ($150 Saved)
          </>
        }
        list4={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Security plugins & monitoring
          </>
        }
        list5={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Installing and configuring themes and plugins
          </>
        }
        list6={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Cache clearing & updating code
          </>
        }
        list7={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Back-end optimizations
          </>
        }
        list8={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Back-ups of your website
          </>
        }
        image="/images/myb-lapotop-1709-768x1151.webp"
      />
      {/* nav-section */}
      <section className="nav-section">
        <div className="text-center pt-5">
          <h6>MONTHLY & YEARLY WEBSITE MAINTENANCE PLANS</h6>
          <h2 className="rev-title pb-3">The POWER Plans:</h2>
        </div>
        <div
          className="row tab"
          style={{ borderRadius: "10px", width: "fit-content" }}
        >
          <button
            style={{ width: "300px", borderRadius: "10px" }}
            id="advertisingbtn"
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212904")}
          >
            Wordpress Website Management
          </button>
          <button
            style={{ width: "300px", borderRadius: "10px" }}
            className="col-sm-12 col-md-12 col-lg-2 tablinks"
            onClick={(event) => openCategory(event, "section-212905")}
          >
            Shopify Website Management
          </button>
        </div>
        <section id="section-212904">
          <div className="container text-center section-212904">
            <h6>WORDPRESS BASIC MAINTENANCE PLANS</h6>
            <h2>Wordpress Website Management</h2>
            <p>
              Power Funnels is a top website maintenance services company,
              helping businesses across the globe improve the performance and
              security of their websites. Whether you’re looking for a monthly
              or yearly maintenance plans, we provide the experience and
              expertise your company demands.
            </p>
          </div>
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>BASIC</h6>
                    <h2>
                      $50 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (3 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (1 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-lite/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ECONOMY</h6>
                    <h2>
                      $100 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (3 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (2 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (2 hrs / Month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-economy/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ADVANCED</h6>
                    <h2>
                      $150 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (5 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (3 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (3 hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Plugins
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-budget/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>              
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>LARGE BUSINESS</h6>
                    <h2>
                      $350 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (5 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (5 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (5 hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>100% Hands-Off Maintenance
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Updating Code (5 hrs/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Plugins
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-advance/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>BASIC</h6>
                    <h2>
                      $450 <span> /year ($150 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (3 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (1 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-lite-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ECONOMY</h6>
                    <h2>
                      $900 <span>  /year ($300 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (3 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (2 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (2 hrs / Month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-economy-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ADVANCED</h6>
                    <h2>
                      $1350 <span> /year ($450 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (5 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (3 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (3 hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Plugins
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-budget-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>LARGE BUSINESS</h6>
                    <h2>
                      $3150 <span> /year ($1050 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Lightning-Quick Hosting (5 GB)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Core Software Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Plugin Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monthly Backups
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Website Updates (5 Hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Cache Clearing
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (5 hrs / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>100% Hands-Off Maintenance
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Updating Code (5 hrs/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Plugins
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/wordpress-advance-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-212905">
          <div className="container text-center section-212904">
            <h6>SHOPIFY BASIC MAINTENANCE PLANS</h6>
            <h2>Shopify Website Management</h2>
            <p>
              Power Funnels provides world-class Shopify maintenance and support
              so you and your team can focus on expanding your online business.
              Our Shopify developers are highly experienced, passionate and
              reliable in ensuring that your store performs efficiently, and is
              a step ahead of your competitors.
            </p>
          </div>
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>BASIC</h6>
                    <h2>
                      $50 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (1 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (1 hour/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-lite/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ECONOMY</h6>
                    <h2>
                      $100 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (2 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (2 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (2 hrs/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-economy/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ADVANCED</h6>
                    <h2>
                      $150 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (3 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Scans & Fixes
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (2 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (3 hrs/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-budget/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>              
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>LARGE BUSINESS</h6>
                    <h2>
                      $350 <span> / month</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (4 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (4 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Scans & Fixes
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (6 hrs/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>100% Hands-Off Maintenance
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-advance/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>BASIC</h6>
                    <h2>
                      $450 <span> /year ($150 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (1 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (1 hour/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-lite-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ECONOMY</h6>
                    <h2>
                      $900 <span>  /year ($300 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (2 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (2 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (2 hrs/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-economy-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>ADVANCED</h6>
                    <h2>
                      $1350 <span> /year ($450 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (3 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Scans & Fixes
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (2 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (3 hrs/month)
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-budget-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-md-3 p-3">
                <div className="card price-card">
                  <div className="card-header text-center">
                    <h6>LARGE BUSINESS</h6>
                    <h2>
                      $3150 <span> /year ($1050 SAVED)</span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Export and Backup Data
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i> Payment Gateway Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Third-Party Apps & Theme Updates
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Performance Scan
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Monitoring (4 hour / Month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Fixing broken links
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Enhancement (4 hour/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Security Scans & Fixes
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>Store Updates (6 hrs/month)
                      </li>
                      <li>
                        <i
                          className="fa-solid fa-check me-2"
                          style={{ color: "#ff0000" }}
                        ></i>100% Hands-Off Maintenance
                      </li>
                    </ul>

                  </div>
                  <div className="text-center pt-4">
                      <a
                        href="https://www.power-funnels.com/plans/shopify-advance-yearly/"
                        className="btn btn-danger btn-lg w-100"
                      >
                        Select
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ImageRight
        style={{ backgroundColor: "black", color: "white" }}
        title="Ready To Grow?"
        description={
          <>
            Take the next step in growing your business using digital marketing.
            Fill in the form below and one of our marketing experts will connect
            with you to learn more about your business and your targets. We’ll
            then send you a service proposal free of charge.
          </>
        }
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
    </div>
  );
}

export default WebsiteMaintainence;
