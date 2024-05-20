import chalk from "chalk";
// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.

let fruits:string[] =["apple", "banana", "mango", "orange"];
console.log(fruits);
let lastFruit = fruits.pop();
console.log(chalk.red(`\n lastFruit is: ${lastFruit}\n`));
console.log(chalk.greenBright(`\n Updated fruits array fruits is: ${fruits} \n`));


