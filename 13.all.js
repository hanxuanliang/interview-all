/**
 * 1. 读取数据异步
 */
const fs = require('fs')

// 总数据
let school = {}

/**
 * 第一版：并发的问题 使用手动计数器
 */
let index = 0
function time() {
  if (index == 2) console.log(school)
}

/**
 * 第二版：使用 after.js 来计数 原理上也是计数
 * 第二种方案，会出现顺序不一致的情况，也就是name和age的顺序不是按照执行顺序出现
 */
const after = (times, fn) => {
  return () => --times === 0 && fn()
}

const doAfter = after(2, () => {
  console.log(school)
})

fs.readFile('nameTest.txt', 'utf8', (err, data) => {
  if (err) console.log(err)
  // index ++
  school['name'] = data
  // time()
  doAfter()
})

fs.readFile('ageTest.txt', 'utf8', (err, data) => {
  if (err) console.log(err)
  // index ++
  school['age'] = data
  // time()
  doAfter()
})
