import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import FramerMotion from "./pages/framermotion";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Route path="/" element={<FramerMotion />} />
      <Route path="/motion" element={<FramerMotion />} />
    </Routes>
  );
}

export default App;