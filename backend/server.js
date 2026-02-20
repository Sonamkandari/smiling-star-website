import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  const websiteContent = `
Smiling Star is an NGO-focused organization.
We support NGOs through:
- Project consultation
- CSR partnership guidance
- SDG alignment
- Proposal writing
- Social impact planning
`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Smiling Star"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
You are an assistant for Smiling Star website.
Only answer from the information below.
If unrelated, say:
"I can only answer questions related to Smiling Star."

Website Info:
${websiteContent}
`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data);
      return res.json({ reply: "⚠️ AI service error." });
    }

    res.json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    console.error("Network error:", error.message);
    res.json({
      reply: "⚠️ Unable to connect to AI service."
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});