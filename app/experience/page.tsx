"use client";

import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import { experience } from "@/data/experience";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import BackLink from "@/components/ui/BackButton";
import { motion } from "framer-motion";

export default function ExperiencePage() {
    const { dark, setDark } = useTheme();
    const toggleTheme = () => setDark(prev => !prev);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    const theme = {
        bg: dark ? "bg-neutral-900/40" : "bg-white",
        card: dark ? "bg-neutral-900" : "bg-white",
        border: dark ? "border-neutral-800" : "border-neutral-200",
        textPrimary: dark ? "text-neutral-100" : "text-neutral-900",
        textSecondary: dark ? "text-neutral-400" : "text-neutral-600",
        textMuted: dark ? "text-neutral-500" : "text-neutral-500",
        line: dark ? "bg-neutral-700" : "bg-neutral-300",
        dotOuter: dark ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-300",
        dotInner: dark ? "bg-neutral-200" : "bg-neutral-800",
    };

    return (
        <motion.main
            className="max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <header className="mb-12 flex flex-col md:flex-row md:items-stretch gap-2 relative">
                <BackLink dark={dark} />
                <ThemeToggleButton dark={dark} onToggle={toggleTheme} />
            </header>
            <Section title="Experience" dark={dark}>
                <div className="relative ml-2">
                    {/* Timeline line */}
                    <div
                        className={`absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-current to-transparent ${theme.line}`}
                    />

                    {experience.map((company) =>
                        company.roles.map((role, roleIndex) => (
                            <motion.div
                                key={role.title + role.period}
                                className="relative pl-8 mb-5"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                    delay: roleIndex * 0.08,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 top-2 flex items-center justify-center">
                                    <div
                                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${theme.dotOuter}`}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full ${theme.dotInner}`}
                                        />
                                    </div>
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className={`p-4 border shadow-sm hover:shadow-md transition
            ${theme.card} ${theme.border}`}
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`text-base font-semibold ${theme.textPrimary}`}>
                                            {role.title}
                                        </h3>

                                        <span className={`text-xs ${theme.textMuted}`}>
                                            {role.period}
                                        </span>
                                    </div>

                                    {/* Company */}
                                    <p className={`text-sm mb-3 ${theme.textSecondary}`}>
                                        {company.name}
                                    </p>

                                    {/* Description */}
                                    {role.description && (
                                        <p className={`text-sm leading-relaxed mb-3 ${theme.textSecondary}`}>
                                            {role.description}
                                        </p>
                                    )}

                                    {/* Projects */}
                                    {role.projects && (
                                        <div className="space-y-2">
                                            {role.projects.map((project, i) => (
                                                <motion.div
                                                    key={project.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                >
                                                    <p className={`text-sm font-medium ${theme.textPrimary}`}>
                                                        {project.name}
                                                    </p>
                                                    <p className={`text-sm ${theme.textSecondary}`}>
                                                        {project.description}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))
                    )}
                </div>
            </Section>
        </motion.main>
    );
}