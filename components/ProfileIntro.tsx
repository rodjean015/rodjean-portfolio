import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { Mail } from "lucide-react";

type Resume = {
    name: string;
    title: string;
    contact: {
        location: string;
        github: string;
        linkedin: string;
        email: string;
    };
};

type ProfileIntroProps = {
    resume: Resume;
    dark: boolean;
};

export default function ProfileIntro({ resume, dark }: ProfileIntroProps) {
    return (
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">
                {resume.name}
            </h1>

            <p className="mt-1">{resume.title}</p>

            <div
                className={`mt-4 flex flex-col gap-2 text-sm ${dark ? "text-neutral-400" : "text-neutral-700"
                    }`}
            >
                {/* Location */}
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={16} />
                    <span>{resume.contact.location}</span>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                    {[
                        {
                            icon: FaGithub,
                            label: "GitHub",
                            url: resume.contact.github,
                        },
                        {
                            icon: FaLinkedin,
                            label: "LinkedIn",
                            url: resume.contact.linkedin,
                        },
                        {
                            icon: Mail,
                            label: "Email",
                            url: `mailto:${resume.contact.email}`,
                        },
                    ].map(({ icon: Icon, label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <Icon size={16} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}