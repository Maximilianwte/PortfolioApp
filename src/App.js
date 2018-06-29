import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import 'bootstrap';

import { connect } from "react-redux";

import './App.css';

import ScrollToTop from "./ScrollToTop";
import Context from "./Components/Context/Context";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
       <div className="App">
          <Header />
          <Route exact path="/" component={Context} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </ScrollToTop>
    </BrowserRouter>
    );
  }
}

export default App;
