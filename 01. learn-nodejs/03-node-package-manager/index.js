const lodash = require("lodash");

const names = ["anirudha", "rohit", "rupali", "ramchandra", "kalpana"];

const capitalizeNames = lodash.map(names, lodash.capitalize);

console.log(`Capitalize names are: `);
console.log(capitalizeNames);
