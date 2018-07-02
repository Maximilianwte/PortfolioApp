import React, { Component } from "react";
import { Link } from "react-router-dom";

var contentful = require("contentful");

const keys = require("../../Config/keys");

class ImageMainView extends Component {
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

    const { image } = this.props.article.fields;
    const { title } = this.props.article.fields.title;

    const asset = client.getAsset(this.props.article.fields.image.sys.id).then(
      asset =>
        this.setState({
          imageUrl: "https:" + `${asset.fields.file.url}`
        })
      /*  console.log(`${asset.fields.file.url}?fm=jpg&fl=progressive`) */
    );
    return (
      <div className="ImageMainView gridItem">
        <Link to="/">
          <img src={this.state.imageUrl} alt={this.state.imageUrl} />
        </Link>
      </div>
    );
  }
}

export default ImageMainView;
