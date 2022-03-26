import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./index";
import { Navbar, Profile, Login, Register } from "./components";

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
        {/* <Route exact path="/" components={<Home />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route exact path="/routines" element={<Routines />} /> */}
        {/* <Route exact path="/activities" element={<Activites />}  */}

        <Route exact path="/login" element={<Login setToken={setToken} />} />
        <Route
          exact
          path="/register"
          element={<Register setToken={setToken} />}
        />
      </Routes>
    </>
  );
};

export default App;
