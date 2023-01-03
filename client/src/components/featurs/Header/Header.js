import React    from "react";
import template from "./Header.jsx";

class Header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Header;
