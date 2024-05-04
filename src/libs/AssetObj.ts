import * as SecureStore from "expo-secure-store";
import Realm from "realm";

import { AssetAPIInterface, ManualInputProvider } from "./AssetAPI";
import { schemas } from "../models";
import { Transaction } from "../models/Transaction";
import { base64ToBytes } from "../utils/Misc";

export interface AssetInterface {
  title: string;
  ccy: string;
  getValueHistory?(): any;
  getValueCurrent?(): Promise<number>;
}

export class CashDDA implements AssetInterface {
  title: string = "Cash DDA";
  ccy = "USD";

  constructor() {
    this.title = "Cash DDA";
  }

  async getValueCurrent(): Promise<number> {
    const result = await SecureStore.getItemAsync("salum.databaseKey");
    const realm = await Realm.open({
      schema: schemas,
      encryptionKey: base64ToBytes(result),
    });
    return realm.objects<Transaction>("Transaction").reduce((acc, trans) => {
      return acc + trans.currency.getAmount(trans.amountInBaseCurrency);
    }, 0);
  }

  async getValueHistory(): Promise<{ date: Date; value: number }[]> {
    const result = await SecureStore.getItemAsync("salum.databaseKey");
    const realm = await Realm.open({
      schema: schemas,
      encryptionKey: base64ToBytes(result),
    });
    const groupedTransactions: { [key: string]: number } = realm
      .objects<Transaction>("Transaction")
      .reduce((acc: { [key: string]: number }, trans) => {
        const dateKey = trans.datetime.toISOString().split("T")[0];
        if (!acc[dateKey]) {
          acc[dateKey] = 0;
        }
        // acc[dateKey] += trans.currency.getAmount(trans.amountInBaseCurrency) * (trans.isExpense ? -1 : 1);
        acc[dateKey] += trans.amountInBaseCurrency * (trans.isExpense ? -1 : 1);
        return acc;
      }, {});

    const sortedDates = Object.keys(groupedTransactions).sort();

    return sortedDates.map((date) => ({
      date: new Date(date),
      value: groupedTransactions[date],
    }));
  }
}

export class Investment implements AssetInterface {
  title: string;
  ccy = "USD";
  unitPrice: number = 0;
  unitOwned: number = 0;
  type: string;
  apiProvider: AssetAPIInterface = new ManualInputProvider();
  ticker?: string;
  priceHistory?: { date: Date; closing: number }[];

  constructor(
    title: string,
    unitPrice: number = 0,
    unitOwned: number = 0,
    type: string,
    apiProvider?: AssetAPIInterface,
    ticker?: string,
  ) {
    this.title = title;
    console.log(title);
    this.unitPrice = unitPrice;
    this.unitOwned = unitOwned;
    this.type = type;
    if (apiProvider) {
      this.apiProvider = apiProvider;
    }
    this.ticker = ticker;
  }

  // func getValueHistory
  setUnitOwned(unitOwned: number) {
    this.unitOwned = unitOwned;
  }

  async getValueHistory(): Promise<{ date: Date; value: number }[]> {
    if (!this.priceHistory && this.apiProvider && this.ticker) {
      this.priceHistory = await this.apiProvider.getPriceHistory(this.ticker);
    }
    if (this.priceHistory) {
      return this.priceHistory.map((item) => ({
        date: item.date,
        value: item.closing * this.unitOwned,
      }));
    }
    return [];
  }

  // func getQuote (startdate, enddate, timezone)

  // func update: fetch quote, apply splits if applicable, and dividends. Redo getInfo

  // func getInfo

  // func getTransactionHistory

  // func transact
}
