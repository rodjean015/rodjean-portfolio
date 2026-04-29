export default function ResumeItem({
    title,
    subtitle,
    period,
    description,
    link,
    dark = true,
}: {
    title?: string;
    subtitle?: string;
    period?: string;
    description?: string;
    link?: string;
    dark?: boolean;
}) {
    return (
        <div className="mb-4">
            {/* Header */}
            <div className="flex justify-between items-start gap-4">
                <h1 className={`font-medium ${dark ? "text-neutral-200" : "text-neutral-900"}`}>
                    {title}
                </h1>

                <div className="flex items-center gap-2">
                    {period && (
                        <span className={`text-sm ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
                            {period}
                        </span>
                    )}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border transition
                                ${dark
                                    ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                                    : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                                }
                            `}
                        >
                            {/* external link icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>

                            View
                        </a>
                    )}
                </div>
            </div>

            {/* Subtitle */}
            {subtitle && (
                <p className={`text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                    {subtitle}
                </p>
            )}

            {/* Description */}
            {description && (
                <p className={`text-sm mt-1 ${dark ? "text-neutral-300" : "text-neutral-700"}`}>
                    {description}
                </p>
            )}
        </div>
    );
}