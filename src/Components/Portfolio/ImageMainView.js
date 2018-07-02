import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          imageUrl: "https:" + `${asset.fields.file.url}`
        })
      );
    }
  }
  render() {
    return (
      <div className="ImageMainView">
        <h3 />
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}

export default ImageMainView;
