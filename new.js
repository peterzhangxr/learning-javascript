//new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

function ObjectFactory() {
  var obj = new Object();
  Constructor =  Array.prototype.shift.call(arguments);
  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);
  return typeof ret == 'object' ? ret : obj;
}


function Foo(name, age) {
  this.name = name;
  this.age = age

  this.habit = 'Games';
}

var foo = ObjectFactory(Foo, 'Kevin', 18)
console.log(foo.name)