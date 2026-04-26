import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type ThemeToggleButtonProps = {
    dark: boolean;
    onToggle: () => void;
};

export default function ThemeToggleButton({
    dark,
    onToggle,
}: ThemeToggleButtonProps) {
    return (
        <button
            onClick={onToggle}
            className={`absolute top-0 right-0 flex items-center w-14 h-7 rounded-full p-1 transition
                ${dark
                    ? "bg-neutral-800 shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                    : "bg-neutral-300"
                }
            `}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md
                    ${dark ? "bg-neutral-200" : "bg-white"}
                `}
                animate={{
                    x: dark ? 24 : 0,
                }}
            >
                <motion.div
                    key={dark ? "moon" : "sun"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {dark ? (
                        <Moon size={12} className="text-neutral-700" />
                    ) : (
                        <Sun size={12} className="text-yellow-500" />
                    )}
                </motion.div>
            </motion.div>
        </button>
    );
}