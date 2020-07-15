var widget = {
  a: 1,
  b: 1
}

var button = Object.create(widget)
button.c = 2
button.a = 2
console.log(button.__proto__ == widget)
console.log(button.hasOwnProperty('c'))
console.log(widget)
console.log(button)