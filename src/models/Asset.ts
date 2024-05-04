import Realm from "realm";

import { Currency } from "./Currency";

export class Asset extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Asset",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      type: "string",
      unitsOwned: "double",
      currency: "Currency",
      transactionHist: { type: "list", objectType: "AssetTransactionHistory" },
      priceHist: { type: "list", objectType: "Price" },
      curPrice: "Price?",
      lastSplit: "int?",
      title: "string?",
      symbol: "string?",
      misc: "string?",
      description: "string?",
    },
  };
  _id: Realm.BSON.UUID;
  type!: string;
  unitsOwned!: number;
  currency!: Currency;
  transactionHist!: AssetTransactionHistory[];
  priceHist!: Price[];
  curPrice?: Price;
  lastSplit?: number;
  title?: string;
  symbol?: string;
  misc?: string;
  description?: string;

  getPriceForLastNDays(nDays: number) {
    const result = [];
    const today = new Date();
    const startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - nDays + 1,
    );

    let mostRecentPrice: number | null = null;

    const data = this.priceHist.slice(-1 * nDays);
    console.log(data);

    // Map to keep track of the most recent price for each day
    const pricesByDate = new Map<string, number>();
    for (const entry of data) {
      pricesByDate.set(entry.datetime.toISOString().split("T")[0], entry.quote);
    }

    // Fill in the results for the last n days
    for (let i = 0; i < nDays; i++) {
      const currentDate = new Date(
        startDate.getTime() + i * 24 * 60 * 60 * 1000,
      );
      const dateString = currentDate.toISOString().split("T")[0];

      // Use the price from the map or the most recent price if not available
      if (pricesByDate.has(dateString)) {
        mostRecentPrice = pricesByDate.get(dateString);
      }

      result.push({ date: currentDate, price: mostRecentPrice ?? 0 });
    }

    return result;
  }

  calculateUnitsOwnedLastNDays(days: number) {
    const result = [];
    const today = new Date();
    const msPerDay = 24 * 60 * 60 * 1000; // milliseconds in a day

    // Initialize the result array with the current units for each day
    for (let i = 0; i < days; i++) {
      const date = new Date(today.getTime() - i * msPerDay);
      result.push({ date, units: this.unitsOwned });
    }

    // Make a copy and sort the transaction history
    const histCopy = [...this.transactionHist];
    histCopy.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

    // Iterate through each transaction
    for (const transaction of histCopy) {
      const transactionDate = transaction.datetime;

      // Stop processing if the transaction is older than the specified days
      if ((today.getTime() - transactionDate.getTime()) / msPerDay > days) {
        break;
      }

      // Find the corresponding day in the result array and update the unitsOwned
      const dayIndex = Math.floor(
        (today.getTime() - transactionDate.getTime()) / msPerDay,
      );
      for (let j = dayIndex; j < days; j++) {
        result[j].units -= transaction.unitsTraded;
      }
    }

    // Since the days were calculated backwards, reverse the result for chronological order
    return result.reverse();
  }

  combineDataForLastNDays(n: number) {
    const prices = this.getPriceForLastNDays(n);
    const units = this.calculateUnitsOwnedLastNDays(n);

    if (prices === null || units === null) {
      // Return n entries with zero values if any function fails
      return new Array(n).fill(0);
    }

    // Combine data with error handling for null values
    const combinedData = [];
    for (let i = 0; i < n; i++) {
      combinedData.push({
        date: prices[i].date,
        value: prices[i].price * units[i].units,
      });
    }

    return combinedData;
  }
}

export class AssetTransactionHistory extends Realm.Object {
  datetime!: Date;
  unitsTraded!: number;
  static schema: Realm.ObjectSchema = {
    name: "AssetTransactionHistory",
    embedded: true,
    properties: {
      datetime: "date",
      unitsTraded: "double",
    },
  };
}

export class Price extends Realm.Object {
  datetime!: Date;
  quote!: number;
  static schema: Realm.ObjectSchema = {
    name: "Price",
    embedded: true,
    properties: {
      datetime: "date",
      quote: "double",
    },
  };
}
