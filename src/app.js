import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <navbar />
      <div>
        <Route exact path="/">
          <home />
        </Route>
        <Route exact path="/routines">
          <routines />
        </Route>
        <Route exact path="/profile">
          <profile />
        </Route>
        <Route exact path="/activities">
          <activities />
        </Route>
        <Route exact path="/login">
          <login />
        </Route>
      </div>
    </>
  );
};

export default App;
