import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import db from "./db.js";

/* ===============================
   ENV + PATH SETUP (ES MODULES)
================================ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Force-load .env from backend folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

/* ===============================
   EXPRESS SETUP
================================ */
const app = express();
app.use(cors());
app.use(express.json());

console.log(
  "OPENROUTER KEY LOADED:",
  process.env.OPENROUTER_API_KEY ? "YES" : "NO"
);

/* ===============================
   OPENROUTER CLIENT (IMPORTANT)
================================ */
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    // 🔴 REQUIRED by OpenRouter
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "Smiling Star AI Assistant",
  },
});

/* ===============================
   LOAD KNOWLEDGE FILE
================================ */
const dataPath = path.join(__dirname, "data", "smilingstar.txt");
const knowledgeBase = fs.readFileSync(dataPath, "utf-8");

/* ===============================
   SIMPLE RAG (PHASE 1)
================================ */
function retrieveRelevantText(question) {
  const words = question.toLowerCase().split(/\s+/);
  const lines = knowledgeBase.split("\n");

  const relevant = lines.filter((line) =>
    words.some((word) => line.toLowerCase().includes(word))
  );

  return relevant.slice(0, 8).join("\n");
}

/* ===============================
   CHAT ENDPOINT
================================ */

app.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.json({ answer: "Please ask a question." });
    }

    // 1️⃣ Retrieve relevant context
    const context = retrieveRelevantText(question);

    // 2️⃣ Call AI
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Sky, Smiling Star’s AI assistant. Answer ONLY using the provided context. If the answer is not present, say you don’t know.",
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion:\n${question}`,
        },
      ],
      temperature: 0.2,
    });

    const aiAnswer = completion.choices[0].message.content;

    // 3️⃣ SAVE CHAT TO DATABASE ✅ (THIS WAS MISSING)
    await db.execute(
      "INSERT INTO chat_logs (user_message, ai_response) VALUES (?, ?)",
      [question, aiAnswer]
    );

    // 4️⃣ Send response to frontend
    res.json({
      answer: aiAnswer,
    });

  } catch (err) {
    console.error("OPENROUTER ERROR:");
    console.error(err.response?.data || err.message);

    res.status(500).json({
      answer: "AI service error. Please try again.",
    });
  }
});

/* ===============================
   START SERVER
================================ */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});