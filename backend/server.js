// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { faqData } from "../src/Components/MCQChat/faqData.js";
import { mcqData } from "../src/Components/MCQChat/faqData.js"; // backend path

app.get("/mcq", (req, res) => {
  res.json(mcqData);
});
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend Running"));

app.post("/chat", (req, res) => {
  const { message } = req.body;
  const query = message.toLowerCase();

  let answer = "I can only answer questions related to Smiling Star.";

  // loop through topics and subtopics
  for (let topic of faqData) {
    const topicKeywords = topic.topic.toLowerCase().split(" "); // simple keywords
    if (topicKeywords.some(k => query.includes(k))) {
      // if query matches topic, show subtopics
      answer = topic.subtopics.map(s => `${s.title}: ${s.info}`).join("\n");
      break;
    }
    for (let sub of topic.subtopics) {
      const subKeywords = sub.title.toLowerCase().split(" ");
      if (subKeywords.some(k => query.includes(k))) {
        answer = sub.info;
        break;
      }
    }
  }

  res.json({ reply: answer });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));