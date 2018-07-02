import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import ImagePreview from "./ImagePreview";
var contentful = require("contentful");

const keys = require("../../Config/keys");

class Portfolio extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      imagesPreview: []
    };
  }

  componentDidMount() {
    

    this.getImages();
  }
  getImages = () => {
    var client = contentful.createClient({
      space: keys.contentfulSpace,
      accessToken: keys.contentfulAccessToken
    });

    client.getEntries().then(response => {
        this.setState({ imagesPreview: response.items });
      });
  };
  render() {
    const imagesPreview = this.state.imagesPreview.map((image, i) => (
      <ImagePreview id={i} key={i} article={image} />
    ));
    return <div className="Portfolio gridContainer">{imagesPreview}</div>;
  }
}

export default Portfolio;
