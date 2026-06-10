"use strict";
function add(a, b) {
    return a + b;
}
console.log("Sum of two values:", add(5, 3));
const multiply = (a, b) => {
    return a * b;
};
console.log("Product of two values:", multiply(5, 3));
function greet(name, age) {
    if (age !== undefined) {
        console.log("Hello " + name + " You are " + age + " years old");
    }
    else {
        console.log("Hello " + name + "!");
    }
}
greet("Sara", 15);
greet("Ali");
