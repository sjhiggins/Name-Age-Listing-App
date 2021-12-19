import React from "react";
import "./InvalidInputOverlay.css";
function InvalidInputOverlay(props) {
  function okayButtonClick1() {
    props.grabButtonClick1(false);
  }

  return (
    <div className="overlay">
      <div className="overlay-warning-container">
        <div className="overlay-warning-title">
          <label>Invalid Input!</label>
        </div>
        <div className="overlay-warning-description">
          <p>Please enter a valid name and age (non-empty values).</p>
        </div>
        <button onClick={okayButtonClick1} className="overlay-warning-button">
          Okay
        </button>
      </div>
    </div>
  );
}

export default InvalidInputOverlay;
