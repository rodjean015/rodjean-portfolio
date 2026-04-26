import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

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
        <div className="flex-1 flex flex-col justify-center text-left">
            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center justify-start gap-2">
                {resume.name}
                <CheckBadgeIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </h1>

            {/* Title */}
            <p className="mt-1 text-sm md:text-base">
                {resume.title}
            </p>

            {/* Contact block */}
            <div
                className={`mt-3 md:mt-4 flex flex-col gap-2 text-xs md:text-sm ${dark ? "text-neutral-400" : "text-neutral-700"
                    }`}
            >
                {/* Location */}
                <div className="flex items-center justify-start gap-2">
                    <MapPin size={14} className="md:w-4 md:h-4" />
                    <span>{resume.contact.location}</span>
                </div>

                {/* Links */}
                <div className="flex items-center justify-start gap-4">
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
                            className="flex items-center gap-2 hover:opacity-80 transition text-xs md:text-sm"
                        >
                            <Icon size={14} className="md:w-4 md:h-4" />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}