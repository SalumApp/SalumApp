import { AssetAPIInterface } from "./AssetAPI";

export class SalumInvestmentAPI implements AssetAPIInterface {
  id = "SALUM_YFINANCE";
  displayName = "Salum";
  description = "Salum's Default API";
  assetInfoNote =
    "For information only. Not financial advice. Do not use for trading.";
  private apiUrl = "";
  private apiKey = "";

  async getInfo(ticker: string): Promise<any> {
    return {
      name: "Some Instrument",
      description: "Some Response",
      website: "https://example.com",
      currency: "USD",
    } as {
      name: string;
      description: string;
      website: string;
      currency: string;
    };
  }

  async getQuote(ticker: string): Promise<{ datetime: Date; quote: number }> {
    return {
      datetime: new Date(),
      quote: 0.0,
    };
  }

  async getPriceHistory(
    ticker: string,
    startdate?: Date,
  ): Promise<{ datetime: Date; quote: number }[]> {
    return [];
  }

  async getFxRate(): Promise<{ currency: { fromUSD: number; toUSD: number } }> {
    return { currency: { fromUSD: 1.0, toUSD: 1.0 } };
  }
}
