import Realm from "realm";

import { SplitTransaction } from "./SplitTransaction";

export class Friend extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Friend",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      name: "string",
      color: "string",
      transactions: {
        type: "linkingObjects",
        objectType: "SplitTransaction",
        property: "friend",
      },
    },
  };
  _id: Realm.BSON.UUID;
  name: string;
  color: string;
  transactions!: Realm.List<SplitTransaction>;

  calculateNetBalance(): number {
    let netBalance = 0;

    this.linkingObjects<SplitTransaction>("SplitTransaction", "friend").forEach(
      (trans) => {
        netBalance += trans.amount;
      },
    );

    return netBalance;
  }
}
