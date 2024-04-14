import Realm from "realm";

import { Transaction } from "./Transaction";

export class Account extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Account",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      title: "string",
      type: "string",
      currency: "string",
      balance: "int",
      transactions: {
        type: "linkingObjects",
        objectType: "Transaction",
        property: "account",
      },
      description: "string?",
    },
  };
  _id!: Realm.BSON.UUID;
  title!: string;
  type!: string;
  currency!: string;
  balance!: number;
  transactions!: Realm.List<Transaction>;
  description?: string;
}
