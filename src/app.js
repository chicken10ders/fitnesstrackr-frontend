import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./index";
import {
  Navbar,
  Profile,
  Login,
  Register,
  Routines,
  AddRoutine,
  Activities,
  AddActivity,
  Home,
} from "./components";
import { info } from "autoprefixer";

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
    console.log(info);
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

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");
    if (lsToken) {
      setToken(lsToken);
    } else {
      return;
    }

    const resp = await fetch(`${API}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lsToken}`,
      },
    });

    const info = await resp.json();

    setUser(info);
  };

  useEffect(() => {
    fetchUser();
    fetchRoutine();
    fetchActivity();
  }, [token]);

  return (
    <>
      <Navbar user={user} setToken={setToken} setUser={setUser} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile user={user} />} />
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
        <Route
          exact
          path="/profile/addroutine"
          element={<AddRoutine token={token} />}
        />
        <Route
          exact
          path="/activities"
          element={<Activities user={user} activities={activities} />}
        />
        <Route
          exact
          path="/activities/addactivity"
          element={<AddActivity token={token} />}
        />

        <Route exact path="/login" element={<Login setToken={setToken} />} />
        <Route
          exact
          path="/login/register"
          element={<Register setToken={setToken} />}
        />
      </Routes>
    </>
  );
};

export default App;
