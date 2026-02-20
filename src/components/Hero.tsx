"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("Hero");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
    } as any;

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-5xl mx-auto pt-20">
            <div className="flex flex-col gap-6">

                <FadeIn delay={0.2} direction="up">
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest pl-1">
                        Bryan Miranda — {t("role")}
                    </p>
                </FadeIn>

                {/* Text Reveal Animation for the Hero */}
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tighter leading-[1.05] text-foreground"
                >
                    <motion.div variants={item} className="overflow-hidden">
                        <span>{t("line1")}</span>
                    </motion.div>
                    <motion.div variants={item} className="overflow-hidden">
                        <span>{t("line2")}</span>
                    </motion.div>
                    <motion.div variants={item} className="overflow-hidden">
                        <span className="text-zinc-500">{t("line3")}</span>
                    </motion.div>
                </motion.h1>

                <FadeIn delay={0.8} direction="up">
                    <p className="max-w-prose text-zinc-400 text-lg sm:text-xl leading-relaxed font-light mt-4">
                        {t("description")}
                    </p>
                </FadeIn>

                <FadeIn delay={0.9} direction="up">
                    <div className="flex flex-wrap items-center gap-6 mt-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-zinc-800 transition-colors"
                        >
                            {t("view_projects")} <ArrowRight size={18} />
                        </a>

                        <div className="flex items-center gap-4 text-zinc-500">
                            <a href="https://github.com/Bryanmdev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2">
                                <Github size={22} />
                            </a>
                            <a href="https://linkedin.com/in/bryan-miraanda/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2">
                                <Linkedin size={22} />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bryanmiranda.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2">
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
