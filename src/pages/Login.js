import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login({ isLoggedIn, login }) {
  console.log(isLoggedIn);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api_url = process.env.REACT_APP_BACKEND_API_URL;

  const handleLogin = () => {
    setLoading(true);
    setError(null);

    // Create an object to hold the user's credentials
    const userData = {
      email: username,
      password: password,
      accept: "application/json",
    };

    /*fetch(api_url + "/jwt/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        email: userData.email,
        password: userData.password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        // Assuming the response contains a token upon successful login
        const token = data.token;

        // Store the token or handle it as needed for authentication
        login(token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error.message);
      });*/
    login("token_123456");
    navigate("/");
  };

  const [pwdVisible, setPwdVisible] = useState(false);
  const togglePwdVisible = () => {
    setPwdVisible(!pwdVisible);
    console.log("toggle");
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/");
    } else {
      console.log("Don't Navigate");
    }
  }, [isLoggedIn, navigate]);

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
          <h2 className="login-greeting">Welcome Back!</h2>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Your Email or Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-container">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                />
                <div onClick={togglePwdVisible} className="icon">
                  {pwdVisible ? <PiEye /> : <PiEyeClosed />}{" "}
                </div>
              </div>
            </div>
            <div className="form-group-inline">
              <div className="check">
                <input type="checkbox" id="keep-logged-in" />
                <label
                  style={{ marginTop: "1px" }}
                  htmlFor="keep-logged-in"
                  className="tiny-text"
                >
                  Keep me logged in
                </label>
              </div>
              <a
                style={{ marginBottom: "5px", marginTop: "1px" }}
                className="tiny-text"
                href="/forgot-password"
              >
                Forgot password
              </a>
            </div>
            <button type="button" onClick={handleLogin}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group-inline">
              <a
                style={{ marginBottom: "5px", marginTop: "5px" }}
                className="tiny-text"
                href="/sso"
              >
                Use Single Sign ON
              </a>
              <a
                style={{ marginBottom: "5px", marginTop: "5px" }}
                className="tiny-text"
                href="/partner-login"
              >
                Use Partner Login
              </a>
            </div>
          </form>
          <p>
            Don’t have an account?{" "}
            <Link className="signup-link" to="/signup">
              Sign up
            </Link>
          </p>
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

export default Login;
