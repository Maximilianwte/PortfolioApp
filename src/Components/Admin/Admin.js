import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  tryLogin = () => {
    const email = this.state.email;
    const password = this.state.password;
    axios.post("/auth/try_login", { email, password }).then(res => {
      if (res.data != undefined) {
        this.props.onLogin(
          // We take the customer id from mongoose and the response body.
          res.data
        );
      }
    });
    console.log("req send.");
  };
  onFormChange_Email = event => {
    this.setState({ email: event.target.value });
  };
  onFormChange_Password = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div className="Admin container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <form action="">
              <div className="element" id="email">
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  onChange={this.onFormChange_Email}
                />
              </div>

              <div className="element" id="password">
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  onChange={this.onFormChange_Password}
                />
              </div>
              <div className="button element">
                <input type="button" onClick={this.tryLogin} value="Anmelden" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
