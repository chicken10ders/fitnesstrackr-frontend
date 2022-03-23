import React, { useState } from "react";
import { useHistory } from "react-router";
import { API } from "../index";

const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    const resp = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const info = await resp.json();
    if (info.error) {
      return setError(info.error.message);
    }
    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);
    history.push("/");
  };

  return (
    <div>
      <h1>Make an Account</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          minLength={5}
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          minLength={5}
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          minLength={5}
          type="password"
          placeholder="Confirm password..."
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p id="error">{error}</p>
    </div>
  );
};

export default Register;
