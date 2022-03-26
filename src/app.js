import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./index";
import { Navbar, Profile, Routines } from "./components";
const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    const resp = await fetch(`${API}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await resp.json();
    setRoutines(info.data.routines);
  };

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      setToken(lsToken);
    }
    const resp = await fetch(`${API}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lsToken}`,
      },
    });
    const info = await resp.json();
    if (info.success) {
      setUser(info.data);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRoutines();
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Home />} />

        <Route exact path="/routines" element={<Routines />} />

        <Route exact path="/activities" element={<Routines />} />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
