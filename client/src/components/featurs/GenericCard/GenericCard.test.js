import React    from "react";
import template from "./GenericCard.test.js";

class GenericCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default GenericCard;
