import React from "react";
import "./reviewitems.scss";

function ReviewItems(props) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex review-item-header">
            <div className="">
              <img
                className="review-item-img"
                src={props.image}
                alt={props.imgalt}
              />
            </div>
            <div className="review-item-info">
              <h3 className="review-item-title">{props.title}</h3>
              <p className="">{props.company}</p>
            </div>
          </div>
          <p className="review-item-desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ReviewItems;
