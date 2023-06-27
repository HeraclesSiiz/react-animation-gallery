import "./page.scss";
import React, { useEffect, useState } from 'react';

import {
    AppBar,
    Toolbar,
    Grid,
    Paper,
    Button,
    Typography
  } from '@mui/material';
  
import {
    motion,
    LayoutGroup,
    LazyMotion, domAnimation, m,
    useScroll, useSpring,
    AnimatePresence
} from 'framer-motion';

//layout spring
const layout_spring = {
    type: "spring",
    stiffness: 2000,
    damping: 60
};

export default function Animations(props) {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <Grid container direction="column" className="framer p-3" justifyContent="center" alignItems="center">
            <Grid item container direction="row" justifyContent="flex-start" alignItems="center" className='p-3' spacing={3}>
                <Grid item>
                    <div
                        className="button switch"
                        data-isOn={isOn} onClick={toggleSwitch}
                    >
                        <motion.div className="handle" layout transition={layout_spring} />
                    </div>
                </Grid>
                <Grid item>
                    <motion.div
                        className="button"
                        layout
                        animate={{ opacity: isOn ? 0.3 : 1 }}
                        transition={{
                            opacity: { ease: "linear" },
                            layout: { duration: 0.3 }
                        }}
                    />
                </Grid>
                <Grid item>
                    <motion.div
                        className="button"
                        drag
                        dragConstraints={{ left: 0, right: 300, top: 100, bottom: 100 }}
                        dragElastic={0.2}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}