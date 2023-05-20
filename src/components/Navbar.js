import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {

  return (
    <>
      <section className='topbar bg-dark text-light' >
        <div className="container d-flex">
          <div className="me-auto p-2"><i className="fa-solid fa-power-off me-1"></i> Building & Scaling Online Businesses Globally Since 2013</div>
          <div className="p-2"><a className='linkitem' href='https://power-funnels.agencyanalytics.app/'><i className="fa-solid fa-right-to-bracket me-1"></i> CLIENT LOGIN</a></div>
          <div className="p-2"><Link className='linkitem' to="get-started"><i className="fa-solid fa-phone me-1"></i> SCHEDULE A CALL</Link></div>
        </div>
      </section>
<section className='header-fixed'>
      <div className='container header-container'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img style={{ width: "215px" }} src='/images/pf-logo.svg' alt='image1' /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ms-4">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <Link className="nav-link dropdown-toggle" to="/about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                    <li><Link className="dropdown-item" to="/join">Join Our Team</Link></li>
                    <li><Link className="dropdown-item" to="/refer">Referral Program</Link></li>
                    <li><Link className="dropdown-item" to="/faq">FAQs</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <Link className="nav-link dropdown-toggle" to="/Services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/services">Services</Link></li>
                    <li><Link className="dropdown-item" to="/sales-funnels">Sales Funnels</Link></li>
                    <li><Link className="dropdown-item" to="/seo">SEO</Link></li>
                    <li><Link className="dropdown-item" to="/social-media-marketing">Social Media Marketing</Link></li>
                    <li><Link className="dropdown-item" to="/web-development">Web Development</Link></li>
                    <li><Link className="dropdown-item" to="/ppc-advertising">PPC Advertising</Link></li>
                    <li><Link className="dropdown-item" to="/cannabis-marketing">Cannabis Marketing</Link></li>
                    <li><Link className="dropdown-item" to="https://mortgagebrokers.power-funnels.com/">Mortgage Brokers</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <a className="nav-link dropdown-toggle" href="https://results.power-funnels.com/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Results
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://results.power-funnels.com/">Home</a></li>
                    <li><a className="dropdown-item" href="https://results.power-funnels.com/website-builds/">Website Builds</a></li>
                    <li><a className="dropdown-item" href="https://results.power-funnels.com/website-rebuilds/">Website Redesign</a></li>
                    <li><a className="dropdown-item" href="https://results.power-funnels.com/landing-pages/">Landing Pages</a></li>
                    <li><a className="dropdown-item" href="https://results.power-funnels.com/case-studies/">Case Studies</a></li>
                  </ul>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/reviews">Reviews</Link>
                </li>
              </ul>

              <div className="d-flex">
                <Link className="btn btn-danger btn-lg get-started-btn" to="/get-started">Get Started <i className="fa-solid fa-paper-plane"></i> </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </section>
    </>
  )
}

export default Navbar

