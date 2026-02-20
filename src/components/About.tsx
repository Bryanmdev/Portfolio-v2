"use client";

import { FadeIn } from "./animations/FadeIn";
import { useTranslations } from "next-intl";

export function About() {
    const t = useTranslations("About");

    const skills = [
        { category: t("frontend"), items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS/JS"] },
        { category: t("backend_cloud"), items: ["Node.js", "Python", "REST APIs", t("db")] },
        { category: t("security_core"), items: [t("crypto"), t("infosec"), t("data_structures"), "Git"] },
        { category: t("game_dev"), items: [t("2d_games"), t("logic"), t("proto")] }
    ];

    return (
        <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[var(--accent)]">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                <div className="lg:w-1/2">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">{t("title")}</h2>
                        <div className="flex flex-col gap-6 text-zinc-400 text-lg leading-relaxed font-light">
                            <p>
                                {t.rich("p1", {
                                    highlight: (chunks) => <strong className="text-foreground font-medium">{chunks}</strong>
                                })}
                            </p>
                            <p>
                                {t.rich("p2", {
                                    highlight: (chunks) => <strong className="text-foreground font-medium">{chunks}</strong>
                                })}
                            </p>
                            <p>{t("p3")}</p>
                        </div>
                    </FadeIn>
                </div>

                <div id="skills" className="lg:w-1/2 flex flex-col gap-12 pt-8 lg:pt-0">
                    <FadeIn delay={0.2}>
                        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase text-zinc-500 mb-8 border-b border-[var(--accent)] pb-4">
                            {t("arsenal")}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {skills.map((skillGroup, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <h4 className="text-foreground font-semibold tracking-wide">
                                        {skillGroup.category}
                                    </h4>
                                    <ul className="flex flex-col gap-2">
                                        {skillGroup.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="text-zinc-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full inline-block" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
