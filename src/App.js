import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "bootstrap";
import ReactGA from "react-ga";

import { connect } from "react-redux";

import "./App.css";

import ScrollToTop from "./ScrollToTop";
import Context from "./Components/Context/Context";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import ImageMainView from "./Components/Portfolio/ImageMainView";
import Imprint from "./Components/Footer/Imprint";

import "./MediaQueries.css";

ReactGA.initialize("UA-109777178-3");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header />
            <Route exact path="/" component={Context} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/photograph/:slug" component={ImageMainView} />
            <Route exact path="/imprint" component={Imprint} />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
