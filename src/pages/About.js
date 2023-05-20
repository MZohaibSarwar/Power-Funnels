import React from 'react'
import './about.scss'
import PageBanner from '../components/PageBanner'
import ImageRight from '../components/ImageRight'
import PowerProcess from '../components/PowerProcess'
import ImageLeft from '../components/ImageLeft'
import { Link } from 'react-router-dom'

function About() {
  document.title = "About - Power Funnels";
  return (
    <div>
     <PageBanner 
     image="/images/home-hero.webp"
     title={<> About Award-Winning Power Funnels</>}
     desc={<>We successfully compete in the most hyper-competitive industries in the world, <br/> one strategy, and award at a time.</>}
     />
     <ImageRight 
      title="We strive to deliver more."
      description={<>Power Funnels is a battle tested and proven digital marketing agency that powers your success – no matter how competitive your industry or vertical is.<br/>

        We partner with and build large CBD brands, law firms, healthcare entities and serial entrepreneur’s online empires. This is what you can expect working with us:</>}
      list1={<><i className="fa-solid fa-check me-2" style={{color: "#ff0000"}}></i> An expert team and expert results.</>}
      list2={<><i className="fa-solid fa-check me-2" style={{color: "#ff0000"}}></i> World class customer support.</>}
      list3={<><i className="fa-solid fa-check me-2" style={{color: "#ff0000"}}></i> Fellow entrepreneurs and empire builders.</>}
      image="/images/business-people-shaking-hand.webp"
      />
      <PowerProcess
      heading={<>Benefits of hiring us over hiring in-house.</>}
      imgicon1="/images/team-r.svg"
      icontitle1="Skilled Experts"
      icondesc1="You gain an entire team of marketing experts that don’t require training and are on top of emerging trends."
      imgicon2="/images/remotel-r.svg"
      icontitle2="Flexibility & Scalability"
      icondesc2="We can scale as your business grows without skipping a beat while ensuring flexibility to your business and seasonal needs."
      imgicon3="/images/sickdays-r.svg"
      icontitle3="Reduced Costs"
      icondesc3="Outsourcing your marketing efforts with an agency eliminates salaries, and other costs and headaches with on-boarding and potentially bringing on the wrong hire."
      imgicon4="/images/3r.svg"
      icontitle4="Increased ROI"
      icondesc4="You and your staff can concentrate on your areas of strength and retain resources that can then be deployed to other initiatives and projects."
      />
      <section className='process'>
        <div className="container text-center">
          <h2 className='process-title'>Our Proven Process for Success</h2>
          <p>HAVING WORKED WITH 100+ CLIENTS, WE’VE DIALED DOWN ON THE 5 POWER STEPS.</p>
        </div>
        <ImageLeft
        style={{backgroundColor: "white", padding: "40px 0"}}
            title="Step 1 : Evaluate"
            description={<>Our team will audit your current website, <br/>competitors, and marketing strategies.</>}
            image="/images/process-step-1.webp"
      />
        <ImageRight
        style={{padding: "40px 0"}} 
      title="Step 2 : Plan"
      description={<>After evaluation, a detailed plan and clear <br/>budgets and costs will be proposed.</>}
      image="/images/process-step-2.webp"
      />
              <ImageLeft
        style={{backgroundColor: "white", padding: "40px 0"}}
            title="Step 3 : Strategize"
            description={<>Together we will strategize the best approach and <br/>budget needs to meet and surpass your goals.</>}
            image="/images/process-step-3.webp"
      />
        <ImageRight
        style={{padding: "40px 0"}} 
      title="Step 4 : Test"
      description={<>After launch we will optimize your campaigns and test <br/>multiple versions to find the winning formula.</>}
      image="/images/business-people-shaking-hand.webp"
      />
              <ImageLeft
        style={{backgroundColor: "white", padding: "40px 0"}}
            title="Step 5: Scale"
            description={<>We take the winning mix of campaigns and tactics and <br/>will scale budgets with a focus on your bottom line.</>}
            image="/images/process-step-5.webp"
      />
      </section>

      <ImageRight 
      style={{backgroundColor: "black", color: "white"}}
      title="Ready To Grow?"
      description="Take the next step in growing your business using digital marketing. Fill in the form below and one of our marketing experts will connect with you to learn more about your business and your targets. We’ll then send you a service proposal free of charge."
      list1={<Link to="/get-started" className='btn btn-lg btn-outline-light mt-3' type='button'>Get Started <i className="fa-solid fa-arrow-right ps-2"></i></Link>}
      image="/images/Mac-Mockup-01.webp"
      />

    </div>
  )
}

export default About
