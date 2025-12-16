import { GoogleGenAI } from "@google/genai";

export const generateProductDescription = async (productName: string, category: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key is missing. Returning mock data.");
      return "Gemini API Key is missing. Please check your environment variables to enable AI generation.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are a professional industrial copywriter for 'De Yun Technology'.
      Write a concise, professional, and technical product description (approx 40-60 words) for a product named "${productName}" in the category "${category}".
      Focus on durability, efficiency, and industrial application.
      Do not use markdown formatting. Just plain text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Description generation failed.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Error connecting to AI service. Please try again manually.";
  }
};