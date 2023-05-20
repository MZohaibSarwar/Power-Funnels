import React from 'react'
import './imageleft.scss'

function ImageLeft(props) {
    return (
        <section className='imageleft' style={props.style}>
            <div className="container">
                <div className="row imageleft-row">
                    <div className="col-md-6">
                        <img className='left-image' src={props.image} alt="modern-marketing-professionals" />
                    </div>
                    <div className="col-md-6 right-text">
                        <h2 className='right-text-heading'>{props.title}</h2>
                        <p className='right-text-desc'>{props.description}</p>
                        <ul className='checked-icon'>
                            <li>{props.list1}</li>
                            <li>{props.list2}</li>
                            <li>{props.list3}</li>
                            <li> {props.list4}</li>
                            <li> {props.list5}</li>
                            <li>{props.list6}</li>
                            <li> {props.list7}</li>
                            <li> {props.list8}</li>

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ImageLeft
