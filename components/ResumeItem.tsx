export default function ResumeItem({
    title,
    subtitle,
    period,
    description,
    dark = true,
}: {
    title?: string;
    subtitle?: string;
    period?: string;
    description?: string;
    dark?: boolean;
}) {
    return (
        <div className="mb-4">
            {/* Header */}
            <div className="flex justify-between">
                <h1 className={`font-medium ${dark ? "text-neutral-200" : "text-neutral-900"}`}>
                    {title}
                </h1>

                {period && (
                    <span className={`text-sm ${dark ? "text-neutral-400" : "text-neutral-500"}`}>
                        {period}
                    </span>
                )}
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