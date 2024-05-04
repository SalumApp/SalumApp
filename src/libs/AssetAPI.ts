import { Investment } from "./AssetObj";

export interface AssetAPIInterface {
  displayName: string;
  description?: string;
  assetInfoNote?: string;
  getInfo(ticker: string): any;
  getQuote?(ticker: string): Promise<{ datetime: Date; quote: number }>;
  getPriceHistory(ticker: string, startdate?: Date): any;
  getFxRates?(): any;
}

export class ManualInputProvider implements AssetAPIInterface {
  displayName = "Dummy API";
  description? = "A dummy API for testing";
  assetInfoNote? = "This doens't do anything";

  async getInfo(ticker: string): Promise<any> {
    return new Investment(ticker, 0, 0, "dummy", this, ticker);
  }

  async getPriceHistory(ticker: string, startdate?: Date): Promise<any> {
    return [];
  }
}
