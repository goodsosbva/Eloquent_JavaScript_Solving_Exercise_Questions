const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function buildTable(data) {
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const keys = Object.keys(data[0]);

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  data.forEach((obj) => {
    const row = document.createElement("tr");

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];

      if (typeof obj[key] === "number") {
        td.style.textAlign = "right";
      }

      row.appendChild(td);
    });

    table.appendChild(row);
  });

  return table;
}

const mountainsDiv = document.getElementById("mountains");
mountainsDiv.appendChild(buildTable(MOUNTAINS));
