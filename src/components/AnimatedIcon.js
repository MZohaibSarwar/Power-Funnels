import React from 'react'
import './animatedicon.scss'

function AnimatedIcon(props) {
    return (
        <section id='animated-icon' className='imageright' style={props.style}>
            <div className="container">
                <div className="row imageright-row">
                    <div className="col-md-6 left-text">
                        <h2 className='left-text-heading'>{props.title}</h2>
                        <p className='left-text-desc'>{props.description}</p>
                        <ul className='checked-icon'>
                            <li> {props.list1}</li>
                            <li> {props.list2}</li>
                            <li> {props.list3}</li>
                            <li> {props.list4}</li>
                            <li> {props.list5}</li>
                        </ul>
                    </div>
                    <div className="col-md-6 animated-image">
                        <div className="row pf-anim-tree-main-row">
                            <div className="col-sm-6 pf-anim-tree-img-parent">
                                <img className="pf-animated-tree-logo" src="/images/pf-glow-anim-1080p.webp" alt="Power Funnels" />
                            </div>
                            <div className="col-sm-6 pf-anim-tree-leaf-parent">
                                <div className="row pf-anim-tree-leaf">
                                    <div className="col-sm-3">
                                        <img className="animated-leaf-icon-1" src="/images/icon-client-revenue.webp" alt="Power Funnels" />
                                    </div>
                                    <div className="col-sm-9 branding-col">
                                        <h6 className="pf-anim-tree-sub-heading-before">WE’VE GENERATED OVER</h6>
                                        <h2>3.2 Million</h2>
                                        <h6 className="pf-anim-tree-sub-heading-after">IN CLIENT REVENUE</h6>
                                    </div>
                                </div>
                                <div className="row pf-anim-tree-leaf">
                                    <div className="col-sm-3">
                                        <img className="animated-leaf-icon-2" src="/images/icon-clients-lead.webp" alt="Power Funnels" />
                                    </div>
                                    <div className="col-sm-9 branding-col">
                                        <h6 className="pf-anim-tree-sub-heading-before">WE’VE GENERATED</h6>
                                        <h2>100,000</h2>
                                        <h6 className="pf-anim-tree-sub-heading-after">LEADS FOR OUR CLIENTS</h6>
                                    </div>
                                </div>
                                <div className="row pf-anim-tree-leaf">
                                    <div className="col-sm-3">
                                        <img className="animated-leaf-icon-3" src="/images/icon-paint.svg" alt="Power Funnels" />
                                    </div>
                                    <div className="col-sm-9 branding-col">
                                        <h6 className="pf-anim-tree-sub-heading-before">WE’VE GENERATED OVER</h6>
                                        <h2>50</h2>
                                        <h6 className="pf-anim-tree-sub-heading-after">BUSINESS WEBSITES</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimatedIcon
