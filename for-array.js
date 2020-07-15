var arr = [1, 2]
arr[10] = 10
console.log(arr)
arr.name = "遍历数组"
for(var i in arr) {
  console.log(i)
}

for (let item of arr) {
  console.log(item)
}

// for in 遍历的是索引
// for of 遍历的是值