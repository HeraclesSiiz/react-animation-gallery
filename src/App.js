import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { blue } from '@mui/material/colors';

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./layout";

import { createBrowserHistory } from "history";

const theme = createTheme({
  palette: {
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
});

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