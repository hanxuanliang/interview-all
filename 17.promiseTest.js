/**
 * 并发时代的问题：
 * 1.多个异步方法执行问题
 * 2.链式调用的问题（数据获取的先后问题）
 * 3.callback hell 多层回调嵌套问题
 */

const Promise = require('./18.promise')
/**
 * Promise用法：
 * 1.Promise是一个类
 * 2.每次new Promise 都需要传递一个执行器，执行器是立即执行的
 * 3.执行器函数中有两个函数，resolve reject
 * 4.默认Promise有3个状态，pending resolve(成功) reject(拒绝) 
 * 5.如果一点旦成功了，不能变成失败；一旦失败，不能再成功；
 * 【看谁先执行，如果resolve先执行就走成功这条路，不会再执行后面的错误】
 * 【只有当前状态是pending的时候，才能更改状态】
 * 6.每一个promise实例都有一个then()
 */
const p = new Promise((resolve, reject) => {
  resolve('Get it!')
  // throw new Error('Failed')   // 这句话加不加不影响，反正已经resolve成功了
})
p.then(data => console.log(data), err => console.log(err))
