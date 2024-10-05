// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`
    }
}
class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
class Bird {
    constructor(name, sex) {
        this.name = name; // กำหนดคุณสมบัติ name จากค่าที่รับเข้ามา
        this.sex = sex;   // กำหนดคุณสมบัติ sex จากค่าที่รับเข้ามา
    }

    // เมธอด speak จะตรวจสอบ sex ว่าเป็น "male" หรือไม่
    speak() {
        if (this.sex === 'male') {
            return `It\'s me! ${this.name}, the parrot!`; // ถ้า sex เป็น male
        } else {
            return `${this.name} says squawk!`; // ถ้า sex ไม่ใช่ male
        }
    }
}
let chris = new Cat('chris', 'M');
console.log(chris.speak());