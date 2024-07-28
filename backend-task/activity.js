//- The utility should fetch data from the API a specified number of times times.
// The number of times to call the API and the format for saving or displaying
// the output will be provided as input parameters to your utility.
// - The utility should provide three options:
//     - Download the data as a JSON file.
//     - Download the data as a CSV file.
//     - Print the data to the console.

const fs = require("fs");

// Command Line
let arg1 = [process.argv[2], process.argv[3]];
let arg2 = [process.argv[4], process.argv[5]];

async function fetchData(numToCall) {
  const url = "https://bored-api.appbrewery.com/random";
  let data = [];

  for (let i = 0; i < numToCall; i++) {
    const response = await fetch(url).then((response) => response.json());
    data.push(response);
  }

  return data;
}

function handleHelp() {
  console.log("Usage:");
  console.log("-h : help");
  console.log("-n : number of times to call the api");
  console.log("-f : format to retrieve the data (json, csv, console)");
}

function saveToJSON(data) {
  fs.writeFileSync(
    `appbrewery-${Date.now()}.json`,
    JSON.stringify(data, null, 2),
  );
  console.log("file saved in json format");
}

function saveToCSV(data) {
  const headers = Object.keys(data[0]);
  const rows = data.map((row) => {
    return Object.values(row);
  });

  const csv = [headers, ...rows].join("\n");

  fs.writeFileSync(`appbrewery-${Date.now()}.csv`, csv);
  console.log("file saved in csv format");
}

function printToConsole(data) {
  console.log("printing your data on the console...");
  console.log(data);
}

async function handleRequest() {
  let numToCall = arg1[1];
  let format = arg2[1];

  const data = await fetchData(numToCall);

  switch (format) {
    case "json":
      saveToJSON(data);
      break;
    case "csv":
      saveToCSV(data);
      break;
    case "console":
      printToConsole(data);
      break;
  }
}

if (arg1[0] === "-n" && arg2[0] === "-f") {
  handleRequest();
} else {
  handleHelp();
}
