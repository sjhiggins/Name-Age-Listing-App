import React, { useState } from "react";
import MainForm from "./MainForm";
import "./ListOfUsers";
import ListOfUsers from "./ListOfUsers";
import InvalidInputOverlay from "./InvalidInputOverlay";

function App() {
  const [entryArray, setEntryArray] = useState([]);
  const [isEntryInvalid, setIsEntryInvalid] = useState(false);

  function grabMainFormData(newData) {
    setEntryArray((previousData) => {
      return [newData, ...previousData];
    });
  }

  function grabIsInvalid(IsInValid) {
    setIsEntryInvalid(IsInValid);
  }

  function buttonClick1Handler(isButton1Clicked) {
    setIsEntryInvalid(isButton1Clicked);
  }

  console.log(isEntryInvalid);
  return (
    <div>
      <MainForm
        grabMainFormDataProp={grabMainFormData}
        grabIsInvalidprop={grabIsInvalid}
      />
      <ListOfUsers
        UserArray={entryArray}
        isUserListEmpty={entryArray.length === 0 ? true : false}
      />
      {isEntryInvalid ? (
        <InvalidInputOverlay grabButtonClick1={buttonClick1Handler} />
      ) : null}
    </div>
  );
}

export default App;

// function grabMainFormData(newData) {
//   setEntryArray((previousData) => {
//     return [newData, ...previousData];
//   });
// }
