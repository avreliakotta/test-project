const data = require("./data.js");

function findNullKeys(obj) {
  for (let key in obj) {
    if (obj[key] === null) {
      console.log(`Key with null value: ${key}`);
    } else if (typeof obj[key] === "object") {
      findNullKeys(obj[key], `${key}.`);
    }
  }
}
findNullKeys(data);
