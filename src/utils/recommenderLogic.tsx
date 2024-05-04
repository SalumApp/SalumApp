import nlp from "compromise";
import * as SecureStore from "expo-secure-store";
import Realm from "realm";

import { base64ToBytes } from "./Misc";
import { schemas } from "../models";
import { Category } from "../models/Category";

// Define a dictionary of category keywords
const categoryKeywords = {
  Essential: [
    "medical",
    "health",
    "insurance",
    "rent",
    "utility",
    "grocery",
    "food",
    "gas",
    "transportation",
    "car",
    "home",
    "house",
    "bill",
    "tax",
    "education",
    "school",
    "tuition",
    "student",
    "loan",
    "debt",
    "mortgage",
    "child",
    "kid",
    "baby",
    "pet",
    "veterinary",
    "doctor",
    "dentist",
    "prescription",
    "drug",
    "vision",
    "dental",
    "phone",
    "internet",
    "necessary",
    "need",
    "require",
    "essential",
  ],
  Discretionary: [
    "entertainment",
    "dine",
    "shop",
    "travel",
    "vacation",
    "leisure",
    "hobby",
    "game",
    "movie",
    "book",
    "music",
    "cloth",
    "fashion",
    "accessory",
    "gadget",
    "electronics",
    "gift",
    "sport",
    "fitness",
    "gym",
    "spa",
    "beauty",
    "salon",
    "cosmetic",
    "treat",
    "recreation",
    "play",
    "fun",
    "enjoy",
    "subscription",
    "membership",
  ],
  Investment: [
    "save",
    "invest",
    "retirement",
    "stock",
    "bond",
    "fund",
    "portfolio",
    "asset",
    "wealth",
    "capital",
    "return",
    "interest",
    "dividend",
    "compound",
    "growth",
    "appreciation",
    "equity",
    "market",
    "trade",
    "broker",
    "account",
    "401k",
    "ira",
    "pension",
    "plan",
    "future",
    "goal",
    "investment",
  ],
  Income: [
    "income",
    "salary",
    "wage",
    "earn",
    "pay",
    "bonus",
    "commission",
    "tip",
    "profit",
    "revenue",
    "rent",
    "royalty",
    "interest",
    "dividend",
    "capital",
    "gain",
    "profit",
    "side",
    "hustle",
    "freelance",
    "consult",
    "part",
    "time",
    "overtime",
    "stipend",
    "allowance",
    "paycheck",
    "gross",
    "net",
    "passive",
  ],
  Debt: [
    "debt",
    "loan",
    "mortgage",
    "borrow",
    "credit",
    "card",
    "interest",
    "owe",
    "liability",
    "obligation",
    "bill",
    "payment",
    "lender",
    "creditor",
    "principal",
    "balance",
    "due",
    "overdue",
    "delinquent",
    "default",
    "charge",
    "fee",
    "penalty",
    "student",
    "car",
    "personal",
    "consolidation",
    "refinance",
  ],
  Savings: [
    "save",
    "bank",
    "account",
    "deposit",
    "balance",
    "interest",
    "reserve",
    "fund",
    "nest",
    "egg",
    "emergency",
    "cushion",
    "backup",
    "rainy",
    "day",
    "goal",
    "target",
    "plan",
    "budget",
    "automatic",
    "transfer",
    "regular",
    "consistent",
    "discipline",
    "habit",
    "sacrifice",
    "frugal",
    "thrifty",
  ],
};

interface CategorizedData {
  [key: string]: string[];
}

interface CategorizedDataContainer {
  expense: CategorizedData;
  income: CategorizedData;
}

interface Recommendation {
  title: string;
  description: string;
}

// Lemmatize the words using the compromise library
interface Term {
  root: string;
  normal: string;
}

function lemmatizeWords(categoryTitle: string): string[] {
  const doc = nlp(categoryTitle).compute("root");
  return doc.json()[0].terms.map((t: Term) => t.root || t.normal);
}

// Classify the category based on the category keywords
function classifyCategory(
  categoryTitle: string,
  categoryKeywords: Record<string, string[]>,
): string {
  const lemmatizedWords = lemmatizeWords(categoryTitle.toLowerCase()); // Ensure case insensitivity
  const categoryScores: Record<string, number> = {};

  for (const [categoryType, keywords] of Object.entries(categoryKeywords)) {
    // Calculate scores based on matched keywords
    categoryScores[categoryType] = keywords.reduce(
      (acc, keyword) => acc + (lemmatizedWords.includes(keyword) ? 1 : 0),
      0,
    );
  }

  let maxScore = 0;
  let matchedCategory = "Other"; // Default category if no matches found

  for (const [category, score] of Object.entries(categoryScores)) {
    if (score > maxScore) {
      maxScore = score;
      matchedCategory = category; // Update the category with the highest score
    }
  }

  return maxScore > 0 ? matchedCategory : "Other"; // Return the category with the highest score or "Other" if no scores
}

// Function to read category data from Realm
export async function createRecommendations() {
  const result = await SecureStore.getItemAsync("salum.databaseKey");
  const realm = await Realm.open({
    schema: schemas,
    encryptionKey: base64ToBytes(result),
  });
  const categories = realm.objects<Category>("Category");

  // Initialize the structure for categorized data
  const categorizedData: CategorizedDataContainer = {
    expense: {},
    income: {},
  };

  Object.keys(categoryKeywords).forEach((key) => {
    categorizedData.expense[key] = [];
    categorizedData.income[key] = [];
  });

  categories.forEach((category) => {
    console.log(category, "\n");
    const upperCategory = classifyCategory(category.title, categoryKeywords);
    // Initialize the category arrays if they are undefined
    if (!categorizedData.expense[upperCategory]) {
      categorizedData.expense[upperCategory] = [];
    }
    if (!categorizedData.income[upperCategory]) {
      categorizedData.income[upperCategory] = [];
    }

    // Push titles into the correct category
    if (category.isExpense) {
      categorizedData.expense[upperCategory].push(category._id.toHexString());
    } else {
      categorizedData.income[upperCategory].push(category._id.toHexString());
    }
  });

  // Generate the actual recommendations
  const recommendations: Recommendation[] = [];

  // Way 1: Check if spending exceeds 80% of budget for each discretionary expense category in the current month
  Object.entries(categorizedData.expense).forEach(
    ([upperCategory, categoryIds]) => {
      if (upperCategory === "Discretionary") {
        categoryIds.forEach((categoryId) => {
          const category = realm.objectForPrimaryKey<Category>(
            "Category",
            new Realm.BSON.UUID(categoryId),
          );
          if (category && category.budget) {
            const currentMonthSpending = category
              .calculateMonthlyTotals()
              .get(getCurrentMonthKey());
            if (
              currentMonthSpending &&
              currentMonthSpending > 0.8 * category.budget
            ) {
              recommendations.push({
                title: `${category.title} Budget`,
                description: `You have used ${Math.round((currentMonthSpending / category.budget) * 100)}% of your ${category.title} budget this month. Consider decreasing ${category.title} spending for the rest of the month.`,
              });
            }
          }
        });
      }
    },
  );

  // Way 2: Check if total expenses are close to total income
  const totalExpenses = Object.values(categorizedData.expense)
    .flat()
    .reduce((sum, categoryId) => {
      const category = realm.objectForPrimaryKey<Category>(
        "Category",
        new Realm.BSON.UUID(categoryId),
      );
      return (
        sum +
        (category
          ? category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0
          : 0)
      );
    }, 0);
  const totalIncome = Object.values(categorizedData.income)
    .flat()
    .reduce((sum, categoryId) => {
      const category = realm.objectForPrimaryKey<Category>(
        "Category",
        new Realm.BSON.UUID(categoryId),
      );
      return (
        sum +
        (category
          ? category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0
          : 0)
      );
    }, 0);

  if (totalIncome > 0 && totalExpenses >= 0.9 * totalIncome) {
    recommendations.push({
      title: "High Expense to Income Ratio",
      description: `You're spending ${Math.round(totalExpenses / totalIncome) * 100}% of your income on your expenses. Consider reducing your expenses and exploring additional income streams.`,
    });
  }

  // Way 3: Check if discretionary expenses are too high compared to essential/debt expenses
  const discretionaryExpenses = categorizedData.expense["Discretionary"].reduce(
    (sum, categoryId) => {
      const category = realm.objectForPrimaryKey<Category>(
        "Category",
        new Realm.BSON.UUID(categoryId),
      );
      return (
        sum +
        (category
          ? category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0
          : 0)
      );
    },
    0,
  );
  // const essentialDebtExpenses = [
  //   ...categorizedData.expense["Essential"],
  //   ...categorizedData.expense["Debt"],
  // ].reduce((sum, categoryId) => {
  //   const category = realm.objectForPrimaryKey<Category>(
  //     "Category",
  //     new Realm.BSON.UUID(categoryId),
  //   );
  //   return (
  //     sum +
  //     (category
  //       ? category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0
  //       : 0)
  //   );
  // }, 0);
  const discretionaryCategoriesOverBudget = categorizedData.expense[
    "Discretionary"
  ]
    .map((categoryId) => {
      const category = realm.objectForPrimaryKey<Category>(
        "Category",
        new Realm.BSON.UUID(categoryId),
      );
      return {
        title: category?.title || "",
        amount: category
          ? category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0
          : 0,
        budget: category?.budget || 0,
      };
    })
    .filter(
      (category) =>
        category.budget > 0 && category.amount > 0.6 * category.budget,
    );

  if (
    discretionaryCategoriesOverBudget.length >= 3 &&
    totalIncome > 0 &&
    discretionaryExpenses > 0.4 * totalIncome
  ) {
    const topDiscretionaryCategories = discretionaryCategoriesOverBudget
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5)
      .map((category) => category.title);
    recommendations.push({
      title: "High Discretionary Spending",
      description: `You're spending too much on ${topDiscretionaryCategories.join(", ")}. Consider reducing your discretionary expenses.`,
    });
  }

  // Way 4: Check if spending increased significantly month-over-month for each discretionary expense category
  categorizedData.expense["Discretionary"].forEach((categoryId) => {
    const category = realm.objectForPrimaryKey<Category>(
      "Category",
      new Realm.BSON.UUID(categoryId),
    );
    if (category) {
      const currentMonthSpending =
        category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0;
      const previousMonthSpending =
        category.calculateMonthlyTotals().get(getPreviousMonthKey()) || 0;
      if (previousMonthSpending > 0) {
        const increasePercentage =
          ((currentMonthSpending - previousMonthSpending) /
            previousMonthSpending) *
          100;
        if (increasePercentage > 20) {
          recommendations.push({
            title: `Increased Spending in ${category.title}`,
            description: `Spending for ${category.title} increased by ${increasePercentage.toFixed(0)}% month-over-month. Consider lowering spending in this category.`,
          });
        }
      }
    }
  });

  // Way 5: Check if income/savings increased significantly month-over-month
  [
    ...categorizedData.income["Income"],
    ...categorizedData.income["Savings"],
  ].forEach((categoryId) => {
    const category = realm.objectForPrimaryKey<Category>(
      "Category",
      new Realm.BSON.UUID(categoryId),
    );
    if (category) {
      const currentMonthAmount =
        category.calculateMonthlyTotals().get(getCurrentMonthKey()) || 0;
      const previousMonthAmount =
        category.calculateMonthlyTotals().get(getPreviousMonthKey()) || 0;
      if (previousMonthAmount > 0) {
        const increasePercentage =
          ((currentMonthAmount - previousMonthAmount) / previousMonthAmount) *
          100;
        if (increasePercentage > 20) {
          recommendations.push({
            title: `${category.title} Increase`,
            description: `Your ${category.title} increased by ${increasePercentage.toFixed(0)}% month-over-month. Consider increasing your investments.`,
          });
        }
      }
    }
  });

  console.log(recommendations);
  return recommendations;
}

function getCurrentMonthKey(): string {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
}

function getPreviousMonthKey(): string {
  const previousDate = new Date();
  previousDate.setMonth(previousDate.getMonth() - 1);
  return `${previousDate.getFullYear()}-${previousDate.getMonth() + 1}`;
}
