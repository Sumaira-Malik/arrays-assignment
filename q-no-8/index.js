"use strict";
// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
fruits.unshift('kiwi');
console.log(`Updated array: ${fruits}`);
