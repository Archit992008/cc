import { defineFlow, z } from '@genkit-ai/flow';
import { generate } from '@genkit-ai/ai';
import { gpt4 } from '@genkit-ai/openai';

export const debugCodeFlow = defineFlow(
  {
    name: 'debugCode',
    inputSchema: z.object({
      code: z.string(),
      error: z.string(),
    }),
    outputSchema: z.string(),
  },
  async ({ code, error }) => {
    const prompt = `
      The user has encountered an error.
      Code: ${code}
      Error: ${error}
      
      Explain the error in simple terms and suggest a fix.
    `;
    
    const response = await generate({
      model: gpt4,
      prompt: prompt,
    });

    return response.text();
  }
);
