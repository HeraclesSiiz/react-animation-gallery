import "./page.scss";
import React, { useEffect, useState, useRef } from 'react';

import { Grid, Typography } from "@mui/material";

import {
    Order,
    Sidebar,
    Transform,
    ScrollTrigger,
    Morphing,
    Accordion,
    Notification,
    Drawing,
    DrawingText,
    SvgCheckbox,
    SvgLogo
} from "./components/framermotions";

import { useInView } from "framer-motion";

function Section(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section {...props} ref={ref}>
            <span
                style={{
                    width: '100%',
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {props.children}
            </span>
        </section>
    );
}

export default function Animations(props) {
    return (
        <>
            <Sidebar />
            <SvgLogo />
            <Section className="drawing">
                <Grid container direction={"column"}>
                    <Grid item>
                        <DrawingText />
                    </Grid>
                    <Grid item>
                        <Drawing />
                    </Grid>
                </Grid>
            </Section>
            <Section className="transform">
                <Transform />
            </Section>
            <Section className="svgcheckbox">
                <SvgCheckbox />
            </Section>
            <Section className="accordion">
                <Accordion />
            </Section>
            <Section className="scrolltrigger">
                <ScrollTrigger />
            </Section>
            {/* <Section className="morphing">
                <Morphing />
            </Section> */}
            <Notification />
        </>
    );
}