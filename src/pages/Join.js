import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import { Link } from "react-router-dom";
import ReviewItems from "../components/ReviewItems";


function Join() {
  document.title = "Join Our Team - Power Funnels";
  return (
    <div>
      <PageBanner
        image="/images/leadership-team.jpg"
        title={<> Join The Power Team</>}
        desc={<>We're Growing And We Need Talent!</>}
      />
      <ImageRight
        title="Feeling The Spark?"
        description={
          <>
            We are always on the lookout for creative, passionate, adventurous &
            quirky people to work with who have a natural thirst for learning,
            creating, and pursuing their professional and personal ambitions.
            <br />
            <br />
            Power Funnels is an equal opportunity employer. We value diversity
            and encourage anyone who is interested in joining our team to apply
            for open roles, even if you aren’t certain that you’re qualified.
            Our top priority is hiring the right person for each role. So we
            want to hear from you!
          </>
        }
        list1={
          <>
            <Link
              type="button"
              className="btn btn-lg btn-danger mt-4"
              to="/available-positions"
            >
              View Positions & Apply Now
              <i className="fa-solid fa-arrow-right ps-2"></i>
            </Link>
          </>
        }
        image="/images/join-team.webp"
      />

      <section
        className="power-process"
        style={{ padding: "70px 0", backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="heading text-center pb-4">
            <h2>Perks & Benefits</h2>
            <p>
              We offer competitive salaries and comprehensive benefits. Both are
              necessary for us to do <br />
              our best work. Benefits, when done right, are a reflection of a
              company’s values and culture. <br />
              Make sure to read about ours above to see if you’d be a good fit
              at Power Funnels.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/remotel-r.svg"
                imgalt="remotel-r"
                title="Fully Remote"
                desc={
                  <>
                    Decide where you work best, whether that’s from home, a
                    coffee shop, or in another country. We’ll even give you $200
                    / year to go towards your workspace and equipment.
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/bonus-r.svg"
                imgalt="bonus-r"
                title="Monthly Bonuses"
                desc={
                  <>
                    We put our money where our mouth is and reward
                    performance-based work across our entire team. Expect to
                    receive $200 – $2000 / month on top of your regular pay most
                    months. That’s right!
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/sickdays-r.svg"
                imgalt="sickdays-r"
                title="Paid Sick Leave"
                desc={<>We will pay 3 – 5 of your sick days per year.</>}
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/SEOsearch-r.svg"
                imgalt="SEOsearch-r"
                title="Work with exciting clients and team members from all over the world"
                desc={
                  <>
                    Learn, grow and exceed your professional and personal goals!
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/responsive.svg"
                imgalt="responsive"
                title="Flexible Work Schedule"
                desc={
                  <>
                    For us, the flexibility provided by remote work is worth the
                    tradeoffs and we are 100% focused on our customers and
                    supporting our internal team. No wasted time commuting 20
                    hours a week. Enjoy working whichever day and time that
                    works best for you, of course as long as team / client
                    meetings are attended!
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/campaign-r.svg"
                imgalt="campaign-r"
                title="Gold Extended Medical Coverage"
                desc={
                  <>
                    For us taking time off is critical to productivity and
                    performance. So, we will help cover the costs for 14 days of
                    your vacation per year. For higher-up executives, we will
                    take care of 21 days of your vacation per year plus more.
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/stragety-r.svg"
                imgalt="stragety-r"
                title="Vacation"
                desc={
                  <>
                    We help cover the costs of comprehensive medical, dental, vision insurance, emergency fund, massage therapy, etc.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
      <ImageRight 
      style={{backgroundColor: "black", color: "white"}}
      title="Ready To Grow?"
      description="Take the next step in growing your business using digital marketing. Fill in the form below and one of our marketing experts will connect with you to learn more about your business and your targets. We’ll then send you a service proposal free of charge."
      list1={<Link to="/get-started" className='btn btn-lg btn-outline-light mt-3' type='button'>Get Started <i className="fa-solid fa-arrow-right ps-2"></i></Link>}
      image="/images/Mac-Mockup-01.webp"
      />
    
    </div>
  );
}

export default Join;
