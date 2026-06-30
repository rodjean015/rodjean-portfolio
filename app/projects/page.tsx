"use client";

import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import { resume } from "@/data/resume";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import BackLink from "@/components/ui/BackButton";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    const { dark, setDark } = useTheme();
    const toggleTheme = () => setDark(prev => !prev);

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
            <Section title="Projects" dark={dark}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resume.projects.map((proj) => (
                        <ResumeItem
                            key={proj.name}
                            title={proj.name}
                            description={proj.description}
                            link={proj.link}
                            dark={dark}
                        />
                    ))}
                </div>
            </Section>
        </motion.main>
    );
}
