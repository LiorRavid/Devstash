// Mock data for the dashboard UI.
// Single source of truth until the database is wired up. Plain data — no helpers.

export type ItemType = {
  id: string;
  name: string;
  slug: string;
  icon: string; // lucide-react icon name
  color: string; // hex
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  isFavorite: boolean;
  // type slugs the collection holds, shown as the footer icons on the card
  typeSlugs: string[];
};

export type Item = {
  id: string;
  title: string;
  typeSlug: string;
  description: string;
  content: string;
  language: string | null;
  tags: string[];
  collectionIds: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
};

export const currentUser: User = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.com",
  image: null,
  isPro: true,
};

export const itemTypes: ItemType[] = [
  { id: "type_snippet", name: "Snippets", slug: "snippets", icon: "Code", color: "#3b82f6" },
  { id: "type_prompt", name: "Prompts", slug: "prompts", icon: "Sparkles", color: "#8b5cf6" },
  { id: "type_command", name: "Commands", slug: "commands", icon: "Terminal", color: "#f97316" },
  { id: "type_note", name: "Notes", slug: "notes", icon: "StickyNote", color: "#fde047" },
  { id: "type_file", name: "Files", slug: "files", icon: "File", color: "#6b7280" },
  { id: "type_image", name: "Images", slug: "images", icon: "Image", color: "#ec4899" },
  { id: "type_link", name: "Links", slug: "links", icon: "Link", color: "#10b981" },
];

export const collections: Collection[] = [
  {
    id: "col_react_patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    itemCount: 12,
    isFavorite: true,
    typeSlugs: ["snippets", "notes", "links"],
  },
  {
    id: "col_python_snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    itemCount: 8,
    isFavorite: false,
    typeSlugs: ["snippets", "files"],
  },
  {
    id: "col_context_files",
    name: "Context Files",
    description: "AI context files for projects",
    itemCount: 5,
    isFavorite: true,
    typeSlugs: ["files", "notes"],
  },
  {
    id: "col_interview_prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    itemCount: 24,
    isFavorite: false,
    typeSlugs: ["notes", "snippets", "links", "prompts"],
  },
  {
    id: "col_git_commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    itemCount: 15,
    isFavorite: true,
    typeSlugs: ["commands", "files"],
  },
  {
    id: "col_ai_prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    itemCount: 18,
    isFavorite: false,
    typeSlugs: ["prompts", "snippets", "notes"],
  },
];

export const items: Item[] = [
  {
    id: "item_useauth",
    title: "useAuth Hook",
    typeSlug: "snippets",
    description: "Custom authentication hook for React applications",
    content: `import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}`,
    language: "typescript",
    tags: ["react", "auth", "hooks"],
    collectionIds: ["col_react_patterns"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "item_api_error",
    title: "API Error Handling Pattern",
    typeSlug: "snippets",
    description: "Fetch wrapper with exponential backoff retry logic",
    content: `async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options)
      if (!res.ok) throw new Error(res.statusText)
      return await res.json()
    } catch (err) {
      if (i === retries - 1) throw err
      await new Promise(r => setTimeout(r, 2 ** i * 1000))
    }
  }
}`,
    language: "javascript",
    tags: ["api", "fetch", "error-handling"],
    collectionIds: ["col_react_patterns", "col_interview_prep"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12",
  },
  {
    id: "item_git_undo",
    title: "Undo Last Commit",
    typeSlug: "commands",
    description: "Soft reset to keep changes staged",
    content: "git reset --soft HEAD~1",
    language: "bash",
    tags: ["git", "reset"],
    collectionIds: ["col_git_commands"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-11",
  },
  {
    id: "item_code_review_prompt",
    title: "Code Review Prompt",
    typeSlug: "prompts",
    description: "Prompt for thorough code review with focus on edge cases",
    content:
      "Review the following code for correctness, edge cases, and security issues. Be concise and point to specific lines.",
    language: null,
    tags: ["ai", "review"],
    collectionIds: ["col_ai_prompts"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-09",
  },
  {
    id: "item_debounce_note",
    title: "Debounce vs Throttle",
    typeSlug: "notes",
    description: "Quick reference on when to use each",
    content:
      "Debounce: wait until activity stops, then fire once (search inputs). Throttle: fire at most once per interval (scroll handlers).",
    language: null,
    tags: ["performance", "javascript"],
    collectionIds: ["col_interview_prep"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05",
  },
  {
    id: "item_tailwind_docs",
    title: "Tailwind CSS Docs",
    typeSlug: "links",
    description: "Official Tailwind CSS documentation",
    content: "",
    language: null,
    tags: ["css", "tailwind", "docs"],
    collectionIds: ["col_react_patterns"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-03",
    updatedAt: "2024-01-03",
  },
];
