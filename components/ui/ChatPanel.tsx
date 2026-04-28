"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@/hooks/useChat";

type Props = {
    open: boolean;
    onClose: () => void;
    dark?: boolean;
};

export default function ChatPanel({ open, onClose, dark = false }: Props) {
    const { messages, sendMessage, loading } = useChat();
    const [input, setInput] = useState("");
    const [showScrollButton, setShowScrollButton] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSend = async () => {
        if (!input.trim()) return;
        await sendMessage(input);
        setInput("");
    };

    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;

        const isNotAtBottom =
            el.scrollHeight - el.scrollTop - el.clientHeight > 80;

        setShowScrollButton(isNotAtBottom);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{
                            y: "100%",
                            opacity: 0,
                            skewY: 6,
                            scale: 0.98,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            skewY: 0,
                            scale: 1,
                        }}
                        exit={{
                            y: "100%",
                            opacity: 0,
                            skewY: 6,
                            scale: 0.98,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 240,
                            damping: 26,
                            mass: 0.9,
                        }}
                        drag="y"
                        dragDirectionLock
                        dragElastic={0.2}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 120) {
                                onClose();
                            }
                        }}
                        className={`
        fixed z-50 shadow-2xl flex flex-col border
        bottom-0 left-1/2 -translate-x-1/2
        sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0
        w-[100vw] sm:w-[420px] h-[75vh]
        rounded-t-2xl sm:rounded-none
        origin-bottom
        [transform-perspective:1000px]
        ${dark
                                ? "bg-zinc-900/95 backdrop-blur-xl text-neutral-100 border-neutral-800"
                                : "bg-white/90 backdrop-blur-xl text-neutral-900 border-neutral-200"}
    `}
                    >
                        {/* Header */}
                        <div
                            className={`
                                flex justify-between items-center p-4 border-b
                                ${dark ? "border-neutral-800" : "border-neutral-200"}
                            `}
                        >

                            {/* Title + online status */}
                            <div className="flex items-center gap-4">
                                <img
                                    src="/profile-assistant.png"
                                    alt="AI"
                                    className="w-9 h-9 rounded-full object-cover bg-zinc-200"
                                />

                                {/* name + status stacked */}
                                <div className="flex flex-col leading-tight">
                                    <h2 className="text-sm font-medium">Rodjean's Assistant</h2>

                                    {/* online badge */}
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                        </span>

                                        <span
                                            className={`
                                                text-[11px]
                                                ${dark ? "text-neutral-400" : "text-neutral-500"}
                                            `}
                                        >
                                            Online
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className={`
                                    transition
                                    ${dark
                                        ? "text-neutral-400 hover:text-white"
                                        : "text-neutral-500 hover:text-black"}
                                `}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={containerRef}
                            onScroll={handleScroll}
                            className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {/* AI avatar */}
                                    {m.role !== "user" && (
                                        <div className="relative w-7 h-7">
                                            <img
                                                src="/profile-assistant.png"
                                                alt="AI"
                                                className="w-7 h-7 rounded-full object-cover bg-zinc-200"
                                            />

                                            {/* online badge */}
                                            <span
                                                className="
                                                absolute bottom-0 right-0
                                                w-2.5 h-2.5
                                                rounded-full
                                                bg-green-500
                                                border-2
                                                border-white
                                                dark:border-neutral-900
                                            "
                                            />
                                        </div>
                                    )}

                                    <div
                                        className={`
                                            max-w-[75%] px-3 py-2 rounded-lg break-words
                                            ${m.role === "user"
                                                ? dark
                                                    ? "bg-white text-black"
                                                    : "bg-black text-white"
                                                : dark
                                                    ? "bg-neutral-800 text-neutral-200"
                                                    : "bg-neutral-200 text-neutral-900"
                                            }
                                        `}
                                    >
                                        {m.content}
                                    </div>

                                    {/* User avatar */}
                                    {/* {m.role === "user" && (
                                        <img
                                            src="/user-avatar.png"
                                            alt="User"
                                            className="w-7 h-7 rounded-full object-cover"
                                        />
                                    )} */}
                                </div>
                            ))}

                            {loading && (
                                <div className={dark ? "text-neutral-400 text-xs" : "text-neutral-500 text-xs"}>
                                    AI is typing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                            {showScrollButton && (
                                <button
                                    onClick={() =>
                                        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className={`
                                        absolute bottom-20 left-1/2 -translate-x-1/2
                                        px-3 py-1 text-xs rounded-full shadow-md
                                        transition
                                        ${dark ? "bg-white text-black" : "bg-black text-white"}
                                    `}
                                >
                                    ↓ New messages
                                </button>
                            )}
                        </div>

                        {/* Input */}
                        <div
                            className={`
                                p-3 border-t flex gap-2
                                ${dark ? "border-neutral-800" : "border-neutral-200"}
                            `}
                        >
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className={`
                                    flex-1 text-sm px-3 py-2 rounded-md
                                    border outline-none
                                    ${dark
                                        ? "bg-neutral-900 text-neutral-100 border-neutral-700"
                                        : "bg-white text-neutral-900 border-neutral-300"
                                    }
                                `}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSend();
                                }}
                            />

                            <button
                                onClick={handleSend}
                                className={`
                                    px-3 py-2 text-sm rounded-md transition
                                    ${dark
                                        ? "bg-white text-black hover:opacity-90"
                                        : "bg-black text-white hover:opacity-90"}
                                `}
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