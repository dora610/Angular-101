/* interface Person{
    name:string,
    greet():void
}

interface Employee{
    empId:number
}

class Emp implements Person, Employee{
    constructor(name: string, id: number){
        this.name = name;
        this.empId = id
    }
    empId: number;
    name: string;
    greet(): void {
        console.log(`Hi! ${this.name.toLocaleUpperCase()}`);
    }
}

const emp1 = new  Emp('Binod', 1100)
console.log(emp1);
console.log(emp1.greet());

 */