const { add, subtract } = require("./myModule");

let name = "Alex Bustillos"
console.log(name);

printName = (person) => {
    return `Hello, ${person}`;
}
console.log(printName(name));

console.log(add(5, 50));
console.log(subtract(10, 20));