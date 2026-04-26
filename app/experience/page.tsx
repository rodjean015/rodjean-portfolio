"use client";
import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import { resume } from "@/data/resume";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import Link from "next/link";
import BackLink from "@/components/ui/BackButton";

export default function ExperiencePage() {
    const { dark, setDark } = useTheme();
    const toggleTheme = () => setDark(prev => !prev);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <header className="mb-12 flex flex-col md:flex-row md:items-stretch gap-8 relative">
                <BackLink dark={dark} />
                <ThemeToggleButton dark={dark} onToggle={toggleTheme} />
            </header>
            <Section title="Experience" dark={dark}>
                {resume.experience.map((exp) => (
                    <ResumeItem
                        key={exp.company + exp.role}
                        title={exp.role}
                        subtitle={exp.company}
                        period={exp.period}
                        description={exp.description}
                        dark={dark}
                    />
                ))}
            </Section>

        </main>
    );
}