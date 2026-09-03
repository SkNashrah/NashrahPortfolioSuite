export type ThemeId = "plum" | "sapphire" | "emerald" | "obsidian" ;
export type ThemeMode = "dark" | "light";

export interface ThemeOptions{
  id: ThemeId;
  name: string;
  tag: string;
  primaryColor: string;
  gradient: string; 
}

export const THEMES: ThemeOptions[] = [
  {
    id: "plum",
    name: "Plum & Rose Gold",
    tag: "Warm Editorial Luxury",
    primaryColor: "#8B3A5C",
    gradient: "linear-gradient(135deg, #8B3A5C, #B98BD9)",
  },
  {
    id: "sapphire",
    name: "Cyber Sapphire & Violet",
    tag: "Modern Tech & AI",
    primaryColor: "#6366F1",
    gradient: "linear-gradient(135deg, #6366F1, #A855F7)",
  },
  {
    id: "emerald",
    name: "Emerald Aurora & Gold",
    tag: "Organic Luxury & Calm",
    primaryColor: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #F59E0B)",
  },
  {
    id: "obsidian",
    name: "Obsidian & Sunset Coral",
    tag: "Bold Minimalist",
    primaryColor: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B, #FFC107)",
  },
]