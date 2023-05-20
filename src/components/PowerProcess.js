import React from 'react'
import './powerprocess.scss'

function PowerProcess(props) {
  return (
    <section className='power-process' style={props.style}>
      <div className="container">
        <div className='heading text-center'>
          <h2>{props.heading}</h2>
          <p>{props.desc}</p>
        </div>
        <div className="row text-center">
          <div className="col-md-6 power-process-col" style={props.mystyledisplay1}>
            <div className="card d-block power-process-card">
              <img src={props.imgicon1} className="card-img-top power-process-img" alt="learn" />
              <div className="card-body">
                <h2 className="card-title">{props.icontitle1}</h2>
                <p className="card-text">{props.icondesc1}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 power-process-col" style={props.mystyledisplay2}>
            <div className="card d-block power-process-card">
              <img src={props.imgicon2} className="card-img-top power-process-img" alt="strategize" />
              <div className="card-body">
                <h2 className="card-title">{props.icontitle2}</h2>
                <p className="card-text">{props.icondesc2}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 power-process-col" style={props.mystyledisplay3}>
            <div className="card d-block power-process-card">
              <img src={props.imgicon3} className="card-img-top power-process-img" alt="execute" />
              <div className="card-body">
                <h2 className="card-title">{props.icontitle3}</h2>
                <p className="card-text">{props.icondesc3}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 power-process-col" style={props.mystyledisplay4}>
            <div className="card d-block power-process-card" >
              <img src={props.imgicon4} className="card-img-top power-process-img" alt="optimize" />
              <div className="card-body">
                <h2 className="card-title">{props.icontitle4}</h2>
                <p className="card-text">{props.icondesc4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PowerProcess
