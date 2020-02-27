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
    this.onResolveCallbacks = []
    this.onRejectCallbacks = []
    // 2.executor函数中有两个参数(也是函数)，resolve reject
    // 3.用户可能会调用这个resolve()/reject()，会传入成功的值（失败的原因）
    const resolve = (value) => {
      this.value = value
      this.status = Status.FULFILLED
      this.onResolveCallbacks.forEach(fn => fn())
    }
    const reject = (reason) => {
      this.reason = reason
      this.status = Status.REJECTED
      this.onRejectCallbacks.forEach(fn => fn())
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
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === Status.FULFILLED) {
        let res = onFulfilled(this.value)
        resolve(res)
      }
      if (this.status === Status.REJECTED) { 
        onRejected(this.reason)
      }
  
      // executor 是异步的情况
      if (this.status === Status.PENDING) {
        this.onResolveCallbacks.push(() => onFulfilled(this.value))
        this.onRejectCallbacks.push(() => onRejected(this.value))
      }
    })
    return promise2
  }
}

module.exports = Promise
