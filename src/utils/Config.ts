interface Currency {
  symbol: string;
  name: string;
  minorUnits: number;
}

interface Currencies {
  [key: string]: Currency;
}

export const currencies: Currencies = {
  AED: {
    symbol: "DH",
    name: "UAE Dirham",
    minorUnits: 2,
  },
  AUD: {
    symbol: "A$",
    name: "Australian Dollar",
    minorUnits: 2,
  },
  BGN: {
    symbol: "лв.",
    name: "Bulgarian Lev",
    minorUnits: 2,
  },
  BRL: {
    symbol: "R$",
    name: "Brazilian Real",
    minorUnits: 2,
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    minorUnits: 2,
  },
  CHF: {
    symbol: "CHF",
    name: "Swiss Franc",
    minorUnits: 2,
  },
  CLP: {
    symbol: "CLP",
    name: "Chilean Peso",
    minorUnits: 0,
  },
  CNY: {
    symbol: "CN¥",
    name: "Chinese Yuan",
    minorUnits: 2,
  },
  CZK: {
    symbol: "Kč.",
    name: "Czech Koruna",
    minorUnits: 2,
  },
  DKK: {
    symbol: "kr.",
    name: "Danish Krone",
    minorUnits: 2,
  },
  EGP: {
    symbol: "E£",
    name: "Egyptian Pound",
    minorUnits: 2,
  },
  EUR: {
    symbol: "€",
    name: "Euro",
    minorUnits: 2,
  },
  GBP: {
    symbol: "£",
    name: "British Pound",
    minorUnits: 2,
  },
  HKD: {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    minorUnits: 2,
  },
  HUF: {
    symbol: "Ft.",
    name: "Hungarian Forint",
    minorUnits: 2,
  },
  IDR: {
    symbol: "Rp.",
    name: "Indonesian Rupiah",
    minorUnits: 2,
  },
  ILS: {
    symbol: "₪",
    name: "Israeli New Shekel",
    minorUnits: 2,
  },
  INR: {
    symbol: "₹",
    name: "Indian Rupee",
    minorUnits: 2,
  },
  ISK: {
    symbol: "kr.",
    name: "Icelandic Króna",
    minorUnits: 0,
  },
  JPY: {
    symbol: "JP¥",
    name: "Japanese Yen",
    minorUnits: 0,
  },
  KRW: {
    symbol: "₩",
    name: "South Korean Won",
    minorUnits: 0,
  },
  MOP: {
    symbol: "MOP",
    name: "Macanese Pataca",
    minorUnits: 2,
  },
  MXN: {
    symbol: "MX$",
    name: "Mexican Peso",
    minorUnits: 2,
  },
  MYR: {
    symbol: "RM.",
    name: "Malaysian Ringgit",
    minorUnits: 2,
  },
  NOK: {
    symbol: "kr.",
    name: "Norwegian Krone",
    minorUnits: 2,
  },
  NZD: {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    minorUnits: 2,
  },
  PHP: {
    symbol: "₱",
    name: "Philippine Peso",
    minorUnits: 2,
  },
  PLN: {
    symbol: "zł.",
    name: "Polish Złoty",
    minorUnits: 2,
  },
  QAR: {
    symbol: "QR",
    name: "Qatari Riyal",
    minorUnits: 2,
  },
  RON: {
    symbol: "lei.",
    name: "Romanian Leu",
    minorUnits: 2,
  },
  RUB: {
    symbol: "₽",
    name: "Russian Ruble",
    minorUnits: 2,
  },
  SAR: {
    symbol: "SR",
    name: "Saudi Riyal",
    minorUnits: 2,
  },
  SEK: {
    symbol: "kr.",
    name: "Swedish Krona",
    minorUnits: 2,
  },
  SGD: {
    symbol: "S$",
    name: "Singapore Dollar",
    minorUnits: 2,
  },
  THB: {
    symbol: "฿",
    name: "Thai Baht",
    minorUnits: 2,
  },
  TRY: {
    symbol: "₺",
    name: "Turkish Lira",
    minorUnits: 2,
  },
  TWD: {
    symbol: "NT$",
    name: "New Taiwan Dollar",
    minorUnits: 2,
  },
  USD: {
    symbol: "$",
    name: "United States Dollar",
    minorUnits: 2,
  },
  ZAR: {
    symbol: "R",
    name: "South African Rand",
    minorUnits: 2,
  },
};

export const mainCurrency = "USD";

export const accountTypes = ["Deposit", "Credit"];
