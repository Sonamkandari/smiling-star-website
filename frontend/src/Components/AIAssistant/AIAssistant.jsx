import React, { useState } from "react";
import "./AIAssistant.css";

const predefinedOptions = [
  "About Smiling Star",
  "What services do you provide?",
  "Our latest work",
  "Who do you work with?",
  "How can I contact you?",
  "Join Smiling Star",
  "Ask a general question",
];

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 🌟 I’m Sky, Smiling Star’s AI assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg) => {
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setInput("");
    setShowOptions(false);
    setLoading(true);

    try {
      const res = await fetch("https://smiling-star-website.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: msg }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.answer },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Sorry, I’m having trouble connecting right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ⭐ Floating Star */}
      {!open && (
        <div className="sky-star" onClick={() => setOpen(true)}>
          ⭐
          <span className="sky-label">Sky</span>
        </div>
      )}

      {/* 💬 Chat Window */}
      {open && (
        <div className="ai-assistant-container">
          <div className="ai-assistant-header">
            Sky ✨
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="ai-assistant-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`ai-message ${msg.sender === "user" ? "user" : "ai"}`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="ai-message ai">
                <span className="typing">Sky is typing…</span>
              </div>
            )}
          </div>

          {showOptions && (
            <div className="ai-assistant-options">
              {predefinedOptions.map((opt, idx) => (
                <button key={idx} onClick={() => sendMessage(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}

          <div className="ai-assistant-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sky something…"
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
