import Realm from "realm";

import { Transaction } from "./Transaction";

export class Category extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Category",
    primaryKey: "title",
    properties: {
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
  title!: string;
  transactions!: Realm.List<Transaction>;
  hasBudget!: boolean;
  isExpense?: boolean;
  color: string;
  budget?: number;
  glyph?: string;
  description?: string;
}
