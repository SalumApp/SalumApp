import moment from "moment/moment";

export const formatCentsToDollars = (cents: number): string => {
  const dollars = Math.floor(cents / 100);
  const remainingCents = cents % 100;
  return `${dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${remainingCents.toString().padStart(2, "0")}`;
};

export const formatCurrency = (value: number, currencyUsed: string = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyUsed,
  }).format(value);
};

export const getCurrentMonth = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  return monthNames[currentDate.getMonth()];
};

export const getRemainingDaysInMonth = () => {
  const currentDate = new Date();
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  return lastDayOfMonth.getDate() - currentDate.getDate();
};

export const formatTime = (epochTime: number) => {
  const date = new Date(epochTime);
  moment.locale("en");
  return moment(date).format("LT");
};

export const addAlpha = (rgb: string, alpha: number): string => {
  // Remove the "rgb" prefix and parentheses, then split into components.
  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues || rgbValues.length !== 3) {
    throw new Error("Invalid RGB color string");
  }

  // Reconstruct as an RGBA string with the specified alpha value.
  return `rgba(${rgbValues.join(", ")}, ${alpha})`;
};
