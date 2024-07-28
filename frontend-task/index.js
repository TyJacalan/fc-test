let fetchedData = [];
let numToCall = 15;

async function fetchData(numToCall) {
  const proxyUrl = "http://localhost:8080/";
  const url = "https://bored-api.appbrewery.com/random";
  let data = [];

  document.querySelector(".loader").style.display = "block";

  for (let i = 0; i < numToCall; i++) {
    try {
      const response = await fetch(proxyUrl + url);
      const result = await response.json();
      data.push(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchedData = data;
  displayData(data);

  document.querySelector(".loader").style.display = "none";
}

function displayData(data) {
  if (data.length === 0) return;

  const headerRow = document.getElementById("data-table-head");
  const tableBody = document.getElementById("data-table-body");

  headerRow.innerHTML = "";
  tableBody.innerHTML = "";

  const headers = Object.keys(data[0]);
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
  });

  data.forEach((item) => {
    const row = tableBody.insertRow();
    headers.forEach((header) => {
      const cell = row.insertCell();
      cell.innerText = item[header] !== undefined ? item[header] : "";
    });
  });
}

function downloadJSON() {
  const blob = new Blob([JSON.stringify(fetchedData)], {
    type: "application/json",
  });
  downloadFile(blob, "json");
}

function downloadCSV() {
  const headers = Object.keys(fetchedData[0]);
  const rows = fetchedData.map((item) =>
    headers.map((header) => JSON.stringify(item[header], null, 2)).join(","),
  );
  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  downloadFile(blob, "csv");
}

function downloadFile(blob, format) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `appbrewery-${Date.now()}.${format}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function printToConsole() {
  console.log(fetchedData);
}

window.onload = () => fetchData(numToCall);
