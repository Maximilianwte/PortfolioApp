import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
         <Link to={"/"}>Home</Link>
         <Link to={"/portfolio"}>Portfolio</Link>
      </div>
    );
  }
}

export default Header;
