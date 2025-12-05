import { Trophy, Zap, Star, Shield } from "lucide-react";

export const USER = {
  name: "Arjun",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop",
  points: 1240,
  completedChallenges: ["c1", "c2"],
  badges: [
    { id: "b1", name: "Bug Hunter", icon: "Zap", description: "Fixed 5 bugs without hints" },
    { id: "b2", name: "Night Owl", icon: "Star", description: "Completed a challenge after 12 AM" },
  ]
};

export const WORLDS = [
  {
    id: "w1",
    title: "JavaScript Galaxy",
    description: "Master the fundamentals of the web's language.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    challenges: ["c1", "c2", "c3"]
  },
  {
    id: "w2",
    title: "Styling Nebulae",
    description: "Craft beautiful UIs with CSS and Tailwind.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop",
    challenges: ["c4", "c5"]
  }
];

export const CHALLENGES = [
  {
    id: "c1",
    worldId: "w1",
    title: "Variable Velocity",
    description: "Declare a variable 'speed' and assign it the value 100.",
    difficulty: "Easy",
    initialCode: "// Write your code here\nlet speed = ",
    completed: true,
  },
  {
    id: "c3",
    worldId: "w1",
    title: "Looping Orbit",
    description: "Create a for loop that iterates from 0 to 10.",
    difficulty: "Medium",
    initialCode: "// Start your orbit\nfor (let i = 0; i < ",
    completed: false,
  }
];

