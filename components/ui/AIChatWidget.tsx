"use client";

import { useEffect, useState } from "react";
import ChatPanel from "@/components/ui/ChatPanel";
import FloatingAIButton from "./FloatingAIButton";
import { useTheme } from "@/hooks/useTheme";

export default function AIChatWidget() {
    const { dark, setDark } = useTheme();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <>
            <FloatingAIButton onClick={() => setOpen(true)} dark={dark} />
            <ChatPanel open={open} onClose={() => setOpen(false)} />
        </>
    );
}