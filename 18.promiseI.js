let fs = require('fs')

// 原生的方式去连续层级读取
// fs.readFile('./nameTest.txt', "utf8", (err, data) => {
//   if (err) return console.log(err)
//   fs.readFile(data, "utf8", (err, data) => {
//     if (err) return console.log(err)
//     console.log(data)
//   })
// })

/**
 * 改造成 Promise 
 */
function fsReadFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
/**
 * promise 链式调用：
 * 1.如果返回一个普通值，会走下一个then的成功
 * 2.返回的如果是一个promise，就会让promise执行采用他的状态，传递下去，调用下面相应的then
 */
fsReadFile('./nameTest.txt', 'utf8')
  .then(data => fsReadFile(data, 'utf8'))
  .then(data => console.log(data))
