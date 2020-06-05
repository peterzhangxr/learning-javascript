

//解释：Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的。
let promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

promise.then(() => {
  console.log(3)
})
console.log(4)
