/*
'use strict'
    
if (true) {
    function foo() {
        console.log(1)
    }
} else {
    function foo() {
        console.log(2)
    }
}

foo() //1
*/

//引用
/*
const a = [1]
const X = a
const Y = a

X.push(2)
Y[1] = 10

console.log(X, Y)


var p = [4, 5, 6]
var [z] = p
console.log(z)
var [x, y] = [z] = p
console.log(x, y, z) //4 5 4
*/

//字符串字面量标签
/*
let name = "peter"
let age = 28
function foo(strings, ...values) {
    strings.reduce((s, v, idx) => {
        console.log(v, idx)
    })
    //console.log(strings, values)
}

foo`My Name is ${name}!!!, ${age}      How Are you`
*/
/*
'use strict'
const testA = require('./test_a')

//执行上下文 this
testA.makeRequest()
*/
/*
var o = {}
for (o.a of [1, 2, 3]) {
    console.log(o.a)
}

console.log(o)
*/


/*

const arr = [1, 2, 3]

console.log(arr[Symbol.iterator]())
const it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
*/

function  *foo() {
    yield *[1,2,3]
}

const it = foo()
console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

