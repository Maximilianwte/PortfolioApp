import React, { Component } from "react";

class Imprint extends Component {
  render() {
    return (
      <div className="Imprint container-fluid">
        <div className="row devlight">
          <div className="col-12">
            <a
              href="https://lightstrategies.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={require("../../Assets/DevelopedByLight.svg")}
                alt="Developed By Light"
                title="Developed by Light"
              />
            </a>
          </div>
        </div>
        <div className="row contentful">
          <div className="col-12 contentful">
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
                alt="Powered by Contentful"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Imprint;
