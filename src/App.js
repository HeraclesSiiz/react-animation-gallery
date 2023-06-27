import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Skills from "./pages/skills";
import Animations from "./pages/animations";

import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Route path="/" element={<Skills />} />
      <Route path="/skill" element={<Skills />} />
      <Route path="/animation" element={<Animations />} />
    </Routes>
  );
}

export default App;