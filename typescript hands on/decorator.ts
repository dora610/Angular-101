function canFly(constructorFunction: Function):void{
    console.log('CAN FLY invoked');
    constructorFunction.prototype.fly=true
}

@canFly
class Person {
    private name: string

    constructor(name: string){
        console.log('Constructor called');
        this.name = name
    }
}

console.log('Creating 1st user');

const user1: Person = new Person('Binod')
console.log(`CAN I FLY: ${user1['fly']}`);


console.log('Creating 2nd user');

const user2: Person = new Person('Sam')
console.log(`CAN I FLY: ${user2['fly']}`);

