/* eslint import/prefer-default-export: off */
import { URL } from "url"
import path from "path"
import { ipcRenderer } from "electron";
import { isUTCTimestamp } from "lightweight-charts";


export function resolveHtmlPath(htmlFileName) {
  if (process.env.NODE_ENV === "development") {
    const port = process.env.PORT || 3001
    const url = new URL(`http://localhost:${port}`)
    url.pathname = htmlFileName
    return url.href
  }
  return `file://${path.resolve(__dirname, "../renderer/", htmlFileName)}`
}


export function hhmmss() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours? hours : 12;
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

export function currentESTDatetime() {
  // '12/06/2023, 11:39:12 AM'
  const dt = new Date()
  return dt.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "EST"
  })
}

export const renameKey = (jsonArray, oldKey, newKey) => {
  return jsonArray.map(obj => {
    if (obj.hasOwnProperty(oldKey)) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    return obj;
  });
}

export const getHeightFromClass = (classStr) => {
    const ele = document.getElementsByClassName(classStr)[0];
    if (typeof ele !== 'undefined'){
      return ele.length > 0 ? ele.offsetHeight : 30;
    }else {
      return 30;
    }
}

export const titleBarheight = () => {
  return getHeightFromClass("cet-titlebar");
}

export const findObjectByVal = (jsonArray, desiredValue, keyToCheck) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i][keyToCheck] === desiredValue) {
      return jsonArray[i];
    }
  }
  return null; // Return null if no match is found
}

export const inArray=(array, item)=> {
  var x = [];
  array.forEach((i)=>{
    if (item.toLowerCase() === i.toLowerCase()) {
      x.push(i);
    }
  });
  return x.length > 0 ? true : false;
}

export const currentESTTime = () => {
  const dt = new Date();
  return dt.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'EST',
  });
}


export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}


export const formatCurrency = (amount) => {
  return parseFloat(amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })).toFixed(2);
}

export const randNum = (start, finish) => {
  const range = finish - start + 1;
  return Math.floor(Math.random() * range) + start;
}

export const generateRandomData = () => {
  const symbols = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "FB", "NFLX", "NVDA", "V", "PYPL", "INTC", "AMD", "CSCO", "IBM", "ORCL", "QCOM", "GS", "JPM", "BA", "MMM", "DIS", "XOM", "CVX", "PFE", "WMT", "KO", "PEP", "HD", "CAT", "MRK", "VZ", "AAP", "BA", "C", "DOW", "GS", "IBM", "JNJ", "MCD", "NKE", "PG", "TRV", "UNH", "VZ", "WBA", "WMT", "XOM"];  const randomData = [];

  for (let i = 0; i < symbols.length; i++) {
    const randomObject = {
      Symbol: symbols[i],
      Open: randNum(1, 2),
      PreviousClose: randNum(1, 2),
      Last: randNum(1, 5),
      Ask: randNum(1, 2),
      AskSize: randNum(1, 2),
      Bid: randNum(1, 2),
      BidSize: randNum(1, 2),
      NetChange: randNum(1, 2),
      NetChangePct: randNum(-10, 10),
      High52Week: randNum(1, 2),
      High52WeekTimestamp: "2022-01-10T00:00:00Z", // Replace with actual date logic if needed
      Low52Week: randNum(1, 2),
      Low52WeekTimestamp: "2022-06-20T00:00:00Z", // Replace with actual date logic if needed
      Volume:  randNum(1, 2),
      PreviousVolume: randNum(1, 2),
      Close: randNum(1, 2),
      DailyOpenInterest: Math.floor(Math.random() * 1000),
      TradeTime: new Date().toISOString(), // Current timestamp
      TickSizeTier: Math.floor(Math.random() * 3), // Assuming 0, 1, 2 as possible values
      MarketFlags: {
        IsDelayed: false,
        IsHardToBorrow: Math.random() < 0.2, // 20% chance of being true
        IsBats: Math.random() < 0.3, // 30% chance of being true
        IsHalted: Math.random() < 0.1, // 10% chance of being true
      },
    };

    randomData.push(randomObject);
  }

  return randomData;
}

export const strHas = (str, substr) => {
  return str.indexOf(substr) !== -1;
}

export const isCurTimeDivisibleByMinsWithTolerance = (min, sec) => {
  const currentDate = new Date();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  if (currentSecond >= 30 && currentSecond <= 30+sec) {
    return currentMinute % min === 0;
  }

  return false;
}


export const generateAlphaNumString = (n) => {
  const alphanumericChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
    randomString += alphanumericChars[randomIndex];
  }

  return randomString;
}

export const  YTDInDays = () => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var beginningOfYear = new Date(currentYear, 0, 1);
  var differenceInMilliseconds = currentDate - beginningOfYear;
  var differenceInDays = Math.round(differenceInMilliseconds / (24 * 60 * 60 * 1000));
  return differenceInDays;
}

export const ESTToGMT = (timestamp) => {
  return (timestamp + 5 * 60 * 60 * 1000) / 1000;
}

export const GMTtoEST = (timestamp) => {
  return (timestamp - 5 * 60 * 60 * 1000) / 1000;
}


export const getIndexByVal = (jsonArr, key, val) => {
  let index = -1;

for (let i = 0; i < jsonArr.length; i++) {
  if (jsonArr[i][key] === val) {
    index = i;
    break;
  }
}
return index;
}


export const generateLineData = (n, freq) => {
  var jsonArray = [];
  var currentTime = new Date().getTime();
  var lastVal = 0;
  for (var i = 0; i < n; i++) {
    var timestamp = Math.floor(currentTime / 1000); // Convert milliseconds to seconds
    var randomValue = Math.random() * 100; // generates a random float between 0 and 100
    lastVal += 1;
    var dataPoint = {
      time: timestamp,
      value: randomValue - lastVal
    };

    jsonArray.push(dataPoint);

    // Decrease the time by the specified frequency (in minutes)
    currentTime -= freq * 60 * 1000; // Convert minutes to milliseconds
  }

  return jsonArray.reverse(); // Reverse the array to match the provided data order
}


export const generateCandleData = (n, freq, forChart) => {
  const chart = typeof forChart !== 'undefined' ? forChart : true;

  const jsonArray = [];
  var timestamp = new Date().getTime() / 1000;
  var lastClose = 0;
  const randomValue = Math.random() * 100;
  for (let i = 0; i < n; i++) {
    timestamp += 1000 * 60 * freq;

    lastClose += 1;
    const open = randomValue + lastClose;
    const high = open + .5;
    const low = open - .5;
    const close = open + .1;
    const volume = Math.random() * 1000;

    const dataPoint = {
      time: timestamp,
      close: close,
      open: open,
      high: high,
      low: low,
      volume: volume
    };

    jsonArray.push(dataPoint);
    lastClose = close;
  }

  return jsonArray;
}



export const convertJSONArrayToJSON = (jsonArray) => {
  var jsonObject = {};

  jsonArray.forEach(function(item) {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        if (!jsonObject[key]) {
          jsonObject[key] = [];
        }
        jsonObject[key].push(item[key]);
      }
    }
  });

  return jsonObject;
}

export const inJsonArray = (jsonArray, key, value) => {
  for (let i = 0; i < jsonArray.length; i++) {
    const obj = jsonArray[i];
    if (key in obj) {
      if (obj[key] === value) {
        return true; // Value exists
      }
    }
  }
  return false; // Value does not exist
}

export const jsonArrayToArrayByKey = (jsonArray, key) => {
  const extractedData = [];
  jsonArray.forEach((obj, i) => {
    extractedData.push(obj[key]);
  });
  return extractedData;
}

export const arrayToJsonArray = (arr, keyName) => {
  const jsonArray = [];
  arr.forEach(function (item) {
    jsonArray.push({ [keyName]: item });
  });
  return jsonArray;
}

export const isSubStr = (string, substring) => {
  if (string.indexOf(substring) !== -1) {
      return true;
  } else {
      return false;
  }
}

export const getAllFunctions = (file) => {
  const functions = [];

  for (const property in file) {
    if (typeof file[property] === 'function' && !property.startsWith('render')) {
      const functionInfo = {
        name: property,
        parameters: getFunctionParameters(file[property])
      };
      functions.push(functionInfo);
    }
  }

  return functions;
}

export const getFunctionParameters = (func) => {
  const parameterNames = [];
  const functionString = func.toString();

  const parameterRegex = /\(([^\)]*)\)\s*=>/;
  const match = functionString.match(parameterRegex);

  if (match && match[1]) {
    const parameters = match[1].split(',');
    for (const parameter of parameters) {
      const paramNameArr = parameter.trim().replaceAll(' ', '').split('=');
        parameterNames.push({var: paramNameArr[0], val: paramNameArr[paramNameArr.length-1]});
    }
  }

  return parameterNames;
}


export const isFloat = (n) => {
  if (typeof n === 'number' && !Number.isInteger(n)) {
    return true;
  } else {
    return false
  }
}


export const isStringInArray = (targetString, array) => {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === targetString) {
          return true;
      }
  }
  return false;
}


export const rgbColors = [
  "rgb(255, 0, 0)",    // Red
  "rgb(0, 255, 0)",    // Green
  "rgb(0, 0, 255)",    // Blue
  "rgb(255, 255, 0)",  // Yellow
  "rgb(255, 0, 255)",  // Magenta
  "rgb(0, 255, 255)",  // Cyan
  "rgb(255, 128, 0)",  // Orange
  "rgb(128, 0, 255)",  // Purple
  "rgb(0, 255, 128)",  // Lime
  "rgb(128, 255, 0)",  // Chartreuse
  "rgb(255, 128, 128)",  // Light Red
  "rgb(128, 255, 128)",  // Light Green
  "rgb(128, 128, 255)",  // Light Blue
  "rgb(255, 255, 128)",  // Light Yellow
  "rgb(255, 128, 255)",  // Light Magenta
  "rgb(128, 255, 255)",  // Light Cyan
  "rgb(255, 165, 0)",  // Orange
  "rgb(160, 32, 240)",  // Indigo
  "rgb(0, 255, 192)",  // Turquoise
  "rgb(255, 69, 0)"  // Orange-Red
];

export const getRandomRGB = () => {
  return rgbColors[Math.floor(Math.random() * rgbColors.length)];
}

export const findObjectById = (jsonArray, key, value) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i][key] === value) {
      return jsonArray[i];
    }
  }
  return null; // return null if no match is found
}

export const removeDupsFromJsonArr = (jsonArray, key) => {
  if (jsonArray !== null || jsonArray !== undefined) {
    const uniqueValues = {};
    for (let i = 0; i < jsonArray.length; i++) {
      const item = jsonArray[i];
      const value = item[key];
      if (!uniqueValues[value]) {
        uniqueValues[value] = item;
      }
    }
    const uniqueArray = Object.values(uniqueValues);
    return uniqueArray;
  } else {
    return jsonArray;
  }
}

export const getDateNDaysAgo = (n) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - n);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}


export const convertDatetimeToEpoch = (datetimeString) => {
  // "2024-01-31T16:04:18Z"
  const datetime = new Date(datetimeString);
  const estDatetime = datetime.toLocaleString('en-US', { timeZone: 'America/New_York' });
  const epochTime = new Date(estDatetime).getTime();

  return epochTime / 1000;
}


export const getRandomAlphaNum = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}


export const checkDing = (soundPlayed) => {
  const currentTime = new Date();
  if (
    (currentTime.getHours() === 16 && currentTime.getSeconds() === 0) ||
    (currentTime.getHours() === 9 && currentTime.getMinutes() === 30 && currentTime.getSeconds() === 0)
  ) {
    if (!soundPlayed) {
      ipcRenderer.send('playDing');
      soundPlayed = true;
    }
  } else {
    soundPlayed = false;
  }
  return soundPlayed;
}


export const extractValuesById = (jsonArray, id) => {
  const valuesArray = [];
  jsonArray.forEach((obj) => {
      valuesArray.push(obj?.[id]);
  });
  return valuesArray;

}

export function convertToEST(dateTimeString) {
  // Parse the input date string
  const date = new Date(dateTimeString);

  return date.toLocaleString();
}
export function convertUTCToEST(utcTimestamp) {
  // Create a Date object from the UTC timestamp
  const date = new Date(utcTimestamp);

  // Calculate the offset for EST (UTC-5 hours)
  const estOffset = -5;

  // Adjust the date object to EST
  const estDate = new Date(date.getTime() + (estOffset * 60 * 60 * 1000));

  // Format the date in a readable format
  const formattedDate = estDate.toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
  });

  return formattedDate;
}

export const formatVolume = (number) => {
  number = parseFloat(number);
  var isNeg = number < 0 ? true : false; 
  var suffix = "";
  var val = number;
  if (Math.abs(number) > 999999999999) {
    suffix = "T";
    val = val / 999999999999;
  }else if (Math.abs(number) > 999999999) {
    suffix = "B";
    val = val / 999999999;
  } else if (Math.abs(number) > 999999) {
    suffix = "M";
    val = val / 999999;
  } else if (Math.abs(number) > 999) {
    suffix = "K";
    val = val / 999;
  }
  return formatCurrency(val.toFixed(3)) + suffix;
}

export function getMean(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let average = sum / arr.length;
  return average;
}

export const sortJsonArrayByKey = (jsonArray, key) => {
  return jsonArray.sort((a, b) => {
      return a[key] - b[key];
  });
}

export function maxJsonArrayVal(jsonArray, key) {
  let max = jsonArray[0][key]; // Start with the smallest possible number
  let obj = jsonArray[0];
  jsonArray.forEach(item => {
      if (item[key] > max) {
        max = item[key];
        obj = item;
      }
  });
  return obj;
}

export function minJsonArrayVal(jsonArray, key) {
  let min = jsonArray[0][key]; // Start with the largest possible number
  let obj = jsonArray[0];
  jsonArray.forEach(item => {
      if (item[key] < min) {
        min = item[key];
        obj = item;
      }
  });
  return obj;
}

export function getBarTimeDate(time) {
  if (isUTCTimestamp(time)) {
      return new Date(time * 1000);
  } else if (isBusinessDay(time)) {
      return new Date(time.year, time.month, time.day);
  } else {
      return new Date(time);
  }
}



export const sessionHighlighter = (time) => {
  const date = getBarTimeDate(time); 
  const offset = 4;
  const hours = date.getHours();
  const minute = date.getMinutes();
  var isBeforeOpen = (hours == 9-offset && minute <= 30) || hours < 9-offset;
  var isAfterClose = hours >= 16-offset;
  if (isBeforeOpen) {
      return 'rgba(41, 98, 255, 0.08)';
  } else if (isAfterClose) {
      return 'rgba(41, 98, 255, 0.08)';
  } else {
      return 'rgba(0, 0, 0, 0)'; 
  }
};