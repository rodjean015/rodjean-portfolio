import Link from "next/link";

export default function Section({
    title,
    children,
    dark = true,
    moreHref,
}: {
    title: string;
    children: React.ReactNode;
    dark?: boolean;
    moreHref?: string;
}) {
    return (
        <section
            className={`mb-2 p-5 border transition ${dark ? "bg-neutral-900/40 border-neutral-800" : "bg-white border-neutral-200"}`} >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className={`text-lg font-semibold flex items-center gap-2 ${dark ? "text-neutral-100" : "text-neutral-900"}`}>
                    <span
                        className={`w-2 h-2 rounded-full ${dark ? "bg-neutral-400" : "bg-neutral-500"}`}
                    />
                    {title}
                </h2>

                {moreHref && (
                    <Link
                        href={moreHref}
                        className={`text-xs px-2 py-1 border rounded-md transition ${dark
                            ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                            : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                            }`}
                    >
                        View more →
                    </Link>
                )}
            </div>

            {/* Content */}
            <div
                className={`
                    space-y-4 pl-4 border-l
                    ${dark ? "border-neutral-800" : "border-neutral-200"}`}
            >
                {children}
            </div>
        </section>
    );
}