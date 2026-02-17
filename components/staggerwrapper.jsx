"use client"
import { motion } from "framer-motion";

export function StaggerContainer({ children, className, ...props }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScaleUpWrapper({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        > {children}
        </motion.div>
    );
}
