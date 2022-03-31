import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./index";
import { Navbar, Profile, Login, Register, Routines } from "./components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const [routines, setRoutine] = useState([]);
  const [activities, setActivity] = useState([]);

  const fetchRoutine = async () => {
    const resp = await fetch(`${API}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await resp.json();
    setRoutine(info);
  };
  const fetchActivity = async () => {
    const resp = await fetch(`${API}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await resp.json();
    setActivity(info);
  };

  console.log(activities);

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
    fetchRoutine();
    fetchActivity();
  });

  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route exact path="/" components={<Home />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="/routines"
          element={
            <Routines
              routines={routines}
              setRoutine={setRoutine}
              activities={activities}
              setActivity={setActivity}
              user={user}
            />
          }
        />
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
