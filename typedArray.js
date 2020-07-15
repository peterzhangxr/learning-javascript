/*
var buf = new ArrayBuffer(32)

var arr = new Uint16Array(buf)
console.log(arr)
*/

const arrLike = {
  length: 3,
  0: "foo",
  1: {
    x: 1,
    y: 2
  }
}

const arr = Array.from(arrLike)
arr[1].x = 2
console.log(arr, arrLike)


console.log([1,2, 3, 4,5].copyWithin(2, 1))


function foo() {

}

console.log(foo.name)