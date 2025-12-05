npx create-next-app@latest code-venture --typescript --tailwind --eslint
cd code-venture
npx shadcn@latest init
# (Choose "New York", "Slate", and "CSS Variables" for the best look)

# Install ShadCN components
npx shadcn@latest add button card progress tabs avatar sheet resizable scroll-area badge tooltip textarea label

# Install icons and Genkit (assuming you will configure Genkit locally)
npm install lucide-react @genkit-ai/flow @genkit-ai/core
