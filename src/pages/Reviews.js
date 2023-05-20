import React from 'react'
import DaveDeMare from '../components/DaveDeMare'
import mystyle from './reviews.scss'
import ImageRight from '../components/ImageRight'
import ReviewItems from '../components/ReviewItems'
import Model from '../components/Model'


function Reviews() {
  document.title = "Reviews - Power Funnels";
  async function openCategory(evt, categoryName) {
    let tablinks;

    document.getElementById("section-212904").style.display = "none";
    document.getElementById("section-212905").style.display = "none";
    document.getElementById("section-212906").style.display = "none";
    document.getElementById("section-212907").style.display = "none";
    document.getElementById("section-212908").style.display = "none";
    document.getElementById("section-212909").style.display = "none";

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
    document.getElementById("section-212908").style.display = "none";
    document.getElementById("section-212909").style.display = "none";

    document.getElementById("advertisingbtn").className = "col-sm-12 col-md-12 col-lg-2 tablinks active";
  }, 1);


  return (
    <div className='reviews-page'>
      <DaveDeMare
        clsname="container"
        mystyle={mystyle}
        image="/images/David.webp"
        title={<>POWER FUNNELS GENERATED $211,640 USD FOR MY BUSINESS IN 18 DAYS!</>}
        desc={<>Power Funnels Generated $211,640 USD for my business in 18 days! Lee helped us exceed our crowdfunding goals by more than 300% and exceeded our ROAS expectations (7X ROAS account wide) all within a very compressed 6 week schedule while providing exceptional customer service and genuine care for our business. I couldn’t recommend Lee and his team more!</>}
        name={<>-David Sypniewski <br /><br />President & CEO YAK Grills</>}
      />
      <ImageRight
        description={<>Curious about what it’s like to work with Power Funnels? Explore our more than 70+ client testimonials and experience the impact of Digital Marketing that drives revenue. <br /><br />

          Hear from clients that partnered with Power Funnels for search engine optimization (SEO), pay-per-click (PPC) advertising, web design, social media, and other digital marketing services to learn what it’s like to have our team on yours. <br /><br />

          Start exploring Power Funnels reviews now! You can also contact us online or call us at to chat one-on-one about your business and its online marketing goals.</>}
        list1={<Model/>}
        image="/images/leadership-team.jpg"
      />
      
<div className='text-center pt-5 pb-4'>
  <h2 className='rev-title pb-3'>Why Businesses Partner With Power Funnels</h2>
  <p>Click one of the options below to see what business owners, organizations and serial <br />entrepreneurs have said about working with Power Funnels.</p>
</div>

      <div className="row tab">
        <button id="advertisingbtn" className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212904')}>ADVERTISING</button>
        <button className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212905')}>WEBSITE</button>
        <button className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212906')}>SEO</button>
        <button className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212907')}>SOCIAL</button>
        <button className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212908')}>EMAIL</button>
        <button className="col-sm-12 col-md-12 col-lg-2 tablinks" onClick={(event) => openCategory(event, 'section-212909')}>DESIGN</button>
      </div>

      <section id='section-212904'>
        <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>PPC / PAID SOCIAL ADVERTISING</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section-212905'>
      <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>WEBSITE DEVELOPMENT</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section-212906'>
      <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>SEARCH ENGINE OPTIMIZATION</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section-212907'>
      <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>SOCIAL MEDIA</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section-212908'>
      <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>EMAIL MARKETING</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section-212909'>        
      <div className="container">
          <div className='text-center my-5'>
          <h2 className='rev-title'>GRAPHIC DESIGN</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/Total-Mental-Wellnesspng-150x150.webp"
                imgalt="Total-Mental-Wellness"
                title="PPC Management for Top Rated Business in Florida"
                company="Total Mental Wellness"
                desc={<><b>Lee and his team have been extremely helpful throughout this project. He provided very thorough and meaningful feedback to optimize our Google ads account.</b><br /><br />

                  With his help, we have been able to reach a much wider client base, and our CPL has decreased significantly. He answered all questions very promptly and was willing to work with us to mean our business's specific needs. <b>I highly recommend Lee and his team and would gladly work with them in the future!</b></>}
              />
              <ReviewItems
                image="/images/Abbie-James.webp"
                imgalt="Abbie-james"
                title="SEO for Australian Luxury Retail Brand"
                company="Abbie James"
                desc={<><b>Reasons why we love Lee: Lee cared about our project and our outcome. He was organized. He has systems in place which made the process so much easier.</b><br /><br /> He stood out from others we have used because he was so professional and had great communication and understood our western market. The quality of work was amazing. He went above and beyond. <b>He had great ideas and feedback and educated me. I already hired him again! Thanks Lee :)</b></>}
              />

              <ReviewItems
                image="/images/Brighter-Dyes.webp"
                imgalt="Brighter-Dyes"
                title="Website Build for Australian E-comm Brand"
                company="Brighter Dyes"
                desc={<><b>Go ahead and stop your search now and hire Lee! I truly do not have the adequate words to describe how thankful I am for the amazing work Lee and his team at Power Funnels did for my website. Lee went above and beyond to make my website absolutely perfect.</b><br /><br /> He is kind and thoughtful. He is extremely detailed orientated. He is patient and answered every question I had quickly and kindly. He is extremely knowledgeable on website building, e-commerce and marketing. He is professional in every way! He came up with ideas to help my website that I did not even think about!<br /><br /> I will continue to work with Lee for many more projects in the future. <b>I am so excited to see how my business grows from all of the hard work Lee and his team put into my website. Thank you for everything, Lee!</b></>}
              />
            </div>
            <div className="col-md-6">
              <ReviewItems
                image="/images/Archos Engineering Consultants.webp"
                imgalt="Archos Engineering Consultants"
                title="Website Redesign & SEO for Electrical Engineering Firm"
                company="Archos Engineering Consultants"
                desc={<><b>We had the pleasure of working with Lee and his team to build out our entire marketing strategy, starting with a refresh of our website.</b><br /><br />

                  Upon formal engagement, we were sent a questionnaire which helped us define the scope of work, as well as gain clarity on what we really needed. The questionnaire was simple, clear and straight to the point.<br /><br />

                  Our project was broken out into various milestones which helped us organize our thoughts and strategy. For organization, Lee had us use a project management software called "Basecamp" which was incredibly easy to use. This platform allowed us to keep track of overall progress, to-do's and action items.<br /><br /><b>

                    Lee and his team really standout in customer service and the organization of information. His team consistently provided us with updates and were great on providing recommendations through their solutions oriented approach.</b><br /><br />

                  The final version of the website that Lee and his team designed for my firm was absolutely amazing. I was nervous about hiring another web agency to redesign our website due to the previous negative experiences that I had with other agencies, however was I ever wrong with Power Funnels! The website they designed for my firm has immense amount of attention to detail, so much substance and value, and is just an overall BEAST of a website! I cannot wait to unleash it fully in January!<b><br /><br />

                    We've already hired Lee and his team for their digital marketing services as they genuinely are EXPERTS, and make an effort to overdeliver on value and are truly passionate about what they do. Thanks,</b></>}
              />

              <ReviewItems
                image="/images/Good-Spirited-Styling.webp"
                imgalt="Good Spirited Styling"
                title="Website Build & SEO for U.S. E-Comm Brand"
                company="Good Spirited Styling"
                desc={<><b>A MUST HIRE - First off let me start off by saying Lee and his team COMPLETELY saved this project, these guys are absolute geniuses, it was a very limited timeframe also.</b><br /><br />

                  Given the outline of the project and deadline, Lee and his team executed this project beyond my imagination, they were honest, kind, patient & professional with me. I'm so glad I was able to hire these guys, and I can SAFELY say I will DEFINITELY be re-hiring Lee and his team again in the near future.

                  <br /><br /><b>I HIGHLY RECOMMEND Lee and his team, this is top-tier work! You're DEFINITELY in great hands with Lee!!</b></>}
              />
            </div>
          </div>
        </div></section>

    </div>
  )
}

export default Reviews
