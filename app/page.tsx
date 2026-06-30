"use client";

import { resume } from "@/data/resume";
import { useState } from "react";
import Section from "@/components/Section";
import ResumeItem from "@/components/ResumeItem";
import SkillBadge from "@/components/SkillBadge";
import Profile from "@/components/Profile";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import ProfileIntro from "@/components/ProfileIntro";
import { useTheme } from "@/hooks/useTheme";
import Footer from "@/components/Footer";
import FloatingAIButton from "@/components/ui/FloatingAIButton";
import ChatPanel from "@/components/ui/ChatPanel";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

const SKILL_CATEGORIES: { label: string; skills: string[] }[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "Python", "PHP", ".Net"] },
  { label: "Frontend", skills: ["React", "Next.js", "Angular", "Tailwind CSS"] },
  { label: "Backend & Data", skills: ["Node.js", "MongoDB", "SMS API"] },
  { label: "Cloud & DevOps", skills: ["GCP", "AWS", "Vercel"] },
  { label: "Mobile", skills: ["Mobile App Development", "React Native", "Ionic", "Android", "IOS"] },
  { label: "AI & IoT", skills: ["Tensor Flow", "Scikit Learn", "Machine Learning", "Arduino"] },
];

const PROJECTS_PREVIEW_COUNT = 4;

export default function Home() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setDark(prev => !prev);
  return (
    <main>
      {/* Header */}
      <header className="mb-8 flex flex-row items-stretch gap-6 relative">
        <BackgroundGrid dark={dark} />
        <ThemeToggleButton dark={dark} onToggle={toggleTheme} />
        <Profile dark={dark} />
        <div className="flex-1 min-w-0 pr-12 md:pr-0">
          <ProfileIntro resume={resume} dark={dark} />
        </div>
      </header>

      <Section title="Summary" dark={dark}>
        <ResumeItem
          description={resume.summary}
          dark={dark}
        />
      </Section>

      <Section title="Experience" dark={dark} moreHref="/experience" borderLeft>
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

      <Section
        title="Projects"
        dark={dark}
        borderLeft
        moreHref={resume.projects.length > PROJECTS_PREVIEW_COUNT ? "/projects" : undefined}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
          {resume.projects.slice(0, PROJECTS_PREVIEW_COUNT).map((proj) => (
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

      <Section title="Tech Skills" dark={dark} borderLeft>
        <div className="space-y-4">
          {SKILL_CATEGORIES.map(({ label, skills }) => {
            const matched = skills.filter((s) => resume.skills.includes(s));
            if (matched.length === 0) return null;
            return (
              <div key={label}>
                <h3
                  className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dark ? "text-neutral-500" : "text-neutral-500"
                    }`}
                >
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {matched.map((skill) => (
                    <SkillBadge key={skill} skill={skill} dark={dark} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Education" dark={dark} borderLeft>
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

      <Section title="Certification" dark={dark} borderLeft>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {resume.certificate.map((crt) => (
            <ResumeItem
              key={crt.title}
              title={crt.title}
              description={crt.period}
              dark={dark}
            />
          ))}
        </div>
      </Section>
      <Footer dark={dark} />
      <FloatingAIButton onClick={() => setOpen(true)} dark={dark} />
      <ChatPanel open={open} onClose={() => setOpen(false)} dark={dark} />
    </main>
  );
}