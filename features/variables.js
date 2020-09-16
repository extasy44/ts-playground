var apples;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
//array
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3, 4, 5];
var truths = [true, false, true];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//object literal
var point = {
    x: 10,
    y: 20
};
//Functions
var logNumber = function (i) {
    console.log(i);
};
//When to use annotations
//1. function that returns the 'any' type
var jspn = '{"x" : 10, "y": 20}';
var coordinate = JSON.parse(jspn);
console.log(coordinate);
