const numberArray = [2, 3, 4, 5, 6, 7, 8, 9];

const tableEl = document.createElement("table");
document.getElementById("container").appendChild(tableEl);

numberArray.forEach((number) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = `${number}단`;
  tr.appendChild(th);

  for (let i = 1; i <= 9; i++) {
    const td = document.createElement("td");
    td.textContent = `${number} x ${i} = ${number * i}`;
    tr.appendChild(td);
  }

  tableEl.appendChild(tr);
});
