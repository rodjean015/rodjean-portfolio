"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type FloatingAIButtonProps = {
    onClick?: () => void;
    dark?: boolean;
};

export default function FloatingAIButton({
    onClick,
    dark = false,
}: FloatingAIButtonProps) {
    return (
        <div className="fixed bottom-6 right-6 z-50 group">
            {/* Tooltip */}
            <span
                className={`absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition
          ${dark
                        ? "bg-neutral-800 text-neutral-200"
                        : "bg-neutral-900 text-white"
                    }
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
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition
          ${dark
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-black text-white hover:bg-neutral-800"
                    }
        `}
            >
                <MessageCircle size={22} />
            </motion.button>
        </div>
    );
}