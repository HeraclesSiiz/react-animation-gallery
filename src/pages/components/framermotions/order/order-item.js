import * as React from "react";
import { useMotionValue, useDragControls, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";

import {
    Button,
} from '@mui/material';

export const Item = ({ item }) => {
    const y = useMotionValue(0);
    const controls = useDragControls();
    //   const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item} style={{ y }} dragControls={controls}>
            <Button variant="contained" className="m-1" sx={{ width: '150px' }}>{item}</Button>
        </Reorder.Item>
    );
};
