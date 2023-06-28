
import React, { useState } from 'react';
import { Item } from "./order-item";

import {
    Reorder,
} from 'framer-motion';

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function Order() {
    const [items, setItems] = useState(initialItems);

    return (
        <Reorder.Group as="ol" axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
                <Item key={item} item={item} />
            ))}
        </Reorder.Group>
    );
}