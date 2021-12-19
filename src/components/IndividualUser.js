import React from "react";
import "./IndividualUser.css";

function IndividualUser(props) {
  return (
    <div className="main-list-item">
      <label>
        {props.userName} ({props.userAge} Years Old)
      </label>
    </div>
  );
}

export default IndividualUser;
