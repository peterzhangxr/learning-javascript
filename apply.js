Function.prototype.apply2 = function(context, arr) {
  context = Object(context) || window
  context.fn = this
  
  var result;
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for(var i = 1;i < arr.length; i++) {
      args.push('arguments['+ i  +']')
    }

    result = eval('context.fn('+ args +')');
  }

  delete context.fn;
  return result;
}


var obj = {
  name: 'peter'
}
