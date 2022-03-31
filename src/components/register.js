import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../index";

const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const lsToken = localStorage.getItem("token");
  const navigate = useNavigate();

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
        username: username,
        password: password,
      }),
    });
    const info = await resp.json();
    console.log(info);
    if (info.error) {
      return setError(info.error.message);
    }
<<<<<<< HEAD
    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);
    //history.push("/");
=======
    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/profile");
>>>>>>> ebb4fa6502cfaa622c67198674186d2c4d7e4f7d
  };
  if (!lsToken) {
    return (
      <div>
        <h1>Make an Account</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
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
  } else {
    return "you're already registered";
  }
};

export default Register;
