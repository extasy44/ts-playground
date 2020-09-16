let apples: number;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;

//array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

//classes

class Car {}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
//1. function that returns the 'any' type

const jspn = '{"x" : 10, "y": 20}';
const coordinate: { x: number; y: number } = JSON.parse(jspn);
console.log(coordinate);

let words = ['read', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
