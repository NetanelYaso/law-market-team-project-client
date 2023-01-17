import React    from "react";
import template from "./ProfileCard.jsx";

class ProfileCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ProfileCard;
