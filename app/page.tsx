"use client";

import { resume } from "@/data/resume";
import { useEffect } from "react";
import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import SkillBadge from "@/components/SkillBadge";
import Profile from "@/components/Profile";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import ProfileIntro from "@/components/ProfileIntro";
import { useTheme } from "@/hooks/useTheme";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const { dark, setDark } = useTheme();

  const toggleTheme = () => setDark(prev => !prev);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main>
      {/* Header */}
      <header className="mb-8 flex flex-row items-center gap-6 relative">
        <ThemeToggleButton dark={dark} onToggle={toggleTheme} />
        <Profile dark={dark} />
        <div className="flex-1">
          <ProfileIntro resume={resume} dark={dark} />
        </div>
      </header>

      <Section title="Summary" dark={dark}>
        <ResumeItem
          description={resume.summary}
          dark={dark}
        />
      </Section>

      <Section title="Experience" dark={dark} moreHref="/experience">
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

      <Section title="Projects" dark={dark} moreHref="/projects">
        {resume.projects.map((proj) => (
          <ResumeItem
            key={proj.name}
            title={proj.name}
            description={proj.description}
            dark={dark}
          />
        ))}
      </Section>

      <Section title="Tech Skills" dark={dark} moreHref="/tech">
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill} dark={dark} />
          ))}
        </div>
      </Section>

      <Section title="Education" dark={dark}>
        {resume.education.map((edu) => (
          <ResumeItem
            key={edu.school + edu.degree}
            title={edu.school}
            subtitle={edu.degree}
            description={edu.period}
            dark={dark}
          />
        ))}
      </Section>
      <Footer dark={dark} />
    </main>
  );
}