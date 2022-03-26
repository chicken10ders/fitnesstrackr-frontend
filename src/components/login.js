import { API } from "../index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "autoprefixer";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const info = await resp.json();
    if (info.error) {
      return setError(info.error.message);
    }
    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/home");
  };

  const lsToken = localStorage.getItem("token");
  return (
    <>
      {!lsToken ? (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              required
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <p id="error">{error}</p>
        </div>
      ) : (
        <div>
          <p> You're logged in go get fitness</p>
        </div>
      )}
    </>
  );
};

export default Login;
