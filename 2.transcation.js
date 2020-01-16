/**
 * react事务，在函数开始的时候做某件事，结束的时候再去做某件事；
 * 还可以执行多个wrapper对象，依次执行
 */
const perform = (method, wrappers) => {
  // 依次执行wrapper数组里面指定方法
  wrappers.forEach(wrap => {
    wrap.initilize()
  })
  method()
  wrappers.forEach(wrap => {
    wrap.close()
  })
} 

perform(() => {
  console.log("saying ~~~")
}, [
  { // wrapper wrapper1
    initilize() {
      console.log("hello!")
    },
    close() {
      console.log("goodbye")
    }
  }, { // wrapper wrapper2
    initilize() {
      console.log("guy!")
    },
    close() {
      console.log("alone")
    }
  }
])
