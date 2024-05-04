import * as SecureStore from "expo-secure-store";
import Realm, { UpdateMode } from "realm";

import { SalumInvestmentAPI } from "./SalumAPI";
import { schemas } from "../models";
import { Asset } from "../models/Asset";
import { base64ToBytes } from "../utils/Misc";

export const FetchUpdate = async () => {
  const API = new SalumInvestmentAPI();
  const data = await API.getFxRate();

  const result = await SecureStore.getItemAsync("salum.databaseKey");
  const realm = await Realm.open({
    schema: schemas,
    encryptionKey: base64ToBytes(result),
  });

  const allAssets = realm.objects<Asset>("Asset");
  const quotePromises = [];
  const priceHistPromises = [];
  for (const asset of allAssets) {
    // Fetch Quote from StockAnalysis
    // Fetch Price History, end date = PriceHist[-1] and append
    // Get date of last price history entry here
    const quotePromise = API.getQuote(asset.symbol);
    quotePromises.push(quotePromise);
    const priceHistPromise = API.getPriceHistory(asset.symbol);
    priceHistPromises.push(priceHistPromise);
  }
  const allQuotes = await Promise.all(quotePromises);
  const allPriceHists = await Promise.all(priceHistPromises);

  realm.write(() => {
    Object.entries(data).forEach(([code, rate]) => {
      const currency = realm.objectForPrimaryKey("Currency", code);
      currency.fromUSD = rate.fromUSD;
      currency.toUSD = rate.toUSD;
    });

    allQuotes.forEach((quoteData, idx) => {
      realm.create(
        "Asset",
        {
          _id: allAssets[idx]._id,
          type: allAssets[idx].type,
          unitsOwned: allAssets[idx].unitsOwned,
          currency: allAssets[idx].currency,
          priceHist: allPriceHists[idx],
          curPrice: quoteData,
        },
        UpdateMode.Modified,
      );
    });
  });
};
