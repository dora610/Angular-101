var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function canFly(constructorFunction) {
    console.log('CAN FLY invoked');
    constructorFunction.prototype.fly = true;
}
let Person = class Person {
    constructor(name) {
        console.log('Constructor called');
        this.name = name;
    }
};
Person = __decorate([
    canFly
], Person);
console.log('Creating 1st user');
const user1 = new Person('Binod');
console.log(`CAN I FLY: ${user1['fly']}`);
console.log('Creating 2nd user');
const user2 = new Person('Sam');
console.log(`CAN I FLY: ${user2['fly']}`);
//# sourceMappingURL=decorator.js.map