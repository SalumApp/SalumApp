import Realm from "realm";

import { Currency } from "./Currency";
import { Transaction } from "./Transaction";

export class Account extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Account",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      title: "string",
      isCredit: "bool",
      currency: "Currency",
      transactions: {
        type: "linkingObjects",
        objectType: "Transaction",
        property: "account",
      },
      color: "string",
      glyph: "string?",
      description: "string?",
    },
  };
  _id!: Realm.BSON.UUID;
  title!: string;
  isCredit!: boolean;
  currency!: Currency;
  transactions!: Realm.List<Transaction>;
  color: string;
  glyph?: string;
  description?: string;

  getBalance(): number {
    return this.linkingObjects<Transaction>("Transaction", "account").reduce(
      (sum, acc) => sum + acc.amount * (acc.isExpense ? -1 : 1),
      0,
    );
  }

  getBalanceHistory(): { date: Date; value: number }[] {
    const groupedTransactions = this.linkingObjects<Transaction>(
      "Transaction",
      "account",
    ).reduce(
      (acc, trans) => {
        const dateKey = trans.datetime.toISOString().split("T")[0];
        if (!acc[dateKey]) {
          acc[dateKey] = 0;
        }
        acc[dateKey] += trans.amount * (trans.isExpense ? -1 : 1);
        return acc;
      },
      {} as { [key: string]: number },
    );

    const sortedDates = Object.keys(groupedTransactions).sort();

    return sortedDates.map((date) => {
      return {
        date: new Date(date),
        value: groupedTransactions[date],
      };
    });
  }
}
