"use strict";
// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["apple", "banana", "mango", "orange"];
let lastTwoFruits = fruits.slice(-2);
console.log('Last two fruits array :' + lastTwoFruits);
