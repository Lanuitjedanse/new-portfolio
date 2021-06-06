import React from "react";
import "./Caroussel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Caroussel({ name, description, img }) {
  return (
    <Carousel width="40vw" autoPlay="true">
      <div className="caroussel">
        <img src={img} alt={name} />
        <p className="legend">{description}</p>
      </div>
      <div>
        <img src={img} alt={name} />
        <p className="legend">{description}</p>
      </div>
      <div>
        <img src={img} alt={name} />
        <p className="legend">{description}</p>
      </div>
    </Carousel>
  );
}

// ReactDOM.render(<Caroussel />, document.querySelector(".caroussel"));
