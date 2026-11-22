import {
  Smartphone, Landmark, Banknote, Utensils, Briefcase, Zap,
  Tv, GraduationCap, ArrowDownLeft,
} from "lucide-react";

/*
 * Sample data copied from the SDD mockups (14 Nov 2026).
 * Replace this module with real API calls when the backend exists.
 */
export const user = { name: "Talal", ledger: "Personal ledger" };

export const today = "Saturday, 14 Nov 2026";

export const wallets = [
  { id: "jazzcash", name: "JazzCash", balance: 12480, icon: Smartphone },
  { id: "easypaisa", name: "EasyPaisa", balance: 8770, icon: Smartphone },
  { id: "hbl", name: "HBL Bank", balance: 24000, icon: Landmark },
  { id: "cash", name: "Cash", balance: 3000, icon: Banknote },
];

export const balanceChangeThisWeek = 8560;

export const weekSummary = {
  range: "8 – 14 Nov 2026",
  spent: 9840,
  changePct: 12,
  topCategory: "Food",
  topAmount: 4200,
  topPrevAmount: 3100,
  verifiedFigures: 4,
};

export const recentActivity = [
  { id: 1, title: "Groceries", category: "Food", wallet: "JazzCash", date: "14 Nov 2026", amount: -500, icon: Utensils },
  { id: 2, title: "Freelance payment", category: "Income", wallet: "HBL Bank", date: "13 Nov 2026", amount: 18400, icon: Briefcase },
  { id: 3, title: "Madina Grocers", category: "Food", wallet: "JazzCash", date: "12 Nov 2026", amount: -1850, icon: Utensils },
  { id: 4, title: "LESCO electricity", category: "Bills", wallet: "EasyPaisa", date: "12 Nov 2026", amount: -2100, icon: Zap },
];

export const healthScore = {
  score: 72,
  label: "Good",
  parts: [
    { name: "Debt", weight: 40, value: 80, tone: "primary" },
    { name: "Volatility", weight: 30, value: 61, tone: "mint" },
    { name: "Savings", weight: 30, value: 72, tone: "primary" },
  ],
  insight: "Uneven weekly spending is holding your score back.",
};

export const comingUp = [
  { id: 1, title: "Netflix", note: "Probable subscription · 22 Nov 2026", amount: -1100, icon: Tv },
  { id: 2, title: "Semester fee", note: "Scheduled · 25 Nov 2026", amount: -22000, icon: GraduationCap },
  { id: 3, title: "Bilal Khan repays", note: "Udhaar due · 15 Nov 2026", amount: 7500, icon: ArrowDownLeft },
];

export const spendingByCategory = {
  week: [
    { name: "Food", amount: 4200, color: "var(--emerald-600)" },
    { name: "Bills", amount: 2100, color: "var(--emerald-500)" },
    { name: "Transport", amount: 1480, color: "var(--mint-300)" },
    { name: "Shopping", amount: 1160, color: "var(--lime)" },
    { name: "Other", amount: 900, color: "#cbd6d1" },
  ],
  // Month figures are illustrative; only Transport (Rs. 3,450) comes from the mockups.
  month: [
    { name: "Food", amount: 15600, color: "var(--emerald-600)" },
    { name: "Bills", amount: 8200, color: "var(--emerald-500)" },
    { name: "Transport", amount: 3450, color: "var(--mint-300)" },
    { name: "Shopping", amount: 6300, color: "var(--lime)" },
    { name: "Other", amount: 3950, color: "#cbd6d1" },
  ],
};
