import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LoginCallback, Security } from "@okta/okta-react";
import Home from "./layouts/Home";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import AiConnectors from "./pages/AiConnectors";
import Store from "./pages/Store";
import Assets from "./pages/Assets";
import Settings from "./pages/Settings";
import Investigate from "./pages/Investigate";
import Marketplace from "./pages/Marketplace";
import RequestSignup from "./pages/RequestSignup";
import Cookies from "js-cookie";
import Signup from "./pages/Signup";
import OctaLogin from "./pages/OctaLogin";
import Profile from "./pages/Profile";
import oktaAuth from "./oktaConfig";
import Policies from "./pages/Policies";
import Users from "./pages/Users";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || "/okta");
  };

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (token) => {
    // Calculate the expiration time for the cookie (15 minutes from now)
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 15 * 60 * 1000); // 15 minutes in milliseconds

    // Set the token as a cookie with the calculated expiry time
    Cookies.set("auth_token", token, { expires: expirationTime });

    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} logout={logout} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="/connectors" element={<AiConnectors />} />
          <Route path="/store" element={<Store />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/investigate" element={<Investigate />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/okta" exact={true} element={<OctaLogin />} />
        <Route path="/okta/callback" element={<LoginCallback />} />
        <Route path="/okta/profile" element={<Profile />} />

        <Route path="/signup" element={<RequestSignup />} />
        <Route path="/complete-signup" element={<Signup />} />
        <Route path="/market" element={<Marketplace />} />
        <Route
          path="/login"
          element={<Login login={login} isLoggedIn={isLoggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Security>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
