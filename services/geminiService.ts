
import { GoogleGenAI, Type } from "@google/genai";
import { ThreadResult, ThreadPost, GroundingSource } from "../types";

export const generateXThread = async (youtubeUrl: string): Promise<ThreadResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Analyze the following YouTube video content: ${youtubeUrl}.
    
    1. First, search for a detailed summary or transcript of this video to understand its core message, key takeaways, and tone.
    2. Create a high-engagement X (Twitter) thread consisting of 5 to 8 posts.
    3. The first post should be a powerful "hook" that stops the scroll.
    4. Subsequent posts should break down the main points with clarity, using bullet points or short paragraphs.
    5. The final post should include a call to action or a thought-provoking conclusion.
    6. Use appropriate emojis to make it visually appealing.
    7. Return the response in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A brief one-sentence summary of the video."
            },
            posts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  content: { type: Type.STRING }
                },
                required: ["id", "content"]
              }
            }
          },
          required: ["summary", "posts"]
        }
      },
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources: GroundingSource[] = groundingChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        title: chunk.web.title || "Reference",
        uri: chunk.web.uri
      }));

    return {
      summary: data.summary,
      posts: data.posts,
      sources: sources
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate thread. Please check your URL and try again.");
  }
};
