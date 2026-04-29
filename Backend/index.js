import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PERSONAS } from "./prompts.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ Ensure API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message, personaId } = req.body;

    // ✅ Validation
    if (!message || !personaId) {
      return res.status(400).json({ error: "Message and personaId required" });
    }

    const persona = PERSONAS.find((p) => p.id === personaId);
    if (!persona) {
      return res.status(400).json({ error: "Invalid persona" });
    }

    // ✅ Model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // ✅ Build prompt (IMPORTANT FIX: no systemInstruction)
    const fullPrompt = `
${persona.system}

INSTRUCTIONS:
- Keep response short (4-5 lines)
- Stay in character as ${persona.name}

User: ${message}
`;

    // ✅ Gemini call
    const result = await model.generateContent(fullPrompt);

    // ✅ Safe response extraction (IMPORTANT FIX)
    const response =
      result?.response?.text?.() || "Sorry, I couldn't generate a response.";

    // ✅ Send response
    res.json({
      response,
      persona: persona.name,
    });

  } catch (err) {
    console.error("🔥 SERVER ERROR:", err);

    res.status(500).json({
      error: err.message || "Internal server error",
    });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});