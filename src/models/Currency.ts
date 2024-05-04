import { formatCurrency } from "react-native-format-currency";
import Realm from "realm";

function nFormatter(
  value: number,
  digits: number,
): { value: number; suffix: string } {
  const lookup = [
    { value: 1, suffix: "" },
    { value: 1e3, suffix: "k" },
    { value: 1e6, suffix: "M" },
    { value: 1e9, suffix: "B" },
    { value: 1e12, suffix: "T" },
  ];
  if (value < 10 ** digits) {
    return { value, suffix: "" };
  }
  const item = lookup.findLast((item) => value >= item.value);
  if (item) {
    const scaledValue = value / item.value;
    const formattedValue = Number(scaledValue.toFixed(2));
    return { value: formattedValue, suffix: item.suffix };
  }
  return { value, suffix: "" }; // Fallback if no suitable item is found
}

export class Currency extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: "Currency",
    primaryKey: "code",
    properties: {
      code: "string",
      name: "string",
      enabled: "bool",
      symbol: "string",
      minorUnits: "int",
      fromUSD: "double",
      toUSD: "double",
    },
  };
  code: string;
  name: string;
  enabled: boolean;
  symbol: string;
  minorUnits: number;
  fromUSD: number;
  toUSD: number;

  getAmount(amount: number) {
    if (this.minorUnits !== 0) {
      amount /= 10 ** this.minorUnits;
    }
    return amount;
  }

  getAmountInBaseUnits(amount: number) {
    if (this.minorUnits !== 0) {
      amount *= 10 ** this.minorUnits;
    }
    return amount;
  }

  getAmountString(
    amount: number,
    nFormat?: number,
    handleMinorUnits: boolean = true,
  ) {
    let suffix = "";
    amount = Math.round(amount);
    if (this.minorUnits !== 0 && handleMinorUnits) {
      amount /= 10 ** this.minorUnits;
    }

    if (nFormat) {
      const result = nFormatter(amount, nFormat);
      amount = result.value;
      suffix = result.suffix;
    }
    return formatCurrency({ amount, code: this.code })[1].toString() + suffix;
  }

  getInputAmountString(amount: number) {
    const major = Math.floor(amount / 10 ** this.minorUnits);
    const minor = amount % 10 ** this.minorUnits;
    if (this.minorUnits) {
      return `${formatCurrency({ amount: major, code: this.code })[1].toString()}.${minor.toString().padStart(this.minorUnits, "0")}`;
    }
    return `${formatCurrency({ amount: major, code: this.code })[1].toString()}`;
  }

  convertToFcy(fcy: Currency, amount: number): number {
    return amount * this.toUSD * fcy.fromUSD;
  }

  convertFromFcy(fcy: Currency, amount: number): number {
    return amount * this.fromUSD * fcy.toUSD;
  }
}
