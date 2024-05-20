"use strict";
// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
let firstFruit = fruits.shift();
console.log(firstFruit);
// console.log(firstFruit is : ${firstFruit}`);
console.log(`Updated array is : ${fruits}`);
