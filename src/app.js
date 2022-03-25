import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Profile } from "./components";
const App = () => {
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
