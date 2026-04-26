"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi 👋 How can I help you?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // placeholder assistant message
    const assistantIndex = messages.length + 1;
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      // 🔥 Replace this with real API later
      const res = await fakeStreamResponse(text, (chunk) => {
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          last.content += chunk;
          return copy;
        });
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
}

// fake streaming (replace with real API later)
async function fakeStreamResponse(
  input: string,
  onChunk: (chunk: string) => void,
) {
  const response = `You said: "${input}". This is a streamed response.`;

  for (const char of response) {
    await new Promise((r) => setTimeout(r, 15));
    onChunk(char);
  }
}
