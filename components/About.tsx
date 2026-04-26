export default function About({
    summary,
    dark = true,
}: {
    summary: string;
    dark?: boolean;
}) {
    return (
        <section className="mb-8">

            {/* Title */}
            <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${dark ? "text-neutral-100" : "text-neutral-900"}`}>Summary</h2>

            {/* Card */}
            <div className={`p-5 border shadow-sm hover:shadow-md transition ${dark ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"}`}>
                <p className={`text-sm leading-relaxed ${dark ? "text-neutral-300" : "text-neutral-700"}`}>
                    {summary}
                </p>
            </div>
        </section>
    );
}