import Realm from "realm";

import { Transaction } from "./Transaction";

export class Category extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Category",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      title: "string",
      transactions: {
        type: "linkingObjects",
        objectType: "Transaction",
        property: "category",
      },
      isExpense: "bool?",
      hasBudget: "bool",
      color: "string",
      budget: "int?",
      glyph: "string?",
      description: "string?",
    },
  };
  _id: Realm.BSON.UUID;
  title!: string;
  transactions!: Realm.List<Transaction>;
  hasBudget!: boolean;
  isExpense?: boolean;
  color: string;
  budget?: number;
  glyph?: string;
  description?: string;

  calculateTotals(): number {
    return this.linkingObjects<Transaction>("Transaction", "category").reduce(
      (sum, trans) => sum + trans.amountInBaseCurrency,
      0,
    );
  }

  calculateMonthlyTotals(): Map<string, number> {
    const monthlyTransactions = new Map<string, Transaction[]>();

    // Group transactions by month-year
    this.linkingObjects<Transaction>("Transaction", "category").forEach(
      (trans) => {
        const monthYearKey = `${trans.datetime.getFullYear()}-${trans.datetime.getMonth() + 1}`;
        if (!monthlyTransactions.has(monthYearKey)) {
          monthlyTransactions.set(monthYearKey, []);
        }
        monthlyTransactions.get(monthYearKey)!.push(trans);
      },
    );

    // Calculate total amount for each group
    const monthlyTotals = new Map<string, number>();
    monthlyTransactions.forEach((transactions, key) => {
      const totalAmount = transactions.reduce(
        (sum, trans) => sum + trans.amountInBaseCurrency,
        0,
      );
      monthlyTotals.set(key, totalAmount);
    });

    return monthlyTotals;
  }
}
