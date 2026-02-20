"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 right-0 bottom-0 w-1.5 bg-zinc-500/50 origin-top z-50 hidden md:block backdrop-blur-sm"
            style={{ scaleY }}
        />
    );
}
