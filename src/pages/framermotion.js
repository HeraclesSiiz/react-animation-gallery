import "./page.scss";
import React, { useEffect, useState } from 'react';

import {
  Grid,
  Paper,
  Button,
  Typography
} from '@mui/material';

import {
  motion,
  LayoutGroup,
  LazyMotion, domAnimation, m,
  useScroll, useSpring
} from 'framer-motion';

//layout spring
const layout_spring = {
  type: "spring",
  stiffness: 2000,
  damping: 60
};

export default function FramerMotion(props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
  }, []);

  return (
    <Grid container direction="column" className="framer p-3" justifyContent="center" alignItems="center">
      <motion.div
        className="progress-bar"
        // style={{ scaleX: scrollYProgress }}
        style={{ scaleX }}
      />
      <Grid item>
        <Typography variant='h2' className='text-center'>Framer Motion</Typography>
      </Grid>
      {/* Lazy Motion */}
      <Grid item>
        <LazyMotion features={domAnimation}>
          <m.div className="button" animate={{ scale: 1.5, opacity: 0.5 }} />
        </LazyMotion>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={4}></Grid>
        <Grid item container direction="column" md={4} justifyContent="center" alignItems="center">
          {/* Gestures */}
          <Grid item container direction="row" justifyContent="space-between" alignItems="center" className='p-3'>
            <Grid item>
              <Typography variant='span' className='text-center'>hover & click animation</Typography>
            </Grid>
            <Grid item>
              <motion.button className="button p-2" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >Motion</motion.button>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="space-between" alignItems="center" className='p-3'>
            <Grid item>
              <Typography variant='span' className='text-center'>switch</Typography>
            </Grid>
            <Grid item>
              <div
                className="button switch"
                data-isOn={isOn} onClick={toggleSwitch}
              >
                <motion.div className="handle" layout transition={layout_spring} />
              </div>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="space-between" alignItems="center" className='p-3'>
            <Grid item>
              <Typography variant='span' className='text-center'>easing</Typography>
            </Grid>
            <Grid item>
              <motion.div
                className="button"
                layout
                animate={{ opacity: 0.3 }}
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 3 }
                }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="space-between" alignItems="center" className='p-3'>
            <Grid item>
              <Typography variant='span' className='text-center'>drag</Typography>
            </Grid>
            <Grid item>
              <motion.div
                className="button"
                drag
                dragConstraints={{ left: 0, right: 300,top:100,bottom:100 }}
                dragElastic={0.2}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}