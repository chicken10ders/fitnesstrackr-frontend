import { API } from "../index";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { info } from "autoprefixer";
const lsToken = localStorage.getItem("token");

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

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
      setUsername("Incorrect Username");
      setPassword("");

      setError(info.error.message);
    }

    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/");
  };

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

          <p> Can't log in? Maybe you need to register.</p>
          <Link to="./register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        <div>
          {/* <Link to="./register">
            <button>Register</button>
          </Link> */}
          you are logged in
        </div>
      )}
    </>
  );
};

export default Login;
