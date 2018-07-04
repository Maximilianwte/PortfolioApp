import React, { Component } from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";
import "./Portfolio.css";
import ImagePreview from "./ImagePreview";
var contentful = require("contentful");

const keys = require("../../Config/keys");

ReactGA.pageview("/portfolio");

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
    return (
      <div className="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | Simon Helms Photography</title>
          <meta name="description" content="Soultouching Photography made by Göttingen, Germany based Photograph Simon Helms." />
          <meta
            name="keywords"
            content="Portfolio, Simon Helms, Simon, Helms, Photography, Fotografie,Foto, Night, Stars, Photo, Images, Göttingen, Hamburg, Germany, Deutschland, Fotograf, Photograph, Student"
          />
        </Helmet>
        <div className="Portfolio">
          <div className="gridContainer fadeIn">{imagesPreview}</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
