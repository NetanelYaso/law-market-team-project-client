import React    from "react";
import template from "./DetailsCard.jsx";

class DetailsCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default DetailsCard;
