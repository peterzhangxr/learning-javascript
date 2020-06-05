function Person() {

}

console.log('Person.prototype:', Person.prototype);


console.log('Person.prototype.__proto__:', Person.prototype.__proto__);


//Person.prototype.name = 'Kevin';

var p1 = new Person();
var p2 = new Person();
console.log('Person:', Person);
console.log('Person.name:',Person.name);
console.log('Person.prototype.name:', Person.prototype.name);
console.log('p1.name:', p1.name);
console.log('p2.name:', p2.name);
console.log('p1.__proto__ ===  Person.prototype:', p1.__proto__ ===  Person.prototype);
console.log('Person.prototype.constructor:', Person.prototype.constructor);

// 顺便学习一个ES5的方法,可以获得对象的原型
console.log('Object.getPrototypeOf(p1) === Person.prototype:', Object.getPrototypeOf(p1) === Person.prototype) // true

console.log('Person === Person.prototype.constructor:', Person === Person.prototype.constructor);


//当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

//原型的原型

console.log(Object.prototype);
console.log(Object.prototype.__proto__);
