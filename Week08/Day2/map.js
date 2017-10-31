'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

let eNumbers = fruits.map(function(fruit) {
    let countE = 0;
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === 'e') {
            countE++;
        }
    }
    return countE;
})

console.log(eNumbers)

// let gekko = 'tigris'

// console.log((gekko.match(/i/g)||[]).length)

