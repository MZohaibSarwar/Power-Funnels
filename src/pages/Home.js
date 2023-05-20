import React from "react";
import Banner from "../components/Banner";
import AboutProfile from "../components/AboutProfile";
import ReviewHome from "../components/ReviewHome";
import ImageRight from "../components/ImageRight";
import DaveDeMare from "../components/DaveDeMare";
import PowerProcess from "../components/PowerProcess";
import ImageLeft from "../components/ImageLeft";
import Carasoul from "../components/Carasoul";
import { Link } from "react-router-dom";
import AnimatedIcon from "../components/AnimatedIcon";

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner />
      <AboutProfile />
      <ReviewHome />
      <ImageRight
        title="Team up with the best."
        description="If you're looking for expert PPC & SEO experts, marketers, developers, and designers who charge up websites with laser-targeted leads. You've found 'em. Get a better ROI from your digital channels & stop throwing away money on underperforming campaigns and empty promises. Here's what you can expect while working with us:"
        list1={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            A dedicated account manager + a team of experts behind you
          </>
        }
        list2={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Client communication + honest recommendations
          </>
        }
        list3={
          <>
            <i
              className="fa-solid fa-check me-2"
              style={{ color: "#ff0000" }}
            ></i>{" "}
            Expert results + reliability
          </>
        }
        image="/images/modern-marketing-professionals.jpg"
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
      <PowerProcess
        heading={<>Our Power Process</>}
        imgicon1="/images/1r.svg"
        icontitle1="1. LEARN"
        icondesc1="Our team will take the time to learn your business and objectives, and conduct thorough research and analysis."
        imgicon2="/images/2r.svg"
        icontitle2="2. STRATEGIZE"
        icondesc2="Together we will strategize the best approach and budget needs to meet your growth objectives."
        imgicon3="/images/3r.svg"
        icontitle3="3. EXECUTE"
        icondesc3="Our focus is to deploy programs and campaigns through efficient project management, on-brand messaging, and clear deliverables."
        imgicon4="/images/SEOsearch-r.svg"
        icontitle4="4. OPTIMIZE"
        icondesc4="Through an ongoing process during the lifetime of your campaigns, we continuously test, analyze, and optimize."
      />
      <ImageLeft
        title="We get it. And we get you."
        description="We’re entrepreneurs and business people too. You have to make a hundred decisions today, the last thing you should worry about is if your marketing dollars are making a profit and supporting your goals.
            Your success wasn’t built on following the status quo. It’s built on passion, love, stress, and the blood, sweat and tears of the people who took a leap of faith to follow their dreams."
        list1={
          <>
            {" "}
            <p style={{ fontWeight: "bold" }}>
              {" "}
              Let’s work together and Power Up Results.
            </p>{" "}
          </>
        }
        image="/images/leadership-team.jpg"
      />
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
      <Carasoul />
      <AnimatedIcon
        style={{ backgroundColor: "black", color: "white" }}
        title="Power Funnels Portfolio!"
        description="When you partner with Power Funnels, we take care of the heavy lifting so you can enjoy more leads, revenue and time to spend on what you actually want to do."
        list1={
          <a
            href="https://results.power-funnels.com/case-studies/"
            className="btn btn-lg btn-outline-light mt-3"
            type="button"
          >
            View Case Studies <i className="fa-solid fa-arrow-right ps-2"></i>
          </a>
        }
      />
    </div>
  );
}

export default Home;
