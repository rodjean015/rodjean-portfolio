"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type FloatingAIButtonProps = {
    onClick?: () => void;
    dark?: boolean;
};

export default function FloatingAIButton({
    onClick,
    dark = true,
}: FloatingAIButtonProps) {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group">
            {/* Tooltip */}
            <span
                className={`absolute right-12 md:right-14 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition
                ${dark ? "bg-neutral-800 text-neutral-200" : "bg-neutral-100 text-white"}
                `}
            >
                Chat with AI
            </span>

            {/* Button */}
            <motion.button
                onClick={onClick}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center
                    w-12 h-12 md:w-14 md:h-14
                    rounded-full shadow-lg transition
                    ${dark
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-black text-white hover:bg-neutral-800"}
                `}
            >
                <MessageCircle size={18} className="md:w-[22px] md:h-[22px]" />
            </motion.button>
        </div>
    );
}