function  Student(name) {
  console.log("赋值前this", this)
  this.name = name
  console.log("赋值后this", this)
}

var student = new Student("peter")
console.log(student.__proto__)
console.log(Object.prototype.toString.call(student))
console.log(student.toString())

var obj = Object()
console.log(obj)

console.log(typeof Object)


/**
* new 具体的操作
*/

//1.生产一个新的对象
//2.执行[[Prototype]]链接
//3.生产的对象绑定到函数调用this
//4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
//5.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。


function Student2(name) {
    this.name = name
    this.big = true
    //return null
    //return undefined
    //return 1
    //return '1'
    //return true
    //return Symbol('11')
    //return {}
    //return []
}

console.log(Student2('peter'))
console.log(new Student2('peter'))

function newFactory() {
  console.log(arguments)
  var obj = new Object()
  var ctor = Array.prototype.shift.call(arguments)
  console.log(ctor, 'ctor')
  obj.__proto__ = ctor.prototype
  console.log(obj, 'obj')
  var ret = ctor.apply(obj, arguments)
  console.log(typeof ret)
  return typeof ret === 'object' ? ret : obj
}

console.log(newFactory(Student2, "peter"))
