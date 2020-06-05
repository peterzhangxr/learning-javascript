//闭包就是那些能够访问自由变量的函数
//自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。


//1.即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
//2.在代码中引用了自由变量

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();