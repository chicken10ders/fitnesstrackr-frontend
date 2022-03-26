import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./index";
import { Navbar, Profile } from "./components";
const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);

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
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/profile" components={<Profile />} />
        {/* <Route exact path="/" components={<Home />} />

        <Route exact path="/routines" components={<Routines />} />

        <Route exact path="/activities" components={<Routtines />} />

        <Route exact path="/login" components={<Login />} /> */}
      </Routes>
    </>
  );
};

export default App;
