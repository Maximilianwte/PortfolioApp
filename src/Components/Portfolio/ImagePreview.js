import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
var contentful = require("contentful");

const keys = require("../../Config/keys");

class ImagePreview extends Component {
  constructor(props) {
    super();
    this.state = {
      imageUrl: ""
    };
  }

  // I believe I have to hook up a data storage and a database(for url).
  componentDidMount() {
    console.log(this.props.article.fields);
  }
  render() {
    var client = contentful.createClient({
      space: keys.contentfulSpace,
      accessToken: keys.contentfulAccessToken
    });

    const { title } = this.props.article.fields.title;

    client.getAsset(this.props.article.fields.image.sys.id).then(
      asset =>
        this.setState({
          imageUrl: "https:" + `${asset.fields.file.url}`
        })
      /*  console.log(`${asset.fields.file.url}?fm=jpg&fl=progressive`) */
    );
    return (
      <div className="ImagePreview gridItem">
        <Link to={"/photograph/" + this.props.article.fields.image.sys.id} onClick={ReactGA.event({
                category: "Behaviour",
                action: "Event_001: Image Preview Clicked"
              })}>
          <img src={this.state.imageUrl} alt={title} title={title} />
        </Link>
      </div>
    );
  }
}

export default ImagePreview;
