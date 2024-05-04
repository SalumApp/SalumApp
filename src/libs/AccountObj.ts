import Realm from "realm";

import { Account } from "../models/Account";
import { Category } from "../models/Category";

export interface AccountInterface {
  _id: Realm.BSON.UUID;
  title: string;
  category: Category;
  datetime: number;
  isExpense: boolean;
  amount: number;
  amountInUSD: number;
  currency: string;
  account: Account;
  isRecurring: boolean;
  frequency?: string;
  endDate?: number;
  description?: string;
  attachments?: string;
}
