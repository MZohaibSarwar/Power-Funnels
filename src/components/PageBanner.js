import React from "react";
import './pagebanner.scss'

function PageBanner(props) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: `${props.padding}`
      }}
    >
      <div className="container text-light text-center page-banner-container"  >
        <h1 className="mb-4 page-banner-title" style={props.mystyle}>
        {props.title}
        </h1>
        <div className="mb-4 page-banner-desc">
        {props.desc}
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
