import { Account } from "./Account";
import { Asset, AssetTransactionHistory, Price } from "./Asset";
import { Category } from "./Category";
import { Currency } from "./Currency";
import { Friend } from "./Friend";
import { SplitTransaction } from "./SplitTransaction";
import { Transaction } from "./Transaction";

export const schemas = [
  Account,
  Transaction,
  Category,
  Friend,
  Asset,
  AssetTransactionHistory,
  Price,
  Currency,
  SplitTransaction,
];
