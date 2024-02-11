const date = new Date(2024, 0, 1, 2, 3, 4, 5);

console.log(date);

const year = date.getFullYear();
const month = date.getMonth();

date.setFullYear(2025);
date.setMonth(0);

console.log(year);
console.log(month);
