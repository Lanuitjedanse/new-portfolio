import "./Arrow.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Arrow({ id, direction }) {
  const handlePrev = () => {
    console.log("previous item");
    return (id -= 1);
  };

  const handleNext = () => {
    console.log("previous item");
    return (id += 1);
  };

  return (
    <>
      {direction === "left" && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow-left fa-lg"
          onClick={() => handlePrev()}
        />
      )}
      {direction === "right" && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow-right fa-lg"
          onClick={() => handleNext()}
        />
      )}
    </>
  );
}

export default Arrow;
