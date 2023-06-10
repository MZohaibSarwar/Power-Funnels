import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'

function Navbar() {

  let location = useLocation();
  useEffect(()=>{
  },[location]);

  const refClose = useRef(null);
  const ref = useRef(null);
     const clickRefClose = () => {
      refClose.current.click();
    };
    const clickRef = () => {
      ref.current.click();
    };
  return (
    <>
      <section className='topbar bg-dark text-light' >
        <div className="container d-flex">
          <div className="me-auto p-2"><i className="fa-solid fa-power-off me-1"></i> Building & Scaling Online Businesses Globally Since 2013</div>
          <div className="p-2"><Link className='linkitem' to='https://power-funnels.agencyanalytics.app/' target="_blank"><i className="fa-solid fa-right-to-bracket me-1"></i> CLIENT LOGIN</Link></div>
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
                  <Link className={`nav-link ${location.pathname ==="/"? "active" : " "}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <Link ref={refClose} className={`nav-link dropdown-toggle ${location.pathname ==="/about-us"? "active" : " "}`} to="/about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link onClick={clickRefClose} className={`dropdown-item ${location.pathname ==="/about-us"? "active" : " "}`} to="/about-us">About Us</Link></li>
                    <li><Link onClick={clickRefClose} className={`dropdown-item ${location.pathname ==="/join"? "active" : " "}`} to="/join">Join Our Team</Link></li>
                    <li><Link onClick={clickRefClose} className={`dropdown-item ${location.pathname ==="/refer"? "active" : " "}`} to="/refer">Referral Program</Link></li>
                    <li><Link onClick={clickRefClose} className={`dropdown-item ${location.pathname ==="/faq"? "active" : " "}`} to="/faq">FAQs</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <Link ref={ref} className={`nav-link dropdown-toggle ${location.pathname ==="/services"? "active" : " "}`} to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/services"? "active" : " "}`} to="/services">Services</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/sales-funnels"? "active" : " "}`} to="/sales-funnels">Sales Funnels</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/seo"? "active" : " "}`} to="/seo">SEO</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/social-media-marketing"? "active" : " "}`} to="/social-media-marketing">Social Media Marketing</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/web-development"? "active" : " "}`} to="/web-development">Web Development</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/ppc-advertising"? "active" : " "}`} to="/ppc-advertising">PPC Advertising</Link></li>
                    <li><Link onClick={clickRef} className={`dropdown-item ${location.pathname ==="/cannabis-marketing"? "active" : " "}`} to="/cannabis-marketing">Cannabis Marketing</Link></li>
                    <li><Link onClick={clickRef} target="_blank" className={`dropdown-item ${location.pathname ==="/https://mortgagebrokers.power-funnels.com/"? "active" : " "}`} to="https://mortgagebrokers.power-funnels.com/">Mortgage Brokers</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-4 dropdown">
                  <Link className="nav-link dropdown-toggle" target="_blank" to="https://results.power-funnels.com/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Results
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link target="_blank" className="dropdown-item" to="https://results.power-funnels.com/">Home</Link></li>
                    <li><Link target="_blank" className="dropdown-item" to="https://results.power-funnels.com/website-builds/">Website Builds</Link></li>
                    <li><Link target="_blank" className="dropdown-item" to="https://results.power-funnels.com/website-rebuilds/">Website Redesign</Link></li>
                    <li><Link target="_blank" className="dropdown-item" to="https://results.power-funnels.com/landing-pages/">Landing Pages</Link></li>
                    <li><Link target="_blank" className="dropdown-item" to="https://results.power-funnels.com/case-studies/">Case Studies</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-4">
                  <Link className={`nav-link ${location.pathname ==="/blog"? "active" : " "}`} to="/blog">Blog</Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className={`nav-link ${location.pathname ==="/reviews"? "active" : " "}`} to="/reviews">Reviews</Link>
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

