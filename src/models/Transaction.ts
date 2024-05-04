import Realm from "realm";

import { Account } from "./Account";
import { Category } from "./Category";
import { Currency } from "./Currency";
import { Friend } from "./Friend";

export class Transaction extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Transaction",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      title: "string",
      category: "Category",
      datetime: "date",
      isIncludeInCashFlow: "bool",
      isExpense: "bool",
      amount: "int",
      amountInBaseCurrency: "int",
      currency: "Currency",
      account: "Account",
      isRecurring: "bool",
      isSplit: "bool",
      friends: {
        type: "list",
        objectType: "Friend",
        optional: false,
      },
      frequency: "string?",
      endDate: "date?",
      description: "string?",
      attachments: "string?",
    },
  };
  _id: Realm.BSON.UUID;
  title!: string;
  category!: Category;
  datetime!: Date;
  isIncludeInCashFlow!: boolean;
  isExpense!: boolean;
  amount!: number;
  amountInBaseCurrency!: number;
  currency!: Currency;
  account!: Account;
  isSplit!: boolean;
  friends?: Realm.List<Friend>;
  isRecurring!: boolean;
  frequency?: string;
  endDate?: Date;
  description?: string;
  attachments?: string;
}
