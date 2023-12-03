import React, { Component } from "react";
import { withOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export default withOktaAuth(
  class OctaLogin extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.isLoggedIn = false;
    }

    async login() {
      await this.props.oktaAuth.signInWithRedirect();
    }

    async logout() {
      await this.props.oktaAuth.signOut();
    }

    render() {
      let body = null;
      if (this.props.authState?.isAuthenticated) {
        body = (
          <div className="Buttons">
            <button onClick={this.logout}>Logout</button>
            <br />
            <button>
              <Link to="/okta/profile">Profile</Link>
            </button>
          </div>
        );
      } else {
        body = (
          <div className="Buttons">
            <button onClick={this.login}>Login</button>
          </div>
        );
      }

      return (
        <div className="centered">
          <video
            src={`${process.env.PUBLIC_URL}/login.mp4`}
            autoPlay
            muted
            loop
          ></video>
          <div className="flex-half">
            <div className="login-form">
              <div className="check">
                <img
                  className="login-logo"
                  src={`${process.env.PUBLIC_URL}/loginLogo.png`}
                  alt="login"
                />
                <h2 className="login-title">Stealth Startup</h2>
              </div>
              <h2 className="login-greeting">Login with Okta</h2>
              {body}
              <p className="disclaimer">
                I attest that I have read and agree to be bound to the{" "}
                <p className="terms">
                  Stealth Startup Online Services Terms and Conditions
                </p>{" "}
                and Service Description as Customer's authorized representative.
                I also acknowledge that my personal data will be processed for
                the purposes stated, and protected as described, in the{" "}
                <p className="terms">
                  Stealth Startup Global Privacy Statement
                </p>
                .
              </p>
              <p className="login-footnote">
                SS&trade;{" "}
                <p className="login-footnote-version">
                  2.161.0-20987625536631871-patch
                </p>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
);
