import React, { Suspense, useEffect } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import routes from "../routes";

import {
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Button,
  Typography
} from '@mui/material';

import { motion,useScroll,useSpring } from "framer-motion";

function Layout() {
  useEffect(() => {
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:5 }}>
            Web | Mobile Developer
          </Typography>
          <Button variant="contained" sx={{m:1}} color="info"><Link to="skills" style={{color:'white'}}>skills</Link></Button>
          <Button variant="contained" sx={{m:1}} color="info"><Link to="products" style={{color:'white'}}>products</Link></Button>
          <Button variant="contained" sx={{m:1}} color="info"><Link to="animations" style={{color:'white'}}>animations</Link></Button>
        </Toolbar>
      </AppBar>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
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
