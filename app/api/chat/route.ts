import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { resume } from "../../../data/resume";
import { experience } from "@/data/experience";

export const runtime = "edge";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY!,
});

const portfolioContext = `
You are an AI assistant that ONLY answers based on Rodjean Verzosa's portfolio.

Rules:
- Only use the provided portfolio data
- If question is unrelated to Rodjean's skills, experience, education, or projects, respond:
  "I can only answer questions related to Rodjean Verzosa's professional portfolio."
- Do NOT guess or invent information
- Be concise and professional
- Focus on software engineering, experience, skills, and projects

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
