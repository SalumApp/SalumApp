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
