import { motion } from "framer-motion";

export default function SkillBadge({
    skill,
    dark = true,
}: {
    skill: string;
    dark?: boolean;
}) {
    return (
        <motion.span
            initial="rest"
            animate="rest"
            whileHover="hover"
            className={`
                relative overflow-hidden
                px-3 py-1 text-xs font-medium rounded-full
                border shadow-sm cursor-default
                transition

                bg-gradient-to-r from-neutral-200 to-neutral-100
                ${dark
                    ? "text-neutral-200 border-neutral-700 from-neutral-800 to-neutral-900"
                    : "text-neutral-700 border-neutral-300"
                }
            `}
        >
            {skill}

            {/* Shine overlay */}
            <motion.span
                className="absolute inset-0 -skew-x-12"
                variants={{
                    rest: {
                        x: "-150%",
                        opacity: 0,
                    },
                    hover: {
                        x: "150%",
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                        },
                    },
                }}
            >
                <span
                    className={`
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-white/30 to-transparent
                        ${dark ? "via-white/10" : "via-white/40"}
                    `}
                />
            </motion.span>
        </motion.span>
    );
}