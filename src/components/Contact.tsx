"use client";

import { FadeIn } from "./animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
    const t = useTranslations("Contact");

    return (
        <footer id="contact" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[var(--accent)]">
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                    <div className="max-w-2xl">
                        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-8 text-foreground leading-tight">
                            {t("title1")} <span className="text-zinc-500">{t("title2")}</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-light max-w-lg mb-12">
                            {t("subtitle")}
                        </p>

                        <a
                            href={`https://wa.me/5598985900317?text=${t("talk_msg")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 group text-lg"
                        >
                            {t("talk_to_me")}
                            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 text-zinc-500 font-medium">
                        <a href="https://linkedin.com/in/bryan-miraanda/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center justify-between w-40 border-b border-[var(--accent)] pb-2 group">
                            LinkedIn
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="https://github.com/Bryanmdev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center justify-between w-40 border-b border-[var(--accent)] pb-2 group">
                            GitHub
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="https://bryanmdev-portfolio.netlify.app/docs/Curriculo_Bryan_Miranda_DEV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center justify-between w-40 border-b border-[var(--accent)] pb-2 group">
                            {t("resume_pdf")}
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="mt-32 pt-8 border-t border-[var(--accent)] flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
                    <p>© {new Date().getFullYear()} {t("rights")}</p>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                        Design Minimal & Clean
                    </p>
                </div>
            </FadeIn>
        </footer>
    );
}
