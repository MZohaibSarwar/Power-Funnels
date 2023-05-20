import React from "react";
import "./reviewhome.scss";
import { Link } from "react-router-dom";
import ReviewItems from "./ReviewItems";

function ReviewHome() {
  return (
    <section className="reviewhome">
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <img
            className="top-rated-img"
            src="/images/top-rated.svg"
            alt="top-rated"
          />
          <h2 className="top-rated-title">Top rated on </h2>
          <img className="upwork-img" src="/images/upwork.svg" alt="upwork" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <ReviewItems
              image="/images/Total-Mental-Wellnesspng-150x150.webp"
              imgalt="Total-Mental-Wellness"
              title="PPC Management for Top Rated Business in Florida"
              company="Total Mental Wellness"
              desc={
                <>
                  <b>
                    Lee and his team have been extremely helpful throughout this
                    project. He provided very thorough and meaningful feedback
                    to optimize our Google ads account.
                  </b>
                  <br />
                  <br />
                  With his help, we have been able to reach a much wider client
                  base, and our CPL has decreased significantly. He answered all
                  questions very promptly and was willing to work with us to
                  mean our business's specific needs.{" "}
                  <b>
                    I highly recommend Lee and his team and would gladly work
                    with them in the future!
                  </b>
                </>
              }
            />

            <ReviewItems
              image="/images/Abbie-James.webp"
              imgalt="Abbie-james"
              title="SEO for Australian Luxury Retail Brand"
              company="Abbie James"
              desc={
                <>
                  <b>
                    Reasons why we love Lee: Lee cared about our project and our
                    outcome. He was organized. He has systems in place which
                    made the process so much easier.
                  </b>
                  <br />
                  <br /> He stood out from others we have used because he was so
                  professional and had great communication and understood our
                  western market. The quality of work was amazing. He went above
                  and beyond.{" "}
                  <b>
                    He had great ideas and feedback and educated me. I already
                    hired him again! Thanks Lee :)
                  </b>
                </>
              }
            />

            <ReviewItems
              image="/images/Brighter-Dyes.webp"
              imgalt="Brighter-Dyes"
              title="Website Build for Australian E-comm Brand"
              company="Brighter Dyes"
              desc={
                <>
                  <b>
                    Go ahead and stop your search now and hire Lee! I truly do
                    not have the adequate words to describe how thankful I am
                    for the amazing work Lee and his team at Power Funnels did
                    for my website. Lee went above and beyond to make my website
                    absolutely perfect.
                  </b>
                  <br />
                  <br /> He is kind and thoughtful. He is extremely detailed
                  orientated. He is patient and answered every question I had
                  quickly and kindly. He is extremely knowledgeable on website
                  building, e-commerce and marketing. He is professional in
                  every way! He came up with ideas to help my website that I did
                  not even think about!
                  <br />
                  <br /> I will continue to work with Lee for many more projects
                  in the future.{" "}
                  <b>
                    I am so excited to see how my business grows from all of the
                    hard work Lee and his team put into my website. Thank you
                    for everything, Lee!
                  </b>
                </>
              }
            />
          </div>

          <div className="col-md-6">
            <ReviewItems
              image="/images/Archos Engineering Consultants.webp"
              imgalt="Archos Engineering Consultants"
              title="Website Redesign & SEO for Electrical Engineering Firm"
              company="Archos Engineering Consultants"
              desc={
                <>
                  <b>
                    We had the pleasure of working with Lee and his team to
                    build out our entire marketing strategy, starting with a
                    refresh of our website.
                  </b>
                  <br />
                  <br />
                  Upon formal engagement, we were sent a questionnaire which
                  helped us define the scope of work, as well as gain clarity on
                  what we really needed. The questionnaire was simple, clear and
                  straight to the point.
                  <br />
                  <br />
                  Our project was broken out into various milestones which
                  helped us organize our thoughts and strategy. For
                  organization, Lee had us use a project management software
                  called "Basecamp" which was incredibly easy to use. This
                  platform allowed us to keep track of overall progress, to-do's
                  and action items.
                  <br />
                  <br />
                  <b>
                    Lee and his team really standout in customer service and the
                    organization of information. His team consistently provided
                    us with updates and were great on providing recommendations
                    through their solutions oriented approach.
                  </b>
                  <br />
                  <br />
                  The final version of the website that Lee and his team
                  designed for my firm was absolutely amazing. I was nervous
                  about hiring another web agency to redesign our website due to
                  the previous negative experiences that I had with other
                  agencies, however was I ever wrong with Power Funnels! The
                  website they designed for my firm has immense amount of
                  attention to detail, so much substance and value, and is just
                  an overall BEAST of a website! I cannot wait to unleash it
                  fully in January!
                  <b>
                    <br />
                    <br />
                    We've already hired Lee and his team for their digital
                    marketing services as they genuinely are EXPERTS, and make
                    an effort to overdeliver on value and are truly passionate
                    about what they do. Thanks,
                  </b>
                </>
              }
            />

            <ReviewItems
              image="/images/Good-Spirited-Styling.webp"
              imgalt="Good Spirited Styling"
              title="Website Build & SEO for U.S. E-Comm Brand"
              company="Good Spirited Styling"
              desc={
                <>
                  <b>
                    A MUST HIRE - First off let me start off by saying Lee and
                    his team COMPLETELY saved this project, these guys are
                    absolute geniuses, it was a very limited timeframe also.
                  </b>
                  <br />
                  <br />
                  Given the outline of the project and deadline, Lee and his
                  team executed this project beyond my imagination, they were
                  honest, kind, patient & professional with me. I'm so glad I
                  was able to hire these guys, and I can SAFELY say I will
                  DEFINITELY be re-hiring Lee and his team again in the near
                  future.
                  <br />
                  <br />
                  <b>
                    I HIGHLY RECOMMEND Lee and his team, this is top-tier work!
                    You're DEFINITELY in great hands with Lee!!
                  </b>
                </>
              }
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/reviews" className="btn btn-danger btn-lg">
            Read More Written Power Funnels Reviews{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReviewHome;
