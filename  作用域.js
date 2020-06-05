//JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

var value = 1;
function foo() {
  var a = 'aa';
  console.log(this.a);
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();//1


/*
var scope = "global scope";
function checkscope(){
  var scope = "local scope";
  function f(){
    console.log(scope);
    return scope;
  }
    return f();
}

checkscope();
*/

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        console.log(scope);
        return scope;
    }
    return f;
}
checkscope()();