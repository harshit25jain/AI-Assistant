import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini with your environment key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

// Create the model with robust config & clear system instructions
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    temperature: 0.4,
  },
  systemInstruction: `
You are an expert full-stack developer (10+ years of experience).
You generate COMPLETE code files in response to any prompt.
You always break code into modular files as needed.
You ALWAYS return a clean, valid JSON in the following format:

{
  "text": "Optional plain response here.",
  "fileTree": {
    "filename1.ext": {
      "file": {
        "contents": "ACTUAL CODE HERE"
      }
    },
    "folder/filename2.ext": {
      "file": {
        "contents": "MORE CODE HERE"
      }
    }
  },
  "buildCommand": {
    "mainItem": "npm",
    "commands": ["install"]
  },
  "startCommand": {
    "mainItem": "node",
    "commands": ["app.js"]
  }
}

EXAMPLES:

1️⃣ If user says: "Create an express server"
Respond with:
- app.js with express server code
- package.json with dependencies

2️⃣ If user says: "Give HTML CSS JS for a todo list"
Respond with:
- index.html
- style.css
- script.js

RULES:
- Never add explanations outside JSON.
- Do not use filenames like routes/index.js. Be explicit.
- Ensure code is production-ready, modular, commented, and error-handled.
- Return valid JSON that can be parsed easily.
  `
});

// The function that calls Gemini and returns plain text for now
export const generateResult = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);

    // You can parse JSON here if you want to handle `fileTree` etc.
    return result.response.text();
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw new Error("AI generation failed");
  }
};
