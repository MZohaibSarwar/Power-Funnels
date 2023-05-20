import React from "react";
import PageBanner from "../components/PageBanner";
import ImageRight from "../components/ImageRight";
import ReviewItems from "../components/ReviewItems";
import FaqSection from "../components/FaqSection";

function Referral() {
  document.title = "Referral Program - Power Funnels";
  return (
    <div>
      {/* Banner Section */}
      <PageBanner
        image="/images/Banner-CaseStudy.webp"
        title={<> High Paying Referral Program</>}
        desc={<>No matter what, you will earn.</>}
      />

      {/* refferal program section */}
      <ImageRight
        title="What is Power Funnel’s Referral Program?"
        description={
          <>
            How our referral program works is that when you refer a family
            member, friend and or business connection to Power Funnels, and if
            your referral turns into a paying customer, you will receive a 10%
            commission every month, until if and when the client stops working
            with Power Funnels. (Don’t worry, our clients love us and usually
            stay with us for years!)
            <br />
            <br />
            For example: If you refer a new client who signs up for our $3000
            per month SEO package, then you will earn $300 every month. The more
            clients (or the bigger those clients are) the more you will earn. It
            really is that simple!
          </>
        }
        image="/images/referral-1-768x768.jpg"
      />

      {/* perks and benifits section*/}
      <section
        className="power-process"
        style={{ padding: "70px 0", backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="heading text-center pb-4">
            <h2>Perks & Benefits</h2>
            <p>
              Refer a interested business owner to Power Funnels, and receive a
              MONTHLY 10% <br />
              commission — if your referral turns into a paying customer. We
              will pay you monthly <br />
              until the client stops working with Power Funnels. Yes, you heard
              that right!
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ReviewItems
                image="/images/remotel-r.svg"
                imgalt="remotel-r"
                title="Client Lifetime 10% Commission (Paid Monthly)"
                desc={
                  <>
                    Our referral sources receive 10% commission for their
                    referral – of course if the referral turns into a paying
                    customer. There is no project size and project cost
                    limitation allocated to it. That means, every small or big
                    project referred by you, will help you earn a 10% commission
                    from it – until if and when the client ends their
                    arrangement with Power Funnels.
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/bonus-r.svg"
                imgalt="bonus-r"
                title="Expert Support & Resources"
                desc={
                  <>
                    For any kind of support, you or your referrals can reach out
                    to us at any time. Our experts will equip you with whatever
                    information you need to educate an interested business
                    owner. Including: A digital brochure (Service info,
                    onboarding process, payment procedures), client case studies
                    and proof of results. Whatever you need from us, you let us
                    know.
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/sickdays-r.svg"
                imgalt="sickdays-r"
                title="We’re An Easy Sell"
                desc={
                  <>
                    When referring us to a family member, friend or business
                    connection, just remember that referring Power Funnels is an
                    easy sell. We have over 300+ expert results that we can
                    share with you or your referral. We have over 70+ reviews
                    from happy clients, and we have won awards 3 times for our
                    New York Times Best Seller campaigns.
                  </>
                }
              />
            </div>
            <div className="col-md-6 ">
              <ReviewItems
                image="/images/responsive.svg"
                imgalt="responsive"
                title="Easy Payout Options"
                desc={
                  <>
                    We offer flexible payment options. We pay by E-Transfer,
                    PayPal or Stripe. You’ll receive payment the 1st of the
                    following month. <br />
                    <br /> <br /> <br />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* faq section*/}
      <section className="faq-section">
        <div className="container">
          <div className="text-center">
            <h2 className="faq-heading">FAQs</h2>
            <p> </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FaqSection
                target="#collapseOne"
                aria="true"
                control="collapseOne"
                faqtitle={
                  <>
                    I have a friend who is interested in your services! She
                    needs a new website for her business. Where should I send
                    her, and who should I introduce her to?
                  </>
                }
                id="collapseOne"
                clsname="accordion-collapse collapse show"
                faqdesc={
                  <>
                    That’s great to hear! To begin the process, please fill in
                    the form above and one of our Business Development
                    Specialists will contact her to start the conversation. We
                    will make sure to send you an email update about our
                    progress, every step of the way.
                  </>
                }
              />
              <FaqSection
                target="#collapseTwo"
                aria="false"
                control="collapseTwo"
                faqtitle={<>Who can I refer?</>}
                id="collapseTwo"
                clsname="accordion-collapse collapse"
                faqdesc={<>Any person or business you wish. If you know anyone that could
                  use a website rebuild, more leads for their business, and or
                  more sales for their online product store, then you can earn
                  by referring them and helping them out. <br /><br />Think about potential
                  contacts you know, such as: <br /><br />
                  <ul>
                    <li>Your employer </li>
                    <li>Friends </li>
                    <li>Family members who own their own businesses</li>
                    <li>Business contacts and associates</li>
                    <li>People you meet at networking events</li>
                  </ul></>}
              />

              <FaqSection
                target="#collapseThree"
                aria="false"
                control="collapseThree"
                faqtitle={
                  <>
                    How long do I get paid for each client?
                  </>
                }
                id="collapseThree"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    For as long as that client continues to work with Power Funnels! Some of our clients have worked with us for 7+ years.
                  </>
                }
              />
              <FaqSection
                target="#collapseFour"
                aria="false"
                control="collapseFour"
                faqtitle={
                  <>
                    I can refer a lot of new clients! Is there anything special you can offer me?
                  </>
                }
                id="collapseFour"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    That’s fantastic! Depending on how many referrals that turn into paying clients, we can most certainly discuss offering you a higher commission structure or a deal on our marketing services for your business. Email Lee for more information: Lee@power-funnels.com
                  </>
                }
              />
              <FaqSection
                target="#collapseFive"
                aria="false"
                control="collapseFive"
                faqtitle={
                  <>
                    What links from your website should I send to an interested referral?
                  </>
                }
                id="collapseFive"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    We actually recommend that you fill in the form at the top of this page. This will ensure a smooth and effective process. But, you can most certainly send the following links if you would like:<br /><br />

                    Results: https://www.power-funnels.com/results/ <br />

                    Reviews: https://www.power-funnels.com/reviews/ <br />

                    About: https://www.power-funnels.com/about-us/  <br />

                    Services: https://www.power-funnels.com/services/ <br />
                  </>
                }
              />


            </div>

            <div className="col-md-6">
              <FaqSection
                target="#collapseSix"
                aria="false"
                control="collapseSix"
                faqtitle={
                  <>
                    What is the monthly minimum budget to work with Power Funnels?
                  </>
                }
                id="collapseSix"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    We will work with clients who have at least $1000 to invest into our services. If you find a referral who can spend just under $1000, we encourage you to still fill in the form above and we can see if we can work together.
                  </>
                }
              />
              <FaqSection
                target="#collapseSeven"
                aria="false"
                control="collapseSeven"
                faqtitle={<>When do I get paid?</>}
                id="collapseSeven"
                clsname="accordion-collapse collapse"
                faqdesc={<>The 1st of the following month. For example, if you refer a client who signs up on January 1st, you will get paid 10% of their January invoice at the beginning of February.</>}
              />

              <FaqSection
                target="#collapseEight"
                aria="false"
                control="collapseEight"
                faqtitle={
                  <>
                    Can I earn commissions for referring leads?
                  </>
                }
                id="collapseEight"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    At this stage, no. Commissions are earned after your referred leads sign up and pay for any form of our marketing services – whether one-off or recurring.
                  </>
                }
              />
              <FaqSection
                target="#collapseNine"
                aria="false"
                control="collapseNine"
                faqtitle={
                  <>

                    Why else should I refer clients to Power Funnels?
                  </>
                }
                id="collapseNine"
                clsname="accordion-collapse collapse"
                faqdesc={
                  <>
                    You can rest assured that every client you refer is going to be looked after professionally, and receive fantastic digital marketing services that will bring them in new business and help them to achieve their goals. <br /><br />

                    On top of the 10% commissions offered as standard, there are also special prizes and other bonuses for top referrers.
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

export default Referral;
