import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  switchMenu() {
    $(".menuIcon").toggleClass("change");
    $(".containerX#menuOverlay").toggleClass("slideIn");
    console.log("Menu switched");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="Header">
          <div className="menuIcon hideDesktop" onClick={this.switchMenu}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <div className="hideMobile">
            <Link to={"/"}>Home</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
        </div>
        <div className="containerX navLink" id="menuOverlay">
          <div className="menuIcon" onClick={this.switchMenu}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <Link onclick={this.switchMenu} to={"/"}>
            Home
          </Link>
          <Link onclick={this.switchMenu} to={"/portfolio"}>
            Portfolio
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
