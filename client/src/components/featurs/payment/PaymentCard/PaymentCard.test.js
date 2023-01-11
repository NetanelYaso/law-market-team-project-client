import React    from "react";
import template from "./PaymentCard.jsx";

class PaymentCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default PaymentCard;
