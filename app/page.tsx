"use client";

import { resume } from "@/data/resume";
import { useEffect, useState } from "react";
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

export default function Home() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setDark(prev => !prev);
  return (
    <main>
      {/* Header */}
      <header className="mb-8 flex flex-row items-center gap-6 relative">
        <BackgroundGrid dark={dark} />
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

      <Section title="Projects" dark={dark} borderLeft>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
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

      <Section title="Tech Skills" dark={dark} moreHref="/tech" borderLeft>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill} dark={dark} />
          ))}
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