import React from 'react'
import './aboutprofile.scss'

function AboutProfile() {
    return (
        <section className='aboutprofile'>
            <div className='container'>
                <h2 className='aboutprofile-title'>A full-service agency that builds online empires.</h2>
                <p className='aboutprofile-desc'>From strategic sales funnels, PPC, SEO, to email marketing and website development, <br/>Power Funnels is your reliable marketing partner, powered up!</p>
                <div className="row">
                    <div className="col-sm-4">
                <div className="card text-center " >
                    <div className="card-body">
                        <h5 className="card-title">55+</h5>
                        <h4 className="card-text">BUSINESSES LAUNCHED SUCCESSFULLY</h4>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card text-center " >
                    <div className="card-body">
                        <h5 className="card-title">5+</h5>
                        <h4 className="card-text">AVG. RETURN ON AD SPEND</h4>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card text-center ">
                    <div className="card-body">
                        <h5 className="card-title">3+</h5>
                        <h4 className="card-text">NEW YORK TIMES BEST SELLERS</h4>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card text-center ">
                    <div className="card-body">
                        <h5 className="card-title">4+</h5>
                        <h4 className="card-text">8 & 9-FIGURE CLIENTS WITH POWER FUNNELS</h4>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card text-center ">
                    <div className="card-body">
                        <h5 className="card-title">73+</h5>
                        <h4 className="card-text">5/5 CLIENT REVIEWS</h4>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card text-center ">
                    <div className="card-body">
                        <h5 className="card-title">$31M</h5>
                        <h4 className="card-text">TOTAL AD REVENUE</h4>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProfile
