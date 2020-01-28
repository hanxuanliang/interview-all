const fs = require('fs')

let school = {}

let event = {
  arr: [],
  on(fn) {
    this.arr.push(fn)
  },
  emit() {
    this.arr.forEach(f => f())
  }
}

// 订阅
event.on(() => {
  // 3.当arr中的key-value对达到2时，就打印出对象
  if (Object.keys(school).length === 2) {
    console.log(school)
  }
})

fs.readFile('nameTest.txt', 'utf8', (err, data) => {
  // 1.向arr中加入新的key-value
  school['name'] = data
  // 2.发布，执行event的arr中的函数
  event.emit()
})

fs.readFile('ageTest.txt', 'utf8', (err, data) => {
  school['age'] = data
  event.emit()    // 发布
})
