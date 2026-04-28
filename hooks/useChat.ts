"use client";

import { getGreeting } from "@/utils/greeting";
import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      role: "assistant",
      content: `${getGreeting()} I'm Rodjean's AI portfolio assistant. How can I help you?`,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Add empty assistant message
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: text }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);

        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1].content += chunk;
          return copy;
        });
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
}
