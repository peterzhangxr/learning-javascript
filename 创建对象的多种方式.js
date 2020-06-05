//工厂模式

function createPerson(name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
      console.log(this.name);
  };

  return o;
}

var person1 = createPerson('kevin');

//缺点：对象无法识别，因为所有的实例都指向一个原型
