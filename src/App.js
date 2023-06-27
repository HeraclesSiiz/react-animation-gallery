import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";

import Layout from "./layout";

import { createBrowserHistory } from "history";

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;