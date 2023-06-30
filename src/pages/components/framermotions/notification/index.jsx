import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./closebutton.jsx";
import { add, remove } from "./array-utils.jsx";
import './index.scss';

export const Notification = () => {
    const [notifications, setNotifications] = useState([0]);

    return (
        <div className="notification">
            <ul>
                <AnimatePresence initial={false}>
                    {notifications.map(id => (
                        <motion.li
                            key={id}
                            positionTransition
                            initial={{ opacity: 0, y: 50, scale: 0.3 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        >
                            <CloseButton
                                close={() => setNotifications(remove(notifications, id))}
                            />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
            <button
                className="add"
                onClick={() => setNotifications(add(notifications))}
            >
                +
            </button>
        </div>
    );
};
