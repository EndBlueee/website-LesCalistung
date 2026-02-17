"use client";

import { motion } from "framer-motion";
export default function FadeIn({ children, delay = 0, duration = 0.6, direction = "up", className = "", fullWidth = false }) {

    const directionOffset = {
        up: {y: 40, x: 0},
        down: {y: -40, x: 0},
        left: {y: 0, x: 40},
        right: {y: 0, x: -40},
    };
    return (
        <motion.div
            initial={{ opacity: 0, ...directionOffset[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
