import React from "react";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserList() {
  const allUsers = models.userListModel();

  return (
    <div className="user-list">
      <h2>User Directory</h2>

      <ul>
        {allUsers.reduce((elements, person) => {
          elements.push(
            <li key={person._id}>
              <Link to={`/users/${person._id}`}>
                {person.first_name} {person.last_name}
              </Link>
            </li>
          );
          return elements;
        }, [])}
      </ul>
    </div>
  );
}

export default UserList;