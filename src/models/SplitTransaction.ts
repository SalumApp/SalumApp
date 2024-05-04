import Realm from "realm";

import { Friend } from "./Friend";
import { Transaction } from "./Transaction";

export class SplitTransaction extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "SplitTransaction",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      friend: "Friend",
      transaction: "Transaction",
      amount: "int",
    },
  };
  _id: Realm.BSON.UUID;
  friend: Friend;
  transaction: Transaction;
  amount: number;
}
