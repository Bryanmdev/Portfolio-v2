"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "../i18n/routing";

export function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t("about"), href: "#about" },
        { name: t("skills"), href: "#skills" },
        { name: t("projects"), href: "#projects" },
        { name: t("contact"), href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLocale = () => {
        const nextLocale = locale === "en" ? "pt" : "en";
        router.replace("/", { locale: nextLocale });
    };

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4 sm:pt-6">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border ${isScrolled
                    ? "bg-background/80 backdrop-blur-md border-[var(--accent)] shadow-sm"
                    : "bg-transparent border-transparent"
                    }`}
                style={{ width: "min(100%, 800px)" }}
            >
                <a href="#" className="text-foreground font-bold tracking-tighter text-lg">
                    b<span className="text-zinc-500">.</span>dev
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-500 hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button onClick={toggleLocale} className="flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-foreground transition-colors uppercase ml-2">
                        <Globe size={14} />
                        {locale === "en" ? "PT" : "EN"}
                    </button>
                </div>

                <a
                    href="https://bryanmdev-portfolio.netlify.app/docs/Curriculo_Bryan_Miranda_DEV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block px-4 py-2 rounded-full border border-[var(--accent)] text-xs font-medium hover:bg-[var(--accent)] transition-colors"
                >
                    {t("resume")}
                </a>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button onClick={toggleLocale} className="flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-foreground transition-colors uppercase">
                        <Globe size={14} />
                        {locale === "en" ? "PT" : "EN"}
                    </button>
                    <button
                        className="text-foreground block focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                >
                    <button
                        className="absolute top-8 right-8 text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-medium tracking-tight hover:text-zinc-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://bryanmdev-portfolio.netlify.app/docs/Curriculo_Bryan_Miranda_DEV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-zinc-700 pb-1"
                        >
                            {t("download_resume")}
                        </a>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
