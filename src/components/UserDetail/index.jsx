import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

const UserDetail = () => {
  const params = useParams();
  const currentUser = models.userModel(params.userId);

  if (currentUser === undefined || currentUser === null) {
    return (
      <section className="user-detail">
        <h2>Không tìm thấy người dùng</h2>
        <p>Dữ liệu người dùng không tồn tại hoặc đã bị xóa.</p>
      </section>
    );
  }

  const {
    _id,
    first_name,
    last_name,
    location,
    occupation,
    description,
  } = currentUser;

  return (
    <section className="user-detail">
      <header>
        <h2>{`${first_name} ${last_name}`}</h2>
      </header>

      <div>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Occupation:</strong> {occupation}
        </p>
        <p>
          <strong>About:</strong> {description}
        </p>
      </div>

      <Link to={`/photos/${_id}`} className="photos-link">
        Browse {first_name}'s Photos
      </Link>
    </section>
  );
};

export default UserDetail;