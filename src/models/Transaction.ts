import Realm from "realm";

import { Account } from "./Account";
import { Category } from "./Category";

export class Transaction extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Transaction",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      title: "string",
      category: "Category",
      datetime: "int",
      isExpense: "bool",
      amount: "int",
      amountInUSD: "int",
      currency: "string",
      account: "Account",
      isRecurring: "bool",
      frequency: "string?",
      endDate: "int?",
      description: "string?",
      attachments: "string?",
    },
  };
  _id: Realm.BSON.UUID;
  title!: string;
  category!: Category;
  datetime!: number;
  isExpense!: boolean;
  amount!: number;
  amountInUSD!: number;
  currency!: string;
  account!: Account;
  isRecurring!: boolean;
  frequency?: string;
  endDate?: number;
  description?: string;
  attachments?: string;
}
