export const categories = [
  { id: "1", name: "Physical health", icon: "physical" },
  { id: "2", name: "Mental & Emotional Health", icon: "mental" },
  { id: "3", name: "Productivity & Work", icon: "work" },
  { id: "4", name: "Self-Improvement/Learning", icon: "learn" },
  { id: "5", name: "Financial Habits:", icon: "finance" },
  { id: "6", name: "Environmental/Household:", icon: "household" },
];

export const frequency = [
  { id: "1", name: "daily" },
  { id: "2", name: "weekly" },
  { id: "3", name: "monthly" },
];

export const mockHabits: {
  id: string;
  name: string;
  category: string;
  frequency: string;
  day: string | undefined;
  date: string | undefined;
}[] = [
  {
    id: "1",
    name: "30 minutes of daily exercise",
    category: "1",
    frequency: "1",
    day: "",
    date: "",
  },
  {
    id: "2",
    name: "eating vegetables",
    category: "1",
    frequency: "1",
    day: "",
    date: "",
  },
  {
    id: "3",
    name: "journaling",
    category: "2",
    frequency: "2",
    day: "3",
    date: "",
  },
  {
    id: "4",
    name: "20 minutes of filing",
    category: "3",
    frequency: "2",
    day: "2",
    date: "",
  },
  {
    id: "5",
    name: "taking an online course",
    category: "4",
    frequency: "1",
    day: "",
    date: "",
  },
  {
    id: "6",
    name: "budgeting",
    category: "5",
    frequency: "3",
    date: "20",
    day: "",
  },
  {
    id: "7",
    name: "doing a deep clean weekly",
    category: "6",
    frequency: "2",
    day: "3",
    date: "",
  },
];

export const mockHabitsHistory: {
  id: string;
  date: number;
  day: number;
  month: number;
  year: number;
  habitId: string;
  completed: boolean;
}[] = [
  {
    id: "1",
    date: 4,
    day: 3,
    month: 3,
    year: 2026,
    habitId: "1",
    completed: false,
  },
  {
    id: "2",
    date: 4,
    day: 3,
    month: 3,
    year: 2026,
    habitId: "2",
    completed: true,
  },
  {
    id: "3",
    date: 4,
    day: 3,
    month: 3,
    year: 2026,
    habitId: "3",
    completed: true,
  },
  {
    id: "4",
    date: 4,
    day: 3,
    month: 3,
    year: 2026,
    habitId: "5",
    completed: false,
  },
  {
    id: "5",
    date: 4,
    day: 3,
    month: 3,
    year: 2026,
    habitId: "7",
    completed: true,
  },
  {
    id: "6",
    date: 5,
    day: 4,
    month: 3,
    year: 2026,
    habitId: "1",
    completed: true,
  },
  {
    id: "7",
    date: 5,
    day: 4,
    month: 3,
    year: 2026,
    habitId: "2",
    completed: true,
  },
  {
    id: "8",
    date: 5,
    day: 4,
    month: 3,
    year: 2026,
    habitId: "5",
    completed: false,
  },
  {
    id: "9",
    date: 5,
    day: 4,
    month: 3,
    year: 2026,
    habitId: "7",
    completed: true,
  },
  {
    id: "10",
    date: 6,
    day: 5,
    month: 3,
    year: 2026,
    habitId: "1",
    completed: false,
  },
  {
    id: "11",
    date: 6,
    day: 5,
    month: 3,
    year: 2026,
    habitId: "2",
    completed: true,
  },
  {
    id: "12",
    date: 6,
    day: 5,
    month: 3,
    year: 2026,
    habitId: "5",
    completed: true,
  },
  {
    id: "13",
    date: 6,
    day: 5,
    month: 3,
    year: 2026,
    habitId: "7",
    completed: true,
  },
];
