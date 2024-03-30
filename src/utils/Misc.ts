import moment from "moment/moment";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
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

export const formatTime = (utcSeconds: number) => {
  const date = new Date();
  date.setUTCSeconds(utcSeconds, 0);
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