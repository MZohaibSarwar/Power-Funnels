import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"

function Footer() {
  return (
    <section className='bg-dark text-light footer-section' >
      <div className="container">
        <div className="row py-5">

          <div className="col-md-3">
            <Link className="" to="/"><img style={{ width: "240px" }} src='/images/white-logo-Custom-300x56.webp' alt='image1' /> </Link>
            <p className='mt-3' >Power Funnels is a battle tested and proven digital marketing agency that powers your success no matter how competitive your industry or vertical is - one strategy, and award at a time.</p>
            <p className='linktitle mt-5'>Contact</p>
            <p><a className='linkitem' href="mailto:Hello@power-funnels.com"><i className="fa-solid fa-envelope"></i> Hello@power-funnels.com</a></p>
          </div>

          <div className="col-md-3">
            <p className='linktitle'>Company</p>
            <p><Link className='linkitem' to="/">Home</Link></p>
            <p><Link className='linkitem' to="/about-us">About</Link></p>
            <p><Link className='linkitem' to="https://results.power-funnels.com/">Results</Link></p>
            <p><Link className='linkitem' to="/get-started">Get Started</Link></p>
            <p><Link className='linkitem' to="/reviews">Reviews</Link></p>
            <p><Link className='linkitem' to="/join">Join Our Team</Link></p>
            <p><Link className='linkitem' to="/refer">Referral Program</Link></p>
          </div>

          <div className="col-md-3">
            <p className='linktitle'>Our Services</p>
            <p><Link className='linkitem' to="/sales-funnels">Sales Funnels</Link></p>
            <p><Link className='linkitem' to="/social-media-marketing">Social Media Marketing</Link></p>
            <p><Link className='linkitem' to="/cannabis-marketing">Cannabis Marketing</Link></p>
            <p><Link className='linkitem' to="/seo-for-lawyers">SEO for Lawyers</Link></p>
            <p><Link className='linkitem' to="/healthcare-seo">HealthCare SEO</Link></p>
            <p><Link className='linkitem' to="/dispensary-marketing">Dispensary Marketing</Link></p>
            <p><Link className='linkitem' to="https://mortgagebrokers.power-funnels.com/">Mortgage Brokers</Link></p>
          </div>

          <div className="col-md-3">
            <p className='linktitle'>Our Services</p>
            <p><Link className='linkitem' to="/ppc-advertising">PPC Advertising</Link></p>
            <p><Link className='linkitem' to="/seo">SEO</Link></p>
            <p><Link className='linkitem' to="/web-development">Web Development</Link></p>
            <p><Link className='linkitem' to="/cbd-marketing">CBD Marketing</Link></p>
            <p><Link className='linkitem' to="/healthcare-web-development">Healthcare Web Development</Link></p>
            <p><Link className='linkitem' to="/marijuana-marketing-and-advertising">Marijuana Marketing and Advertising</Link></p>
            <p><Link className='linkitem' to="/monthly-website-maintenance">Monthly Website Maintenance</Link></p>
          </div>

        </div>
        <hr />
        <div className="row py-3">

          <div className="col-md-6">

            <p><Link style={{ color: "white" }} to="/terms-&-conditions">Terms & Conditions</Link></p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">Designed By Power Funnels</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
