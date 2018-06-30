import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";

import ImagePreview from "./ImagePreview";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }
  render() {
    const imagesPreview = this.state.images.map((image, i) => (
      <ImagePreview id={i} key={i} article={image} />
    ));
    return (
      <div className="Portfolio gridContainer">
        {imagesPreview}
      </div>
    );
  }
}

export default Portfolio;
