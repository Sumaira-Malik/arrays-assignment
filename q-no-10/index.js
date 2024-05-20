"use strict";
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
