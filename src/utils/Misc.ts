import { decode, encode } from "base-64";
import { parse, formatISO } from "date-fns";
import * as FileSystem from "expo-file-system";

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

export const addAlpha = (rgb: string, alpha: number): string => {
  // Remove the "rgb" prefix and parentheses, then split into components.
  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues || rgbValues.length !== 3) {
    throw new Error("Invalid RGB color string");
  }

  // Reconstruct as an RGBA string with the specified alpha value.
  return `rgba(${rgbValues.join(", ")}, ${alpha})`;
};

const convertToCSV = (data: any[]): string => {
  const headers = Object.keys(data[0]);
  const csv = data.map((row) => {
    return headers
      .map((fieldName) => {
        const value = row[fieldName];
        if (value && typeof value === "object") {
          // Check if the object has a toString method that returns a UUID or similar
          if (
            typeof value.toString === "function" &&
            value.toString() !== "[object Object]"
          ) {
            return `"${value.toString()}"`;
          }
          // Otherwise, convert the object to a JSON string
          return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }
        return `"${value}"`;
      })
      .join(",");
  });
  csv.unshift(headers.join(","));
  return csv.join("\r\n");
};

export const saveDataAsCSV = async (
  data: any[],
  filename: string,
): Promise<string> => {
  const csvData = convertToCSV(data);
  console.log(csvData);
  const fileUri = `${FileSystem.documentDirectory}${filename}`;
  //await FileSystem.writeAsStringAsync(fileUri, csvData, { encoding: FileSystem.EncodingType.UTF8 });
  return fileUri;
};

export const convertToDateISO = (inputDate: string): string => {
  const formats = [
    "yyyy-MM-dd", // ISO date
    "MM/dd/yyyy", // American date
    "yyyy-MM-dd'T'HH:mm:ss", // ISO datetime
    "MM/dd/yyyy HH:mm:ss", // American datetime with space
    "MM/dd/yyyy'T'HH:mm:ss", // American datetime with T separator
    "yyyy-MM-dd'T'HH:mm:ss.SSSX", // ISO datetime with milliseconds and time zone
  ];

  for (const format of formats) {
    const parsedDate = parse(inputDate, format, new Date());
    if (!isNaN(parsedDate.getTime())) {
      return formatISO(parsedDate);
    }
  }
  return "Invalid date";
};

export function base64ToBytes(base64: string): Uint8Array {
  const binaryString = decode(base64);
  const length = binaryString.length;
  const bytes = new Uint8Array(new ArrayBuffer(length));

  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
}

export function bytesToBase64(inputBytes: Uint8Array): string {
  let binaryString = "";
  for (let i = 0; i < inputBytes.length; i++) {
    binaryString += String.fromCharCode(inputBytes[i]);
  }

  return encode(binaryString);
}
