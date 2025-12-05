import { defineFlow, z } from '@genkit-ai/flow';
import { generate } from '@genkit-ai/ai';
import { gpt4 } from '@genkit-ai/openai'; // Or your preferred model

export const suggestCodeFlow = defineFlow(
  {
    name: 'suggestCode',
    inputSchema: z.object({
      code: z.string(),
      description: z.string(),
    }),
    outputSchema: z.string(),
  },
  async ({ code, description }) => {
    const prompt = `
      You are a helpful coding tutor for a student.
      Challenge: ${description}
      Current Code: ${code}
      
      Provide a short, helpful hint or suggestion to move forward. Do not give the full answer immediately.
    `;
    
    const response = await generate({
      model: gpt4,
      prompt: prompt,
    });

    return response.text();
  }
);
