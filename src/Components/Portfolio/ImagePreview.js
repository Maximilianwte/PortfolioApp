import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImagePreview extends Component {

    // I believe I have to hook up a data storage and a database(for url).
  
  render() {
    const {image} = this.props;
    return (
      <div className="ImagePreview gridItem">
        <Link to={image.url}><img src={image.previewUrl} alt=""/></Link>
      </div>
    );
  }
}

export default ImagePreview;
