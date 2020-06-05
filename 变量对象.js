var a = 1;
console.log(this.a);

function foo(a) {
  console.log(arguments);
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);