"use client";

import { FadeIn } from "./animations/FadeIn";
import { SpotlightCard } from "./animations/SpotlightCard";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

type Project = {
    title: string;
    category: string;
    description: string;
    stack: string[];
    link?: string;
    github?: string;
    year: string;
    live?: boolean;
};

export function Projects() {
    const t = useTranslations("Projects");

    const projects: Project[] = [
        {
            title: "Argus One",
            category: t("argus_cat"),
            description: t("argus_desc"),
            stack: ["React", "Security", "Encryption", "Database"],
            link: "https://argus-one-one.vercel.app",
            year: "2026",
            live: true
        },
        {
            title: "Brasil Hosp",
            category: t("hosp_cat"),
            description: t("hosp_desc"),
            stack: ["React", "Next.js", "TailwindCSS"],
            link: "https://www.brasil-hosp.com",
            year: "2025"
        },
        {
            title: "Chatbot de Cobranças",
            category: t("chat_cat"),
            description: t("chat_desc"),
            stack: ["Node.js", "Python", "Automation"],
            github: "https://github.com/Bryanmdev",
            year: "2025"
        },
        {
            title: "Frontend World",
            category: t("fw_cat"),
            description: t("fw_desc"),
            stack: ["HTML", "CSS", "Javascript"],
            link: "https://frontend-world.netlify.app/",
            year: "2023"
        },
        {
            title: "Language Museum",
            category: t("lm_cat"),
            description: t("lm_desc"),
            stack: ["HTML", "Vanilla CSS", "Animations"],
            link: "https://programming-language-showcase.netlify.app/",
            year: "2023"
        }
    ];

    return (
        <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 max-w-6xl mx-auto">
            <FadeIn>
                <div className="flex flex-col mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{t("title")}</h2>
                    <p className="text-zinc-500 font-medium text-lg max-w-prose">
                        {t("subtitle")}
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1} fullWidth>
                        <SpotlightCard className="h-full flex flex-col justify-between group">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                                    <span className="text-zinc-500 font-mono text-sm">{project.year}</span>

                                    <div className="flex items-center gap-2">
                                        {project.live && (
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                                            </span>
                                        )}
                                        <span className="text-zinc-400 font-medium text-xs tracking-wider uppercase">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 text-base leading-relaxed max-w-[50ch]">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-xs font-mono font-medium text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4 border-t border-zinc-800">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors group/link text-sm"
                                        >
                                            {t("view_live")}
                                            <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
                                        >
                                            <Github size={16} />
                                            <span className="font-medium">{t("repo")}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
