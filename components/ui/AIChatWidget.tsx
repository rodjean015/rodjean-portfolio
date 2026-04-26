"use client";

import { useState } from "react";
import ChatPanel from "@/components/ui/ChatPanel";
import FloatingAIButton from "./ChatAgentButton";

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <FloatingAIButton onClick={() => setOpen(true)} />
            <ChatPanel open={open} onClose={() => setOpen(false)} />
        </>
    );
}