import React, { useState } from "react";
import { Link } from "react-router-dom";

function RequestSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const api_url = process.env.REACT_APP_BACKEND_API_URL;

  const handleSubmit = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailPattern.test(email)) {
      fetch(`${api_url}/jwt/signup?email=${encodeURIComponent(email)}`, {
        method: "GET",
        /*headers: {
          'accept': 'application/json',
        },*/
      })
        .then((response) => {
          if (response.ok) {
            // Handle a successful response here, if needed
            return response.json();
          } else {
            // Handle an error response here
            throw new Error("Failed to request signup");
          }
        })
        .then((data) => {
          // Handle the data, e.g., show a success message
          setSubmitted(true);
        })
        .catch((error) => {
          // Handle the error, e.g., show an error message
          console.log(error);
          alert("Failed to request signup: " + error.message);
        });
    } else {
      alert("Invalid Email, Please Enter a valid Email Address.");
    }
  };

  return (
    <div className="centered">
      <video
        src={`${process.env.PUBLIC_URL}/signup.mp4`}
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
          <div>
            <h2 className="signup-greeting">Welcome to Stealth Startup</h2>
            <br />
            {submitted ? (
              <p className="signup-instruction">
                Your response has been registered. Please wait for a
                confirmation email.
              </p>
            ) : (
              <p className="signup-instruction">
                Please enter your email. Someone from our team will be in touch
                with you, shortly.
              </p>
            )}
          </div>
          {submitted ? (
            <></>
          ) : (
            <form id="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Your Corporate Email Address for registration"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="button" onClick={handleSubmit}>
                Register
              </button>
              <div className="form-group-inline">
                <p
                  style={{ marginBottom: "5px", marginTop: "5px" }}
                  className="tiny-text"
                >
                  Already have an account?{" "}
                  <Link className="signup-link" to="/login">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          )}
          <p className="disclaimer">
            I attest that I have read and agree to be bound to the{" "}
            <p className="terms">
              Stealth Startup Online Services Terms and Conditions
            </p>{" "}
            and Service Description as Customer's authorized representative. I
            also acknowledge that my personal data will be processed for the
            purposes stated, and protected as described, in the{" "}
            <p className="terms">Stealth Startup Global Privacy Statement</p>.
          </p>
          <p className="login-footnote">
            Stealth Startup&trade;{" "}
            <p className="login-footnote-version">
              2.161.0-20987625536631871-patch
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RequestSignup;
