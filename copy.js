/**
* 深浅拷贝
*/

//深浅拷贝都是相对于javascript的饮用类型而言的
//浅拷贝就只是复制对象的引用，如果拷贝后的对象发生变化，原对象也会发生变化。只有深拷贝才是真正地对对象的拷贝。


/**
* 浅拷贝只复制引用 而未复制真正的值
*/

//数组的浅拷贝
/*
const arr  = [1, 3, 5, 7]
const cloneArr = arr

console.log(arr, cloneArr)
arr.push(9)
console.log(arr, cloneArr)

const obj = { x: 1, y: 2, foo: () => {
  console.log(this.x, this.y)
}}

const cloneObj = obj
console.log(obj, cloneObj)

cloneObj.y = 3
obj.x = 4
console.log(obj, cloneObj, obj === cloneObj)*/

/*
const obj = {x: 1, y: 1, foo: {a: 1}}
const cloneObj = Object.assign({}, obj)
console.log(obj === cloneObj)
cloneObj.foo.a = 2
console.log(obj, cloneObj)
*/
//...扩展运算符也是浅拷贝
const foo = [1, 2,3]
console.log(typeof foo)
function shallowCopy(obj) {
  if (typeof obj != 'object') return
  
  var newObj = obj instanceOf Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }


  return newObj
}

function deepCopy(obj) {
  if (typeof obj != 'object') return
  
  var newObj = obj instanceOf Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }


  return newObj
}
