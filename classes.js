"use strict";
class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    introduce() {
        console.log("My name is " + this.name + " and I am " + this.age + " years old");
    }
}
let person1 = new person("Ali", 18);
let person2 = new person("Ahmed", 25);
console.log("Name of person1 ", person1.name);
console.log("Age of person1 ", person1.getAge());
person1.introduce();
person2.introduce();
person2.name = "Khan";
person2.introduce();
