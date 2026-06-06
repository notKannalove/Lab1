import React from "react";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const params = useParams();

  const profile = models.userModel(params.userId);
  const images = models.photoOfUserModel(params.userId);

  if (!profile) {
    return (
      <div className="user-photos">
        <h2>User unavailable</h2>
      </div>
    );
  }

  return (
    <div className="user-photos">
      <h2>
        Gallery: {profile.first_name} {profile.last_name}
      </h2>

      {images.length ? (
        images.reduce((result, item) => {
          result.push(
            <section key={item._id} className="image-block">
              <time>
                {new Date(item.date_time).toLocaleString()}
              </time>

              <img
                src={`/images/${item.file_name}`}
                alt={item.file_name}
              />
            </section>
          );
          return result;
        }, [])
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
}

export default UserPhotos;