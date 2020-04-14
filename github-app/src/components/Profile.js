import React from "react";

const Profile = props => {
  return (
    <div className="profileCard">
      <img width="250px" src={props.user.avatar_url} alt="Lisa" />
      <div className="nameDiv">
        <h1>{props.user.name}</h1>
        <h3>GitHub Name: {props.user.login}</h3>
        <h3>Followers: {props.user.followers}</h3>
        <h4>Bio: {props.user.bio}</h4>
      </div>
    </div>
  );
};

export default Profile;