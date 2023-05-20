import React from 'react'
import PageBanner from '../components/PageBanner'
import FaqSection from '../components/FaqSection'

function Faq() {
    document.title = "FAQs - Power Funnels";
    return (
        <div>
            {/* Banner Section */}
            <PageBanner
                image="/images/Frequently-Asked-1.webp"
                title={<> Frequently Asked Questions</>}
                desc={<>Power Funnels' most Frequently Asked Questions for prospective leads and clients.</>}
            />

            {/* Our Process Section */}
            <section className="faq-section" style={{ padding: "70px 0 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="faq-heading">OUR PROCESS</h2>
                    </div>
                    <div>
                        <FaqSection
                            target="#collapseOne"
                            aria="true"
                            control="collapseOne"
                            faqtitle={
                                <>
                                    Where and how do you source your agency’s staff?
                                </>
                            }
                            id="collapseOne"
                            clsname="accordion-collapse collapse show"
                            faqdesc={
                                <>
                                    We hire only specialists from North America or those who have applicable and proven 5+ years of experience working in an agency format with clients. <br />

                                    We pride ourselves on bringing on only the best specialists for our clients projects!
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseTwo"
                            aria="false"
                            control="collapseTwo"
                            faqtitle={<>Why do you work in a minimum 3 month terms?</>}
                            id="collapseTwo"
                            clsname="accordion-collapse collapse"
                            faqdesc={<>Great question! We have a proven process for building and scaling online businesses successfully. Typically this takes a minimum of 3 months and a maximum of 14 months depending on the business, it’s industry and vertical. <br /><br />

                                Month #1 consists of strategy, onboarding, development, launch, and testing.
                                Months #2 and #3 consist of optimizing all efforts and capitalizing on opportunities.</>}
                        />

                        <FaqSection
                            target="#collapseThree"
                            aria="false"
                            control="collapseThree"
                            faqtitle={
                                <>
                                    I would like to hire Power Funnels as my marketing partner. What are next steps?
                                </>
                            }
                            id="collapseThree"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    That’s great to hear! Please email the Founder (Lee) your project details: Lee@power-funnels.com
                                    As soon as you sign the Service Agreement and pay your first months instalment, you will receive a “Get Started” onboarding package. Your Account Manager will then email you to schedule your kick-off call with
                                    our team!
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseFour"
                            aria="false"
                            control="collapseFour"
                            faqtitle={
                                <>
                                    I completed my 3 month term with Power Funnels. What now?
                                </>
                            }
                            id="collapseFour"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Congratulations! After you have completed the 3 month term, your Account Manager will send you a performance report and will schedule a 1 hour performance review with you and our Founder. <br /> <br />
                                    After the 1 hour performance review, we can discuss how to continue working together!
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseFive"
                            aria="false"
                            control="collapseFive"
                            faqtitle={
                                <>
                                    I want to refer a friends business to Power Funnels. Do I get a referral fee?
                                </>
                            }
                            id="collapseFive"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Yes, we reward those who bring us more business! <br /><br />

                                    For every referral that you introduce to us that converts into a paying client, you will receive up to 30% of the first month’s investment. <br /><br />

                                    To refer a business please introduce your interested party to the Founder (Lee) by sending him an email: Lee@power-funnels.com
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseSix"
                            aria="false"
                            control="collapseSix"
                            faqtitle={
                                <>
                                    I would like to add more marketing services to my business. Who do I contact and how does this process work?
                                </>
                            }
                            id="collapseSix"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Fantastic! The majority of our clients hire Power Funnels for 1 – 6 services. <br />
                                    To add another service to your business, contact the Founder (Lee) and be as detailed as possible in regards to what service you’re interested in, and what you would like to achieve with the service. <br /><br />

                                    Email: Lee@power-funnels.com <br /><br />

                                    Once the Founder receives your email he will respond to it with a meeting link. From there you two can discuss the addition of the service(s) and clarify the new service agreement, investment level and next steps.
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
            {/* OUR SERVICES Section */}
            <section className="faq-section" style={{ padding: "70px 0 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="faq-heading">OUR SERVICES</h2>
                    </div>
                    <div>
                        <FaqSection
                            target="#collapseSeven"
                            aria="false"
                            control="collapseSeven"
                            faqtitle={
                                <>
                                    What services do you offer other than PPC?
                                </>
                            }
                            id="collapseSeven"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    We offer a total of 6 revenue-generating services: SEO (search engine optimization), Email Marketing, Sales Funnel Strategy / CRO, Cannabis Marketing, Web Development and of course PPC / Paid Social. If you have more questions feel free email our Founder (Lee) by emailing him: Lee@power-funnels.com
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseEight"
                            aria="false"
                            control="collapseEight"
                            faqtitle={<>Which service of Power Funnels is going to generate quick sales for my business?</>}
                            id="collapseEight"
                            clsname="accordion-collapse collapse"
                            faqdesc={<>Our “Sales Generation” advertising plan is the best way to generate tracked sales as soon as 7 business days. Of course, sometimes sales don’t happen straight away. Our goal is to begin generating sales as soon as Month #1 completes, but especially in Month #2 and onwards.</>}
                        />

                        <FaqSection
                            target="#collapseNine"
                            aria="false"
                            control="collapseNine"
                            faqtitle={
                                <>
                                    My business needs leads! How can you help?
                                </>
                            }
                            id="collapseNine"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Well, you have come to the right place! We can get you started on our “Lead generation” advertising plan which will generate you leads as soon as 7 business days. Do note, sometimes leads don’t come in straight away! <br /><br />

                                    Our goal is to begin generating leads for your business as soon as Month #1 completes, but especially in Month #2 and onwards.
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseTen"
                            aria="false"
                            control="collapseTen"
                            faqtitle={
                                <>
                                    I started an e-commerce store but I need more sales. How can you help?
                                </>
                            }
                            id="collapseTen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    First of all; congratulations! Starting any business is scary and is a lot of work. When it comes to generating more sales for your new e-comm business: Of course we can help! We offer 6 revenue generating plans that tailor to different objectives and budgets. Email our Founder (Lee) and explain what your business is, your goals and your desired services: Lee@power-funnels.com
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseEleven"
                            aria="false"
                            control="collapseEleven"
                            faqtitle={
                                <>
                                    How do you know what service is going to help my business the most?
                                </>
                            }
                            id="collapseEleven"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    As marketing experts we are on top of industry trends, technology and strategies. Our team accounts for a combined 150+ years of experience having worked in the most competitive industries and verticals. By having this experience and knowledge, we will match you a service that will accomplish your goals.
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseTwelve"
                            aria="false"
                            control="collapseTwelve"
                            faqtitle={
                                <>
                                    I have questions about your services. Can we schedule a call?
                                </>
                            }
                            id="collapseTwelve"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Of course! <br />
                                    Just click this link to schedule a call with the founder. <br />
                                    Prior to the call we encourage you to review our services on our website by clicking here.
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
            {/* TECHNICAL Section */}
            <section className="faq-section" style={{ padding: "70px 0 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="faq-heading">TECHNICAL</h2>
                    </div>
                    <div>
                        <FaqSection
                            target="#collapseThirteen"
                            aria="false"
                            control="collapseThirteen"
                            faqtitle={
                                <>
                                    Your team references ROAS and CAC in emails. What do these mean?
                                </>
                            }
                            id="collapseThirteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Great question! These are metrics, and are used as a measuring stick for your campaigns success. ROAS measures the amount of revenue your business earns for each dollar it spends on advertising. CAC is the cost of winning a customer to purchase your product or service.
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseFourteen"
                            aria="false"
                            control="collapseFourteen"
                            faqtitle={<>Will my ads be on Facebook or Google?</>}
                            id="collapseFourteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={<>This entirely depends on the plan that you chose with Power Funnels. <br /><br />

                                Our first plan (Starter) will get your ads shown on Facebook and Instagram. <br /> <br />

                                If you choose our “Growth” advertising plan, your ads will be show on Facebook, Instagram and Google. <br /><br />

                                If you choose any plans above our “Growth” plan, then you will have your ads shown on Facebook, Instagram, Google, YouTube and TikTok.</>}
                        />

                        <FaqSection
                            target="#collapseFifteen"
                            aria="false"
                            control="collapseFifteen"
                            faqtitle={
                                <>
                                    Where are my ads going to be shown on Facebook or Instagram?
                                </>
                            }
                            id="collapseFifteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Since Facebook and Instagram are owned by the same company, they share a unified ad platform. Our marketing team will strategize on the best placements on both ad platforms to serve your ads whether they being served in “Stories” or the “Newsfeed” sections (as an example).
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
            {/* COMMUNICATION Section */}
            <section className="faq-section" style={{ padding: "70px 0 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="faq-heading">COMMUNICATION</h2>
                    </div>
                    <div>
                        <FaqSection
                            target="#collapseSixteen"
                            aria="false"
                            control="collapseSixteen"
                            faqtitle={
                                <>
                                    I have a question about my project. Who do I contact?
                                </>
                            }
                            id="collapseSixteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    If you ever have any questions, concerns or requests, your Account Manager will be your point-of-contact. <br />
                                    When you receive your “Get Started” onboarding package you will find out who your Account Manager is. (Go to slide #5). You will also see your Account Manager’s contact details as well as their preferred contact method.
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseSeventeen"
                            aria="false"
                            control="collapseSeventeen"
                            faqtitle={<>What is your turnaround time for meetings or requests?</>}
                            id="collapseSeventeen"
                            clsname="accordion-collapse collapse"
                            faqdesc={<>Send us an email with your request and we will strive to accommodate it! Do keep in mind that our turnaround time policy for requests (edits, meetings, additional requests) is 3 – 7 business days.</>}
                        />

                        <FaqSection
                            target="#collapseEighteen"
                            aria="false"
                            control="collapseEighteen"
                            faqtitle={
                                <>
                                    How frequently will your team be in touch with me over the 3 months?
                                </>
                            }
                            id="collapseEighteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Every week! Your Account Manager or Head of Client Relations will be sending you weekly email updates. If you have any questions, ideas, or just want to jump on a quick call, just send your Account Manager an email and we will strive to accommodate your request.
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
            {/* YOUR CAMPAIGN Section */}
            <section className="faq-section" style={{ padding: "70px 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="faq-heading">YOUR CAMPAIGN</h2>
                    </div>
                    <div>
                        <FaqSection
                            target="#collapseNinteen"
                            aria="false"
                            control="collapseNinteen"
                            faqtitle={
                                <>
                                    Do you launch my campaigns without my edits and or approval?
                                </>
                            }
                            id="collapseNinteen"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    No, we value your feedback and will not launch your campaigns until your final approval! Once our marketing team has built our your campaigns, your Account Manager will email you previews of our work prior to launch. We allow our clients 2 business days to review our work and include any requested revisions.
                                </>
                            }
                        />
                        <FaqSection
                            target="#collapseTwenty"
                            aria="false"
                            control="collapseTwenty"
                            faqtitle={<>Will I receive any reports or calls about my campaigns results?</>}
                            id="collapseTwenty"
                            clsname="accordion-collapse collapse"
                            faqdesc={<>Yes, you will receive weekly email updates about your project’s progress and results including a detailed 8 page performance report at the 30 day mark. From there we will schedule a call with you and our team to discuss the report, and to align for the next month.</>}
                        />

                        <FaqSection
                            target="#collapseTwentyone"
                            aria="false"
                            control="collapseTwentyone"
                            faqtitle={
                                <>
                                    When can I expect to see results for my campaign?
                                </>
                            }
                            id="collapseTwentyone"
                            clsname="accordion-collapse collapse"
                            faqdesc={
                                <>
                                    Our success comes from our clients success, so your business is in good hands! When it comes to tangible results, you can expect to see these in Month #2 and especially Month #3. Month #1 is about onboarding, development and testing.
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
