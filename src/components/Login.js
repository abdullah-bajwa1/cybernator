import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, we'll just check if the username and password are both "admin"
    if (username === 'admin' && password === 'admin') {
      // Redirect to the home page ("/") on successful login
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="centered">
        <div className="login-form">
        <h2>Login</h2>
        <form>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="button" onClick={handleLogin}>
            Login
            </button>
        </form>
        </div>
    </div>
  );
}

export default Login;
