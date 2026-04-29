"use client";
import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import { resume } from "@/data/resume";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import BackLink from "@/components/ui/BackButton";

export default function ExperiencePage() {
    const { dark, setDark } = useTheme();
    const toggleTheme = () => setDark(prev => !prev);
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <header className="mb-12 flex flex-col md:flex-row md:items-stretch gap-8 relative">
                <BackLink dark={dark} />
                <ThemeToggleButton dark={dark} onToggle={toggleTheme} />
            </header>
            <Section title="Projects" dark={dark}>
                {resume.projects.map((proj) => (
                    <ResumeItem
                        key={proj.name}
                        title={proj.name}
                        description={proj.description}
                        dark={dark}
                    />
                ))}
            </Section>

        </main>
    );
}