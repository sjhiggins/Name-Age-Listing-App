import React, { useState } from "react";
import "./MainForm.css";
function MainForm(props) {
  //Creating state variables for username and age
  const [userNameEntry, setUserNameEntry] = useState("");
  const [userAgeEntry, setUserAgeEntry] = useState("");
  const [isItInvalid, setIsItInvalid] = useState(false);
  // functions to put update state variables
  function userNameHandler(event) {
    setUserNameEntry(event.target.value);
  }
  function userAgeHandler(event) {
    setUserAgeEntry(event.target.value);
  }

  //Prevents page reload and clears form inputs: Sends up new data to app.js
  function submitHandler(event) {
    event.preventDefault();

    // if (userNameEntry.length && userAgeEntry.length > 0) {
    //   props.grabIsInvalidprop(false);
    //   setIsItInvalid(false);
    // } else {
    //   props.grabIsInvalidprop(true);
    //   setIsItInvalid(true);
    // }

    const newEntryObject = {
      userName: userNameEntry,
      userAge: userAgeEntry,
      key: Math.random().toString(),
    };

    if (userNameEntry.length && userAgeEntry.length > 0) {
      props.grabIsInvalidprop(false);
      setIsItInvalid(false);
      props.grabMainFormDataProp(newEntryObject);
    } else {
      props.grabIsInvalidprop(true);
      setIsItInvalid(true);
    }
    // props.grabMainFormDataProp(newEntryObject);

    setUserNameEntry("");
    setUserAgeEntry("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="main-form-margin">
        <div className="main-form">
          <div className="main-form-input-container">
            <label>Username</label>
            <input
              type="text"
              className="main-form-input"
              onChange={userNameHandler}
              value={userNameEntry}
            ></input>
          </div>

          <div className="main-form-input-container">
            <label>Age (Years)</label>
            <input
              type="number"
              min="0"
              max="130"
              step="1"
              className="main-form-input"
              onChange={userAgeHandler}
              value={userAgeEntry}
            ></input>
          </div>
          <div className="add-user-button-container">
            <button className="add-user-button">Add User</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MainForm;
