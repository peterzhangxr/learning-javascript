/*
function foo() {
   this.a = a
}

var obj = {}
foo.bind()
function bind() {

}*/

//7种基本数据类型

function Foo() {

}

Foo.prototype.wheels = 4

console.log(Foo.constructor === Foo)

var foo = new Foo()

console.log(foo.__proto__.constructor)