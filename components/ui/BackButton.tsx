import Link from "next/link";

export default function BackLink({ dark = false, href = "/" }) {
    return (
        <Link
            href={href}
            className={`text-sm transition flex items-center gap-2 ${dark
                    ? "text-neutral-400 hover:text-neutral-200"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
        >
            ← Back
        </Link>
    );
}