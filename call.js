//call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

//模拟call的实现
Function.prototype.call2 = function(context) {
  context = context || this || window
  console.log(context)
  context.fn = this
  console.log(this)
  var args = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  //默认字符串转换
  var result = eval('context.fn('+ args +')')
  delete context.fn
  return result;
}

// 测试一下
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
  return 1111;
}

console.log(bar.call2(foo, 'Kevin', 18))

