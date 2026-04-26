"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useChat } from "@/hooks/useChat";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function ChatPanel({ open, onClose }: Props) {
    const { messages, sendMessage, loading } = useChat();
    const [input, setInput] = useState("");

    const handleSend = async () => {
        await sendMessage(input);
        setInput("");
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        className="
              fixed bottom-6 right-6
              w-[92vw] sm:w-[420px] h-[75vh]
              bg-white dark:bg-neutral-900
              text-neutral-900 dark:text-neutral-100
              z-50 rounded-2xl shadow-2xl
              flex flex-col
              border border-neutral-200 dark:border-neutral-800
            "
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-neutral-200 dark:border-neutral-800">
                            <h2 className="text-sm font-medium">AI Assistant</h2>
                            <button
                                onClick={onClose}
                                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={`max-w-[85%] px-3 py-2 rounded-lg break-words ${m.role === "user"
                                            ? "ml-auto bg-black text-white dark:bg-white dark:text-black"
                                            : "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                                        }`}
                                >
                                    {m.content}
                                </div>
                            ))}

                            {loading && (
                                <div className="text-xs text-neutral-500">
                                    AI is typing...
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="
                  flex-1 text-sm px-3 py-2 rounded-md
                  border border-neutral-300 dark:border-neutral-700
                  bg-white dark:bg-neutral-900
                  text-neutral-900 dark:text-neutral-100
                  outline-none
                "
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSend();
                                }}
                            />

                            <button
                                onClick={handleSend}
                                className="
                                    px-3 py-2 text-sm rounded-md
                                    bg-black text-white
                                    dark:bg-white dark:text-black
                                    hover:opacity-90 transition
                                    "
                            >
                                Send
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}