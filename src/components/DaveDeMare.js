import React from 'react'
import './davedemare.scss'

function DaveDeMare(props) {
  return (
    <section className='davedemare text-light'>
        <div className={props.clsname}>
            <div className="row davedemare-row">
                <div className="col-md-6 davedemare-col-1">
                    <img className='davedemare-image' src={props.image} alt="Dave De Mare" style={props.mystyle} />
                </div>
                <div className="col-md-6 davedemare-col-2">
                    <h2 className='davedemare-title'>{props.title}</h2>
                    <p className='davedemare-desc'>{props.desc}</p>
                    <p className='davedemare-name'>{props.name}</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default DaveDeMare
