import {Transaction} from "./Transaction";

export interface Category {
    id: number;
    title: string;
    color: string; // RGB color as a string
    glyph?: string;
    description?: string;
    budget?: number;
}

// Sample categories
const defaultExpenseCategories: Category[] = [
    { id: 0, title: "Uncategorized", color: "rgb(253 60 74)", glyph: "🍔"},
    { id: 1, title: "Grocery", color: "rgb(238 165 25)", glyph: "💻" },
    { id: 2, title: "Dining", color: "rgb(0 168 107)", glyph: "💻" },
    { id: 3, title: "Bills & Utilities", color: "rgb(127 61 255)", glyph: "💻" },
    { id: 4, title: "Transport", color: "rgb(0 119 255)", glyph: "💻" },
    { id: 5, title: "Travel", color: "rgb(22, 23, 25)", glyph: "💻" },
    { id: 6, title: "Shopping", color: "rgb(0, 255, 0)", glyph: "💻" },
];

const defaultIncomeCategories: Category[] = [
    { id: 0, title: "Uncategorized", color: "rgb(253 60 74)", glyph: "🍔"},
    { id: 1, title: "Wage", color: "rgb(0 119 255)", glyph: "💻" },
    { id: 2, title: "Passive", color: "rgb(238 165 25)", glyph: "💻" },
    { id: 3, title: "Investment", color: "rgb(0 168 107)", glyph: "💻" },
];

let expenseCategories = defaultExpenseCategories;

export const getCategoryById = (id: number): Category => {
    return expenseCategories.find((category) => category.id === id) || defaultExpenseCategories[0];
}

