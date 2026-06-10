class person{
    public name: string;
    private age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age= age;
    }

    public getAge(): number{
        return this.age;
    }

    public introduce(): void{
        console.log("My name is " + this.name + " and I am " + this.age + " years old")
    }
}

let person1 = new person("Ali",18);
let person2 = new person("Ahmed",25);
console.log("Name of person1 ", person1.name);
console.log("Age of person1 ", person1.getAge());
person1.introduce();
person2.introduce();

person2.name = "Khan";
person2.introduce();
