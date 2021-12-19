import React from "react";
import IndividualUser from "./IndividualUser";
import "./ListOfUsers.css";

function ListOfUsers(props) {
  function createUser(createUserCallback) {
    return (
      <IndividualUser
        userName={createUserCallback.userName}
        userAge={createUserCallback.userAge}
        key={createUserCallback.key}
      />
    );
  }
  return props.isUserListEmpty ? null : (
    <div className="main-list-conatiner">
      <div className="main-list-inner-conatiner">
        {props.UserArray.map(createUser)}
      </div>
    </div>
  );
}

export default ListOfUsers;
