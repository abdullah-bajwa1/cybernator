import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const api_url = process.env.REACT_APP_BACKEND_API_URL;

  const handleLogin = () => {
    const userData = {
      tenant_id: "your_tenant_id",
      user_name: username,
      first_name: firstname,
      last_name: lastname,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      country: country,
      email: username,
      password: password,
      confirm_password: confirmPassword,
      cell: phoneNumber,
    };

    // Make the signup request using fetch
    fetch(api_url + "/jwt/complete_signup", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Successful signup, you can navigate to another page or show a success message.
          alert("sign-in successful");
          navigate("/login");
        } else {
          // Handle the error, e.g., show an error message.
          alert("Signup failed. Please Try Again Later");
          console.error("Signup failed.");
        }
      })
      .catch((error) => {
        console.error("An error occurred during signup:", error);
        alert("An error occurred during signup:", error.message);
      });
  };

  const [pwdVisible, setPwdVisible] = useState(false);
  const togglePwdVisible = () => {
    setPwdVisible(!pwdVisible);
    console.log("toggle");
  };

  return (
    <div className="centered">
      <video
        style={{ position: "fixed" }}
        src={`${process.env.PUBLIC_URL}/signup.mp4`}
        autoPlay
        muted
        loop
      ></video>
      <div className="flex-half" style={{ height: "max-content" }}>
        <div className="login-form">
          <div className="check">
            <img
              className="login-logo"
              src={`${process.env.PUBLIC_URL}/loginLogo.png`}
              alt="login"
            />
            <h2 className="login-title">Stealth Startup</h2>
          </div>
          <h2 className="signup-greeting">Welcome to Stealth Startup</h2>

          <form id="signup-form" style={{ marginTop: "20px" }}>
            <div className="inline-inputs">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  placeholder="Your First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  placeholder="Your Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Your Email or Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                placeholder="Your Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="inline-inputs">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  placeholder="Your City"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  id="zipcode"
                  value={zipcode}
                  placeholder="Your Zipcode"
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inline-inputs">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  placeholder="Your State"
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  placeholder="Your Country"
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                placeholder="Your Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Choose a Password</label>
              <div className="password-container">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                  required
                />
                <div onClick={togglePwdVisible} className="icon">
                  {pwdVisible ? <PiEye /> : <PiEyeClosed />}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <div className="password-container">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="confirmpassword"
                  value={confirmPassword}
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="password"
                  required
                />
                <div onClick={togglePwdVisible} className="icon">
                  {pwdVisible ? <PiEye /> : <PiEyeClosed />}
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
            <button
              style={{ marginTop: "20px", marginBottom: "5px" }}
              type="button"
              onClick={handleLogin}
            >
              Sign Up
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
              <a
                style={{ marginBottom: "5px", marginTop: "5px" }}
                className="tiny-text"
                href="/partner-login"
              >
                Use Partner Login
              </a>
            </div>
          </form>
          <p className="login-footnote">Stealth Startup&trade;</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
