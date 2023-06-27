import "./page.scss";
import React, { useEffect, useState, useRef } from 'react';
import { useFollowPointer } from "./components/use-follow-pointer";
import { Item } from "./components/order-item";

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
    AnimatePresence,
    Reorder
} from 'framer-motion';

//layout spring
const layout_spring = {
    type: "spring",
    stiffness: 2000,
    damping: 60
};

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function Animations(props) {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    const [items, setItems] = useState(initialItems);


    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

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
                <Grid item>
                    <motion.div
                        className="button"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    />
                </Grid>
                <Grid item>
                    <motion.div
                        className="button"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 3,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    />
                </Grid>
                <Grid item>
                    <motion.svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="#ff0055"
                            variants={draw}
                            custom={1}
                        />
                    </motion.svg>
                </Grid>
                <Grid item>
                    <Reorder.Group as="ol" axis="y" onReorder={setItems} values={items}>
                        {items.map((item) => (
                            <Item key={item} item={item} />
                        ))}
                    </Reorder.Group>
                </Grid>
                {/* <Grid item>
                    <motion.div
                        ref={ref}
                        className="ball"
                        animate={{ x, y }}
                        transition={{
                            type: "spring",
                            damping: 100,
                            stiffness: 1000,
                            restDelta: 0.001
                        }}
                    />
                </Grid> */}
            </Grid>
        </Grid>
    );
}