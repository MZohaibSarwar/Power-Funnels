import React from 'react'
import './imageright.scss'

function ImageRight(props) {
    return (
        <section className='imageright' style={props.style}>
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
                            <li>{props.list6}</li>
                            <li> {props.list7}</li>
                            <li> {props.list8}</li>

                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className='right-image' src={props.image} alt="modern-marketing-professionals" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageRight
