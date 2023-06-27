import React, { Suspense,useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import routes from "../routes";

import {
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Button,
  Typography
} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Layout(){
  useEffect(() => {
  }, []);

  return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Web | Mobile Developer
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Suspense>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}
            <Route path="/" element={<Navigate to="skills" replace />} />
          </Routes>
        </Suspense>
      </>
  );
};

export default Layout;
