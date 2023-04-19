javascript:(function() {
  const rows = document.querySelectorAll('table tr:not(:first-child)');
  let maxTemp = -25569;
  let hottestDay;
  rows.forEach(row => {
    const cells = row.cells;
    const temp = parseFloat(cells[3].textContent);
    if (temp > maxTemp) {
      maxTemp = temp;
      hottestDay = row;
    }
  });
  const hottestDate = hottestDay.cells[2].textContent;
  const hottestTemp = hottestDay.cells[3].textContent;
  const message = `найбільш спекотний день: 
        \nдата - ${hottestDate} 
        \nтемпература - ${hottestTemp}°C`;
  alert(message);
})();
