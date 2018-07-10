import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

var contentful = require("contentful");

const keys = require("../../Config/keys");

class ImageMainView extends Component {
  constructor(props) {
    super();
    this.state = {
      image: [],
      imageUrl: ""
    };
  }

  // I believe I have to hook up a data storage and a database(for url).
  componentDidMount() {
    var client = contentful.createClient({
      space: keys.contentfulSpace,
      accessToken: keys.contentfulAccessToken
    });

    if (this.props.match.params.slug != null) {
      client.getEntry(this.props.match.params.slug).then(response => {
        /* this.setState({ image: response.items }); */
        console.log("response.items: ", response.items);
      });

      client.getAsset(this.props.match.params.slug).then(asset =>
        this.setState({
          imageUrl: "https:" + `${asset.fields.file.url}` + "?w=1600&h=1600"
        })
      );
    }
  }
  switchMenu() {
    $(".menuIconImg").toggleClass("change");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="ImageMainView fadeinplus">
          <img src={this.state.imageUrl} alt="" />
          <div className="simonhelms opacityDown"><h6>simonhelms.de</h6></div>
        </div>
        <div className="menuOverlay">
          <Link to={"/portfolio"}>
            <div className="menuIconImg change" onClick={this.switchMenu}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ImageMainView;
