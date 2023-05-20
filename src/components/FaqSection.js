import React from "react";
import "./faqsection.scss";

function FaqSection(props) {
  return (
<div className="accordion mb-4" id="accordionPanelsStayOpenExample" >
    <div className="accordion-item" style={{backgroundColor: "#eeeeee"}}>
      <h2 className="accordion-header">
        <button style={{backgroundColor: "#eeeeee"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded={props.aria} aria-controls={props.control}>
          <strong>
            {props.faqtitle}
          </strong>
        </button>
      </h2>
      <div id={props.id} className={props.clsname} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {props.faqdesc}
        </div>
      </div>
    </div>
    </div>
  );
}

export default FaqSection;
