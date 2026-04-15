"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";

const groq = process.env.GROQ_API_KEY ? new Groq({ apiKey: process.env.GROQ_API_KEY }) : null;
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

export async function generateGithubQuery(prompt: string) {
  const aiPrompt = `
    You are a GitHub Search Specialist. 
    The user wants to find abandoned or neglected open-source projects they can REVIVE and TAKE OVER.
    Matching this user intent: "${prompt}"
    
    Convert this intent into a technical set of KEYWORDS and FILTERS for the GitHub Search API.
    DO NOT include 'archived:false', 'is:public', or 'pushed' filters, as the system adds those automatically.
    
    Focus on:
    1. Core technologies (e.g., language:python, language:rust, language:java, topic:react)
    2. Functional keywords (e.g., parser, cli, auth, compiler)
    3. Project size/popularity (e.g., stars:>50)
    
    Example 1 Input: "A neglected Python CLI with 1k stars"
    Example 1 Output: "topic:cli language:python stars:>1000"
    
    Example 2 Input: "i want a rust web server"
    Example 2 Output: "topic:web-server language:rust stars:>100"
    
    Example 3 Input: "social media website"
    Example 3 Output: "topic:social-media topic:web-app stars:>50"
    
    Example 4 Input: "machine learning library"
    Example 4 Output: "topic:machine-learning topic:library"
    
    Return ONLY the query string, nothing else. No quotes, no explanations.
  `;

  // Try Groq first for speed
  if (groq) {
    try {
      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: aiPrompt }],
        model: "llama-3.3-70b-versatile",
        temperature: 0.1,
      });

      const text = completion.choices[0]?.message?.content?.trim().replace(/\"/g, "");
      if (text) {
        console.log(`[Groq] "${prompt}" -> "${text}"`);
        return text;
      }
    } catch (error) {
      console.error("Groq Matchmaker Error:", error);
    }
  }

  // Fallback to Gemini
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(aiPrompt);
      const text = result.response.text().trim().replace(/\"/g, "");
      console.log(`[Gemini] "${prompt}" -> "${text}"`);
      return text;
    } catch (error) {
      console.error("Gemini Matchmaker Error:", error);
    }
  }

  // Final fallback: Raw cleaning
  return prompt.replace(/i want to|create a|find me a|help me find/gi, "").trim();
}
