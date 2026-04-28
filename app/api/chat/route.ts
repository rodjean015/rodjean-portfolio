import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { resume } from "../../../data/resume";
import { experience } from "@/data/experience";

export const runtime = "edge";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY!,
});

const portfolioContext = `
You are an AI assistant for Rodjean Verzosa's professional portfolio.

RULES:
- You MUST only use the provided portfolio data for career-related questions
- Do NOT hallucinate or invent information
- Be concise and professional

IMPORTANT BEHAVIOR RULES:
- You ARE allowed to respond to greetings and casual messages (e.g. "hi", "hello", "good morning")
- For greetings, respond naturally and briefly (e.g. "Hello! How can I help you with Rodjean's portfolio?")
- If the question is unrelated to Rodjean's professional background, respond exactly:
  "I can only answer questions related to Rodjean Verzosa's professional portfolio."

WHAT YOU CAN ANSWER:
- Experience
- Skills
- Projects
- Education
- Career background
- Greetings and basic conversational messages

WHAT YOU CANNOT DO:
- Guess missing portfolio information
- Answer unrelated general knowledge questions

---

PORTFOLIO DATA:
${JSON.stringify(resume, null, 2)}

---
${JSON.stringify(experience, null, 2)}
`;

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = await streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages: [
      {
        role: "system",
        content: portfolioContext,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return result.toTextStreamResponse();
}
