/**
 * 手写promise
 */
const Status = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED"
}

class Promise {
  constructor(executor) {
    this.value = undefined, this.reason = undefined
    this.status = Status.PENDING
    // 2.executor函数中有两个参数(也是函数)，resolve reject
    // 3.用户可能会调用这个resolve()/reject()，会传入成功的值（失败的原因）
    const resolve = (value) => {
      this.value = value
      this.status = Status.FULFILLED
    }
    const reject = (reason) => {
      this.reason = reason
      this.status = Status.REJECTED
    }
    // 1.创建Promise executor会立即执行
    // 4.executor可能会报异常 throw new Error()
    try {
      executor(resolve, reject) 
    } catch (error) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === Status.FULFILLED) onFulfilled(this.value)
    if (this.status === Status.REJECTED) onRejected(this.reason)
  }
}

module.exports = Promise
