let messageToSay : string = 'It works!!'
console.log(messageToSay);

/* interface Person {
    name: string,
    age: number,
    hobby: string[]
}

let person: Person = {
    name: "Binod",
    age: 20,
    hobby: [' chess', 'play guitar']
}

console.log(person); */

function greet(name:string):void {
    console.log(`Hello ${name}`);
}

function add(num1:number, num2:number):number {
    return num1 + num2
}

const substract = (num1:number, num2:number): number => num2-num1

console.log(add(22,33));
console.log(substract(10,40));

