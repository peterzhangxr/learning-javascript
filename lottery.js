
var awards = [
  {
    id: 1,
    v: 1,
    count:10,
  }, {
    id: 2,
    v: 20,
    count:0,
  }, {
    id: 3,
    v: 25,
    count:0,
  }, {
    id: 4,
    v: 35,
    count:0,
  }, {
    id: 5,
    v: 29,
    count:0
  }
]

function lottery() {
  let sum = 0
  for(let item of awards) {
    sum += item.v
  }

  for(let item of awards) {
    let num = Math.floor(Math.random(1, sum) * sum + 1)
    if (num <= item.v) {
      item.count += 1
      break;
    } else {
      sum -= item.v
    }
  }
}



(() => {
  for(let i = 0;i < 10000;i++){
    lottery()
  }
  console.log(awards)
})()
